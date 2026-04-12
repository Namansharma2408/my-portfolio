const width = window.innerWidth;
const height = window.innerHeight;

// console.log(width, height);
const svg = document.getElementById("canvas");

function buildPath(startX, startY, segments) {
  let d = `M${startX} ${startY}`;
  segments.forEach((seg) => {
    d += ` Q${seg.cx} ${seg.cy} ${seg.ex} ${seg.ey}`;
  });
  return d;
}

function createCurve(id, startX, startY, segments) {
  if (!svg) return;
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("id", id);
  path.setAttribute("stroke", "white");
  path.setAttribute("stroke-width", "0.5");
  path.setAttribute("fill", "none");
  path.setAttribute("d", buildPath(startX, startY, segments));

  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle",
  );
  circle.setAttribute("r", "10");
  circle.setAttribute("fill", "white");
  circle.setAttribute("filter", "blur(30px)");

  const animate = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "animateMotion",
  );
  let time = Math.random();
  if( time < 0.5 ) time = 1 - time;
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

if (svg) {
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
}
