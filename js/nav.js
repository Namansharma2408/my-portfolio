document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector("#side-nav-trigger i")
  const cross = document.querySelector(".close-btn")
  const triggerContainer = document.querySelector("#side-nav-trigger")

  if (!menu || !cross || !triggerContainer) return

  gsap.set("#full", {
    x: "100%",
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
  })

  tl.to("#full", {
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

  menu.addEventListener("click", () => {
    gsap.set("#full", {
      width: window.innerWidth <= 768 ? "60vw" : "30vw",
    })

    tl.play()
  })

  cross.addEventListener("click", () => {
    tl.reverse()
  })

  document.querySelectorAll(".side-nav-item a").forEach((link) => {
    link.addEventListener("click", () => {
      tl.reverse()
    })
  })

  function updateTrigger() {
    if (window.innerWidth <= 768) {
      triggerContainer.style.display = "block"
    } else {
      triggerContainer.style.display = window.scrollY > 100 ? "block" : "none"

      if (window.scrollY <= 100 && !tl.reversed()) {
        tl.reverse()
      }
    }
  }

  updateTrigger()

  window.addEventListener("scroll", updateTrigger)
  window.addEventListener("resize", updateTrigger)
})
