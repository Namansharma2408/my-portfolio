const video = document.getElementById("cloud-background");
if (video) video.playbackRate = 0.6;

window.addEventListener("load", () => {
  const aboutSection = document.getElementById("about-us");
  
  if (!aboutSection) return;

  const elementsToAnimate = [
    document.querySelector(".about-header"),
    document.querySelector(".about-expertise"),
    document.querySelector(".grid-left"),
    document.querySelector(".grid-top"),
    document.querySelector(".grid-bottom")
  ];

  elementsToAnimate.forEach((el, index) => {
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = `all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 0.15}s`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        elementsToAnimate.forEach((el) => {
          if (!el) return;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          
          if (el.classList.contains("stats-box")) {
            const counters = el.querySelectorAll(".counter");
            counters.forEach((counter) => {
              const target = +counter.getAttribute("data-target");
              const duration = 2000; // Total duration in ms
              const stepTime = 20;   // Update every 20 ms
              const increment = target / (duration / stepTime);
              let current = 0;

              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                counter.innerText = Math.floor(current);
              }, stepTime);
            });
          }
        });

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  observer.observe(aboutSection);
});
