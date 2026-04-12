document.addEventListener("DOMContentLoaded", () => {
  var menu = document.querySelector("#side-nav-trigger i");
  var cross = document.querySelector("#full i");
  var triggerContainer = document.querySelector("#side-nav-trigger");
  
  var tl = gsap.timeline();

  // Determine width based on mobile vs desktop to properly slide in
  const getDrawerWidth = () => window.innerWidth <= 768 ? "60vw" : "40vw";

  tl.to("#full", {
      right: 0,
      duration: 0.5,
      ease: "power2.out"
  });

  tl.from("#full h4", {
      x: 100,
      stagger: 0.1,
      opacity: 0,
      duration: 0.4,
  });

  tl.from("#full i", {
      opacity: 0,
  }, "-=0.2");

  tl.pause();

  menu.addEventListener("click", function(){
      tl.play();
  });

  cross.addEventListener("click", function(){
      tl.reverse();
  });

  // Handle scroll to show/hide the hamburger menu ONLY on Desktop
  window.addEventListener("scroll", () => {
    if (window.innerWidth > 768) {
      if (window.scrollY > 100) {
        // Show hamburger
        triggerContainer.style.display = "block";
      } else {
        // Hide hamburger when at top (original nav is visible)
        triggerContainer.style.display = "none";
        
        // Also auto-close the drawer if user scrolls back to the top
        if (tl.progress() > 0 && !tl.reversed()) {
            tl.reverse();
        }
      }
    }
  });

  // On Resize window listener to securely wipe wrong display properties if transitioning
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
      triggerContainer.style.display = "block"; // lock block for mobile
    } else {
      triggerContainer.style.display = window.scrollY > 100 ? "block" : "none";
    }
  });
});
