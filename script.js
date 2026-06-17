gsap.registerPlugin(ScrollTrigger);

const cursor = document.querySelector(".cursor");
if (cursor) {
  window.addEventListener("mousemove", e => {
    gsap.to(cursor, {x:e.clientX, y:e.clientY, duration:.18, ease:"power2.out"});
  });
}

const indexBtn = document.querySelector(".index-btn");
const indexPanel = document.querySelector(".index-panel");
const closeIndex = document.querySelector(".close-index");
if (indexBtn && indexPanel && closeIndex) {
  const toggleIndex = (open) => {
    indexPanel.classList.toggle("open", open);
    document.body.classList.toggle("menu-open", open);
    indexPanel.setAttribute("aria-hidden", String(!open));
    indexBtn.setAttribute("aria-expanded", String(open));
  };
  indexBtn.addEventListener("click", () => toggleIndex(true));
  closeIndex.addEventListener("click", () => toggleIndex(false));
  indexPanel.querySelectorAll("a").forEach(a => a.addEventListener("click", () => toggleIndex(false)));
  window.addEventListener("keydown", e => { if(e.key === "Escape") toggleIndex(false); });
}

window.addEventListener("load", () => {
  gsap.to(".loader", {autoAlpha:0, duration:.85, delay:.25, ease:"power2.out"});
  gsap.from(".hero-mark h1", {y:60, opacity:0, duration:1.1, delay:.35, ease:"power3.out"});
  gsap.from(".hero-mark p, .hero-note", {y:30, opacity:0, duration:1.05, delay:.55, ease:"power3.out"});
});

gsap.to(".hero-media", {
  width:"86vw",
  height:"78vh",
  borderRadius:"36px",
  ease:"none",
  scrollTrigger:{trigger:".hero",start:"top top",end:"bottom bottom",scrub:0.3}
});
gsap.to([".hero-mark",".hero-note"], {
  y:-70,
  opacity:0,
  ease:"none",
  scrollTrigger:{trigger:".hero",start:"top top",end:"62% top",scrub:0.3}
});

document.querySelectorAll(".project").forEach((project) => {
  const media = project.querySelector(".project-media");
  const img = project.querySelector("img");
  const caption = project.querySelector(".project-caption");

  gsap.fromTo(media,
    {clipPath:"inset(7% 5% 7% 5% round 26px)"},
    {clipPath:"inset(0% 0% 0% 0% round 0px)", ease:"power2.out",
     scrollTrigger:{trigger:project,start:"top 82%",end:"top 18%",scrub:0.5}}
  );

  gsap.fromTo(img,
    {scale:1.11, yPercent:-4},
    {scale:1.02, yPercent:5, ease:"none",
     scrollTrigger:{trigger:project,start:"top bottom",end:"bottom top",scrub:0.5}}
  );

  gsap.from(caption, {
    y:22, opacity:0, duration:.8, ease:"power3.out",
    scrollTrigger:{trigger:caption,start:"top 88%"}
  });
});

document.querySelectorAll(".magnetic").forEach(el => {
  el.addEventListener("mousemove", (e) => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    gsap.to(el, {x:x*5, y:y*4, duration:.45, ease:"power2.out"});
    const img = el.querySelector("img");
    if(img) gsap.to(img, {x:x*-10, y:y*-8, duration:.55, ease:"power2.out"});
  });
  el.addEventListener("mouseleave", () => {
    gsap.to(el, {x:0, y:0, duration:.55, ease:"power2.out"});
    const img = el.querySelector("img");
    if(img) gsap.to(img, {x:0, y:0, duration:.55, ease:"power2.out"});
  });
});
