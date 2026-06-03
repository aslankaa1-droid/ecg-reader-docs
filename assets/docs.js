/* KARDIOSPEC DOCS HUB · doc-page enhancements
   TOC scroll-spy · active sidebar link · mobile sidebar toggle.
   Loads after app.js. */

(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  function markSidebar() {
    const here = location.pathname.split("/").pop() || "index.html";
    $$(".doc-sidebar a").forEach((a) => {
      const href = (a.getAttribute("href") || "").split("/").pop();
      if (href === here) a.classList.add("active");
    });
  }

  function buildToc() {
    const toc = $(".doc-toc ul");
    const main = $(".doc-main .prose");
    if (!toc || !main) return;
    const heads = $$("h2[id]", main);
    if (!heads.length) {
      const wrap = $(".doc-toc");
      if (wrap) wrap.style.display = "none";
      return;
    }
    toc.innerHTML = heads
      .map((h) => `<li><a href="#${h.id}" data-toc="${h.id}">${h.textContent}</a></li>`)
      .join("");

    toc.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (!a) return;
      e.preventDefault();
      const t = $("#" + a.dataset.toc);
      if (!t) return;
      const y = t.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top: y, behavior: "smooth" });
    });

    /* keep TOC labels translated when language changes */
    document.addEventListener("kardiospec:lang", () => {
      $$("a[data-toc]", toc).forEach((a) => {
        const h = $("#" + a.dataset.toc);
        if (h) a.textContent = h.textContent;
      });
    });

    const links = $$("a[data-toc]", toc);
    const byId = {};
    links.forEach((a) => (byId[a.dataset.toc] = a));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((l) => l.classList.remove("active"));
            const a = byId[entry.target.id];
            if (a) a.classList.add("active");
          }
        });
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );
    heads.forEach((h) => io.observe(h));
  }

  function mobileToggle() {
    const side = $(".doc-sidebar");
    const btn = $(".doc-side-toggle");
    if (!side || !btn) return;
    btn.addEventListener("click", () => side.classList.toggle("collapsed"));
    if (window.matchMedia("(max-width: 760px)").matches) side.classList.add("collapsed");
  }

  document.addEventListener("DOMContentLoaded", () => {
    markSidebar();
    buildToc();
    mobileToggle();
  });
})();
