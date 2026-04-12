document.addEventListener("DOMContentLoaded", () => {
  var menu = document.querySelector("#side-nav-trigger i");
  var cross = document.querySelector("#full i");
  var triggerContainer = document.querySelector("#side-nav-trigger");

  if (!menu || !cross || !triggerContainer) {
    console.warn("[nav.js] missing nav elements");
    return;
  }
  
  // Base states
  gsap.set("#full", { x: "100%", right: 0 });
  gsap.set("#full h4", { opacity: 0, x: '20vw' });
  gsap.set("#full i", { opacity: 0, scale: 0.8 });

  var tl = gsap.timeline({ paused: true, reversed: true });

  tl.to("#full", {
      x: "0%",
      duration: 0.6,
      ease: "power3.inOut"
  })
  .to("#full h4", {
      x: 0,
      opacity: 1,
      stagger: 0.08,
      duration: 0.1,
      ease: "power2.out"
  }, "-=0.3")
  .to("#full i", {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "back.out(2)"
  }, "-=0.4");

  menu.addEventListener("click", function(){
      if(window.innerWidth <= 768) {
          gsap.set("#full", { width: "60vw" });
      } else {
          gsap.set("#full", { width: "30vw" });
      }
      tl.play();
  });

  cross.addEventListener("click", function(){
      tl.reverse();
  });

  window.addEventListener("scroll", () => {
    if (window.innerWidth > 768) {
      if (window.scrollY > 100) {
        triggerContainer.style.display = "block";
      } else {
        triggerContainer.style.display = "none";
        if (tl.progress() > 0 && !tl.reversed()) {
            tl.reverse();
        }
      }
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
      triggerContainer.style.display = "block";
      gsap.set("#full", { width: "60vw" });
    } else {
      triggerContainer.style.display = window.scrollY > 100 ? "block" : "none";
      gsap.set("#full", { width: "30vw" });
    }
  });
});
