document.addEventListener("DOMContentLoaded", () => {
  const trigger = document.querySelector("#side-nav-trigger")
  const menu = document.querySelector("#side-nav-trigger i")
  const drawer = document.querySelector("#full")
  const cross = document.querySelector(".close-btn")

  if (!drawer || !trigger || !cross) return

  // Fallback when GSAP CDN fails: use a CSS class toggle instead.
  if (!window.gsap) {
    drawer.style.transform = "none"
    drawer.style.visibility = "visible"
    drawer.style.display = "none"
    const toggleFallback = (open) => {
      drawer.style.display = open ? "flex" : "none"
      trigger.setAttribute("aria-expanded", String(open))
      document.body.style.overflow = open ? "hidden" : ""
    }
    trigger.addEventListener("click", () => toggleFallback(drawer.style.display === "none"))
    cross.addEventListener("click", () => toggleFallback(false))
    document.querySelectorAll(".side-nav-item a").forEach((link) => {
      link.addEventListener("click", () => toggleFallback(false))
    })
    if (window.innerWidth <= 768) trigger.style.display = "block"
    return
  }

  gsap.set("#full", {
    x: "102%",
    visibility: "visible",
  })

  gsap.set(".side-nav-item", {
    opacity: 0,
    x: 80,
  })

  gsap.set(".close-btn", {
    opacity: 0,
    scale: 0.8,
  })

  const tl = gsap.timeline({
    paused: true,
    reversed: true,
    onReverseComplete: () => {
      gsap.set("#full", { visibility: "hidden" })
      document.body.style.overflow = ""
      trigger.setAttribute("aria-expanded", "false")
      trigger.focus({ preventScroll: true })
    },
  })

  tl.set("#full", { visibility: "visible" })
    .to("#full", {
      x: 0,
      duration: 0.6,
      ease: "power3.inOut",
    })

    .to(
      ".side-nav-item",
      {
        x: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.35,
        ease: "power3.out",
      },
      "-=0.3",
    )

    .to(
      ".close-btn",
      {
        opacity: 1,
        scale: 1,
        duration: 0.25,
        ease: "back.out(2)",
      },
      "-=0.35",
    )

  const openDrawer = () => {
    document.body.style.overflow = "hidden"
    trigger.setAttribute("aria-expanded", "true")
    tl.play()
    cross.focus({ preventScroll: true })
  }

  const closeDrawer = () => {
    tl.reverse()
  }

  const isOpen = () => !tl.reversed() && tl.progress() > 0

  const activate = (fn) => (e) => {
    if (e.type === "keydown" && e.key !== "Enter" && e.key !== " ") return
    if (e.type === "keydown") e.preventDefault()
    fn()
  }

  trigger.addEventListener("click", openDrawer)
  trigger.addEventListener("keydown", activate(openDrawer))
  cross.addEventListener("click", closeDrawer)
  cross.addEventListener("keydown", activate(closeDrawer))

  document.querySelectorAll(".side-nav-item a").forEach((link) => {
    link.addEventListener("click", () => {
      closeDrawer()
    })
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) closeDrawer()
  })

  document.addEventListener("click", (e) => {
    if (isOpen() && !drawer.contains(e.target) && !trigger.contains(e.target)) {
      closeDrawer()
    }
  })

  function updateTrigger() {
    if (window.innerWidth <= 768) {
      trigger.style.display = "block"
    } else {
      trigger.style.display = window.scrollY > 100 ? "block" : "none"

      if (window.scrollY <= 100 && isOpen()) {
        closeDrawer()
      }
    }
  }

  updateTrigger()

  window.addEventListener("scroll", updateTrigger, { passive: true })
  window.addEventListener("resize", updateTrigger)
})
