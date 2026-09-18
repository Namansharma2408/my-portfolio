document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* =========================================================
     ABOUT SECTION
  ========================================================= */

  const aboutSection =
    document.getElementById("about-us");

  if (!aboutSection) {
    return;
  }


  /* =========================================================
     REDUCED MOTION
  ========================================================= */

  const reduceMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


  /* =========================================================
     BACKGROUND VIDEO
  ========================================================= */

  const video =
    document.getElementById("cloud-background");


  if (video) {

    if (reduceMotion) {

      video.pause();

      video.removeAttribute("autoplay");

    } else {

      /*
       * Slightly slower background movement.
       */

      video.playbackRate = 0.6;


      /*
       * Calling play() manually makes the video
       * more reliable when the browser allows autoplay.
       */

      const playPromise =
        video.play();


      if (
        playPromise &&
        typeof playPromise.catch === "function"
      ) {

        playPromise.catch(() => {
          /*
           * Autoplay was blocked.
           * This is harmless.
           */
        });

      }

    }

  }


  /* =========================================================
     COUNTERS
  ========================================================= */

  const counters =
    aboutSection.querySelectorAll(
      ".counter"
    );


  const animatedCounters =
    new WeakSet();


  function animateCounter(counter) {

    if (
      animatedCounters.has(counter)
    ) {
      return;
    }


    animatedCounters.add(counter);


    const target =
      Number(
        counter.dataset.target
      ) || 0;


    const duration = 1500;

    const startTime =
      performance.now();


    function updateCounter(currentTime) {

      const elapsed =
        currentTime - startTime;


      const progress =
        Math.min(
          elapsed / duration,
          1
        );


      /*
       * Ease-out cubic.
       */

      const eased =
        1 -
        Math.pow(
          1 - progress,
          3
        );


      const current =
        Math.floor(
          target * eased
        );


      counter.textContent =
        current.toLocaleString(
          "en-US"
        );


      if (progress < 1) {

        requestAnimationFrame(
          updateCounter
        );

      } else {

        counter.textContent =
          target.toLocaleString(
            "en-US"
          );

      }

    }


    requestAnimationFrame(
      updateCounter
    );

  }


  /* =========================================================
     REDUCED MOTION
  ========================================================= */

  if (reduceMotion) {

    aboutSection.classList.add(
      "about-visible"
    );


    counters.forEach((counter) => {

      const target =
        Number(
          counter.dataset.target
        ) || 0;


      counter.textContent =
        target.toLocaleString(
          "en-US"
        );

    });


    return;

  }


  /* =========================================================
     ABOUT REVEAL
  ========================================================= */

  const aboutObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }


          aboutSection.classList.add(
            "about-visible"
          );


          observer.unobserve(
            entry.target
          );

        });

      },
      {
        threshold: 0.12,

        rootMargin:
          "0px 0px -6% 0px"
      }
    );


  aboutObserver.observe(
    aboutSection
  );


  /* =========================================================
     STATS COUNTER OBSERVER
  ========================================================= */

  const statsBox =
    aboutSection.querySelector(
      ".stats-box"
    );


  if (statsBox) {

    const statsObserver =
      new IntersectionObserver(
        (entries, observer) => {

          entries.forEach((entry) => {

            if (
              !entry.isIntersecting
            ) {
              return;
            }


            counters.forEach(
              animateCounter
            );


            observer.unobserve(
              entry.target
            );

          });

        },
        {
          threshold: 0.25
        }
      );


    statsObserver.observe(
      statsBox
    );

  }


  /* =========================================================
     PAUSE MARQUEE WHEN TAB IS HIDDEN
  ========================================================= */

  document.addEventListener(
    "visibilitychange",
    () => {

      const pills =
        aboutSection.querySelector(
          ".expertise-pills"
        );


      if (!pills) {
        return;
      }


      if (
        document.hidden
      ) {

        pills.style.animationPlayState =
          "paused";

      } else {

        pills.style.animationPlayState =
          "running";

      }

    }
  );

});