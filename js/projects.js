document.addEventListener("DOMContentLoaded", () => {
  const projectData = JSON.parse(
    document.getElementById("project-data").textContent
  );

  const projectsContainer = document.querySelector(".projects");
  if (!projectsContainer) return;

  projectsContainer.innerHTML = `
    <section class="projects-master-section" style="--project-count: ${projectData.length};">
      <div class="project-bg-stack swap-slot" id="slot-bg">
        <div class="swap-layer swap-current" id="bg-current"></div>
        <div class="swap-layer swap-next" id="bg-next"></div>
      </div>

      <div class="project-sticky-shell">
        <article class="project-stage-card" id="project-stage-card">
          <div class="project-title-slot swap-slot" id="slot-title">
            <div class="swap-layer swap-current" id="title-current"></div>
            <div class="swap-layer swap-next" id="title-next"></div>
          </div>

          <div class="project-layout-grid">
            <div class="project-layout-image-wrap swap-slot" id="slot-image">
              <div class="swap-layer swap-current" id="image-current"></div>
              <div class="swap-layer swap-next" id="image-next"></div>
            </div>

            <div class="project-layout-text-wrap">
              <div class="project-block swap-slot" id="slot-problem">
                <div class="swap-layer swap-current" id="problem-current"></div>
                <div class="swap-layer swap-next" id="problem-next"></div>
              </div>

              <div class="project-block swap-slot" id="slot-solution">
                <div class="swap-layer swap-current" id="solution-current"></div>
                <div class="swap-layer swap-next" id="solution-next"></div>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div class="project-index-steps" aria-hidden="true">
        ${projectData
          .map(
            (_, idx) =>
              `<div class="project-index-step" data-project-index="${idx}"></div>`
          )
          .join("")}
      </div>
    </section>
  `;

  /* ─── Slot references ─── */
  const slotBg       = document.querySelector("#slot-bg");
  const slotTitle    = document.querySelector("#slot-title");
  const slotImage    = document.querySelector("#slot-image");
  const slotProblem  = document.querySelector("#slot-problem");
  const slotSolution = document.querySelector("#slot-solution");

  if (!slotBg || !slotTitle || !slotImage || !slotProblem || !slotSolution) return;

  const allSlots = [slotBg, slotTitle, slotImage, slotProblem, slotSolution];

  /* ─── Slot state map: tracks which DOM el is "current" vs "next" ─── */
  const slotState = new Map();
  allSlots.forEach((slot) => {
    const current = slot.querySelector(".swap-current");
    const next    = slot.querySelector(".swap-next");
    if (current && next) slotState.set(slot, { current, next });
  });

  /* ─── Swap engine state ─── */
  const SWAP_MS      = 520;           // must match CSS --swap-duration
  const STAGGER_PX   = 36;           // vertical stagger between slots
  let   activeIndex  = -1;
  let   isAnimating  = false;
  let   pendingIndex = null;          // index queued while animation runs

  /* ─── Image preload cache ─── */
  const imageCache = new Map();
  const preloadImage = (src) => {
    if (!src) return Promise.resolve();
    if (imageCache.has(src)) return imageCache.get(src);
    const p = new Promise((res) => {
      const img = new Image();
      img.src = src;
      (img.decode ? img.decode() : Promise.resolve())
        .then(res)
        .catch(res);
    });
    imageCache.set(src, p);
    return p;
  };

  /* ─── Content writers ─── */
  const writers = {
    [slotBg.id]:       (el, p) => { el.style.background = p.bg; },
    [slotTitle.id]:    (el, p) => { el.innerHTML = `<h2 class="project-stage-title">${p.title}</h2>`; },
    [slotImage.id]:    (el, p) => { el.innerHTML = `<img src="${p.image}" alt="${p.title}" loading="eager"/>`; },
    [slotProblem.id]:  (el, p) => { el.innerHTML = `<h3>Problem</h3><p>${p.problem}</p>`; },
    [slotSolution.id]: (el, p) => {
      el.innerHTML = `<h3>Solution</h3><p>${p.solution}</p>
        <div class="project-tech-tags">
          ${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
        </div>`;
    },
  };

  const writeToLayer = (el, slot, proj) => writers[slot.id]?.(el, proj);

  /* ─── Paint initial project immediately (no animation) ─── */
  const paintInitial = (proj) => {
    allSlots.forEach((slot) => {
      const { current } = slotState.get(slot);
      writeToLayer(current, slot, proj);
    });
  };

  /* ─── GSAP-powered swap ─── */
  const runSwap = (proj, direction) => {
    return new Promise((resolve) => {
      const forward = direction >= 0;

      allSlots.forEach((slot, i) => {
        const { next } = slotState.get(slot);
        writeToLayer(next, slot, proj);
      });

      /* Stagger: each slot gets a tiny delay offset so they cascade */
      const tl = gsap.timeline({ onComplete: resolve });

      allSlots.forEach((slot, i) => {
        const { current, next } = slotState.get(slot);
        const delay    = i * 0.038;
        const enterY   = forward ?  "102%" : "-102%";
        const exitY    = forward ? "-4%"   :  "4%";

        /* Snap next into start position instantly */
        gsap.set(next, { yPercent: forward ? 102 : -102, opacity: 1, zIndex: 2 });
        gsap.set(current, { zIndex: 1 });

        /* Animate both layers simultaneously */
        tl.to(
          next,
          { yPercent: 0, ease: "expo.out", duration: SWAP_MS / 1000 },
          delay
        );
        tl.to(
          current,
          { yPercent: forward ? -4 : 4, opacity: 0.0, ease: "expo.out", duration: SWAP_MS / 1000 },
          delay
        );
      });

      tl.call(() => {
        /* Swap DOM roles */
        allSlots.forEach((slot) => {
          const state = slotState.get(slot);
          const { current, next } = state;

          current.classList.remove("swap-current");
          current.classList.add("swap-next");
          next.classList.remove("swap-next");
          next.classList.add("swap-current");

          /* Reset outgoing layer */
          gsap.set(current, { yPercent: 0, opacity: 1, zIndex: 0 });
          if (slot.id === "slot-bg") current.style.background = "";
          else current.innerHTML = "";

          slotState.set(slot, { current: next, next: current });
        });
      });
    });
  };

  /* ─── Main render controller ─── */
  const renderProject = async (index) => {
    if (index < 0 || index >= projectData.length) return;

    /* If the same project is already shown and idle, skip */
    if (index === activeIndex && !isAnimating) return;

    /* If busy, queue the latest request (drop intermediate ones) */
    if (isAnimating) {
      pendingIndex = index;
      return;
    }

    const proj      = projectData[index];
    const direction = (activeIndex === -1 || index > activeIndex) ? 1 : -1;

    /* Paint without animation on first render */
    if (activeIndex === -1) {
      paintInitial(proj);
      activeIndex = index;
      return;
    }

    isAnimating = true;
    pendingIndex = null;

    /* Preload image before animating (avoids mid-animation flash) */
    await preloadImage(proj.image);

    await runSwap(proj, direction);

    activeIndex  = index;
    isAnimating  = false;

    /* Drain the queue (only the most recently requested index) */
    if (pendingIndex !== null && pendingIndex !== activeIndex) {
      const next = pendingIndex;
      pendingIndex = null;
      renderProject(next);
    }
  };

  /* ─── Warm up ─── */
  renderProject(0);
  projectData.forEach((p) => preloadImage(p.image));

  /* ─── ScrollTrigger wiring ─── */
  gsap.registerPlugin(ScrollTrigger);

  const steps     = document.querySelectorAll(".project-index-step");
  let   lastIndex = -1;

  steps.forEach((step) => {
    const index = Number(step.dataset.projectIndex);

    ScrollTrigger.create({
      trigger:   step,
      /*
       * Fire when the *top* of the step passes 60% down the viewport
       * and when the *bottom* passes 40% up — this gives a wide activation
       * band so rapid scrolling doesn't skip an index.
       */
      start: "top 60%",
      end:   "bottom 40%",

      onEnter: () => {
        if (index !== lastIndex) {
          lastIndex = index;
          renderProject(index);
        }
      },
      onEnterBack: () => {
        if (index !== lastIndex) {
          lastIndex = index;
          renderProject(index);
        }
      },
      /*
       * onLeave / onLeaveBack: when the user scrolls PAST a section
       * without triggering the center band (very fast scroll), we nudge
       * to the adjacent project so the display never shows a stale card.
       */
      onLeave: () => {
        const next = index + 1;
        if (next < projectData.length && next !== lastIndex) {
          lastIndex = next;
          renderProject(next);
        }
      },
      onLeaveBack: () => {
        const prev = index - 1;
        if (prev >= 0 && prev !== lastIndex) {
          lastIndex = prev;
          renderProject(prev);
        }
      },
    });
  });
});