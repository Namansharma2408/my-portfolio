const width = window.innerWidth;
const height = window.innerHeight;

console.log(width, height);
const svg = document.getElementById("canvas");

function buildPath(startX, startY, segments) {
  let d = `M${startX} ${startY}`;

  segments.forEach((seg) => {
    d += ` Q${seg.cx} ${seg.cy} ${seg.ex} ${seg.ey}`;
  });

  return d;
}

function createCurve(id, startX, startY, segments) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("id", id);
  path.setAttribute("stroke", "white");
  path.setAttribute("stroke-width", "2");
  path.setAttribute("fill", "none");
  path.setAttribute("d", buildPath(startX, startY, segments));

  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle",
  );
  circle.setAttribute("r", "8");
  circle.setAttribute("fill", "white");
  circle.setAttribute("filter", "blur(5px)");

  const animate = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "animateMotion",
  );
  let time = Math.random();
  if( time < 0.5 ) time *= 2;
  animate.setAttribute("dur", time*5);
  animate.setAttribute("repeatCount", "indefinite");
  animate.setAttribute("begin", `${Math.random() * 5}s`);

  const mpath = document.createElementNS("http://www.w3.org/2000/svg", "mpath");
  mpath.setAttribute("href", `#${id}`);

  animate.appendChild(mpath);
  circle.appendChild(animate);

  svg.appendChild(path);
  svg.appendChild(circle);
}
createCurve("curve1", 0, 0, [
  { cx: height / 8, cy: height / 2, ex: height, ey: height / 2 },
  { cx: width, cy: height / 2, ex: width, ey: height / 2 },
]);

createCurve("curve2", 0, height / 8, [
  { cx: height / 8, cy: height / 2, ex: (height * 3) / 4, ey: height / 2 },
  { cx: width, cy: height / 2, ex: width, ey: height / 2 },
]);

createCurve("curve3", 0, height / 4, [
  { cx: height / 8, cy: height / 2, ex: height / 2, ey: height / 2 },
  { cx: width, cy: height / 2, ex: width, ey: height / 2 },
]);
createCurve("curve4", 0, (height * 3) / 8, [
  { cx: height / 8, cy: height / 2, ex: height / 4, ey: height / 2 },
  { cx: width, cy: height / 2, ex: width, ey: height / 2 },
]);

createCurve("curve5", 0, height / 2, [
  { cx: height / 8, cy: height / 2, ex: height, ey: height / 2 },
  { cx: width, cy: height / 2, ex: width, ey: height / 2 },
]);

createCurve("curve6", 0, (height * 5) / 8, [
  { cx: height / 8, cy: height / 2, ex: height / 4, ey: height / 2 },
  { cx: width, cy: height / 2, ex: width, ey: height / 2 },
]);
createCurve("curve7", 0, (height * 3) / 4, [
  { cx: height / 8, cy: height / 2, ex: height / 2, ey: height / 2 },
  { cx: width, cy: height / 2, ex: width, ey: height / 2 },
]);

createCurve("curve8", 0, (height * 7) / 8, [
  { cx: height / 8, cy: height / 2, ex: (height * 3) / 4, ey: height / 2 },
  { cx: width, cy: height / 2, ex: width, ey: height / 2 },
]);

createCurve("curve9", 0, height, [
  { cx: height / 8, cy: height / 2, ex: height, ey: height / 2 },
  { cx: width, cy: height / 2, ex: width, ey: height / 2 },
]);

const video = document.getElementById("cloud-background");
video.playbackRate = 0.6;

let root;
const text =
  "I am Naman Sharma friend of ahutosh kumar jha a full stack developer";
const delayMs = 60; // Time between each word (ms)


function startBlurAnimation() {
  if (!root) return;

  root.innerHTML = "";
  const words = text.split(" ");
  const spans = words.map((word, index) => {
    const span = document.createElement("span");
    span.textContent = word + "\u00A0";
    span.style.display = "inline-block";
    span.style.filter = "blur(12px)";
    span.style.opacity = "0";
    span.style.transform = "translateY(10px)";
    span.style.transition = `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)`;
    span.style.transitionDelay = `${index * delayMs}ms`;

    return span;
  });
  spans.forEach((span) => root.appendChild(span));
  requestAnimationFrame(() => {
    spans.forEach((span) => {
      span.style.filter = "blur(0px)";
      span.style.opacity = "1";
      span.style.transform = "translateY(0px)";
    });
  });
}

window.addEventListener("load", () => {
  root = document.getElementById("about-content");

  if (!root) {
    console.error("Error: Could not find element with ID 'about-content'");
    return;
  }
  const observerOptions = {
    threshold: 0.2, // Starts when 20% of the container is visible
    rootMargin: "0px 0px -50px 0px", // Slight offset so it doesn't trigger too early
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startBlurAnimation();
        const about_image = document.getElementById("about-img.png");
        const about_head = document.getElementById("about-us-text");
        aboutrevealfromleft(about_head);
        revealFromLeft(about_image);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  observer.observe(root);
});

function revealFromLeft(element) {
  element.style.zIndex = "0";
  element.style.height = "100vh";
  element.style.width = "50vw";
  element.style.position = "absolute";
  element.style.top = "0";
  element.style.left = "0";
  element.style.opacity = "0";
  element.style.transform = "translateX(-50vw) scale(0)";
  element.style.transition = "all 1s ease";
}
function aboutrevealfromleft(element) {
  element.style.opacity = "0";
  element.style.transform = "translateX(-1000px) scale(0)";

  requestAnimationFrame(() => {
    element.style.transition = "transform 2s ease, opacity 2s ease";
    element.style.opacity = "1";
    element.style.transform = "translateX(25vw) scale(1)";
  });
}

