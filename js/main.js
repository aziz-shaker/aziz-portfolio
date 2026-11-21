(() => {
  const S = window.SITE, T = window.I18N;
  const $ = (q, el = document) => el.querySelector(q);
  const $$ = (q, el = document) => [...el.querySelectorAll(q)];
  const store = {
    get: k => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch {} },
  };
  const urlLang = new URLSearchParams(location.search).get("lang");
  let lang = urlLang === "ar" || urlLang === "en" ? urlLang : store.get("lang") || "en";
  let filter = "all";
  const ghMeta = {}; // repo -> { pushed_at }
  const L = v => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] ?? v.en : v);
  const t = k => T[lang][k] ?? T.en[k] ?? k;

  /* ---------- icons ---------- */
  const IC = {
    github: '<svg viewBox="0 0 24 24" style="fill:currentColor;stroke:none"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" style="fill:currentColor;stroke:none"><path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12 21.8a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.72.98 1-3.63-.24-.37A9.8 9.8 0 1 1 12 21.8zM12 0a12 12 0 0 0-10.3 18.1L0 24l6.07-1.6A12 12 0 1 0 12 0z"/></svg>',
    mail: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" style="fill:currentColor;stroke:none"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14m-6-6l6 6-6 6"/></svg>',
    ext: '<svg viewBox="0 0 24 24"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
    eye: '<svg viewBox="0 0 24 24"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  };
  const MONO = new Set(["nextdotjs", "github", "vercel", "prisma", "githubactions"]);

  /* ---------- i18n ---------- */
  function applyLang() {
    const html = document.documentElement;
    html.lang = lang; html.dir = lang === "ar" ? "rtl" : "ltr";
    $$("[data-i18n]").forEach(el => (el.textContent = t(el.dataset.i18n)));
    $$("[data-i18n-html]").forEach(el => (el.innerHTML = t(el.dataset.i18nHtml)));
    $("#langLabel").textContent = lang === "ar" ? "EN" : "AR";
    document.title = lang === "ar" ? "عزيز شاكر — مطوّر Full Stack" : "Aziz Shaker — Full Stack Developer";
    renderAll();
    requestAnimationFrame(moveIndicator);
  }

  function renderAll() {
    renderRibbons(); renderTimeline(); renderServices(); renderStack(); renderFilters(); renderWorks(); renderContact(); renderSocial();
    observeReveal();
  }

  /* ---------- theme ---------- */
  const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
  let theme = store.get("theme") || (prefersDark ? "dark" : "light");
  const setTheme = v => { theme = v; document.documentElement.dataset.theme = v; store.set("theme", v); };
  setTheme(theme);
  $("#themeBtn").addEventListener("click", () => {
    const go = () => setTheme(theme === "dark" ? "light" : "dark");
    document.startViewTransition ? document.startViewTransition(go) : go();
  });
  $("#langBtn").addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar"; store.set("lang", lang);
    const go = () => applyLang();
    document.startViewTransition ? document.startViewTransition(go) : go();
  });

  /* ---------- renderers ---------- */
  function renderRibbons() {
    const words = S.ribbon[lang];
    const html = [...words, ...words, ...words, ...words].map(w => `<span>${w}</span>`).join("");
    $$("[data-ribbon]").forEach((el, i) => {
      const list = i % 2 ? [...words].reverse() : words;
      el.innerHTML = [...list, ...list, ...list, ...list].map(w => `<span>${w}</span>`).join("") || html;
    });
  }

  function renderSocial() {
    const l = S.links;
    const items = [
      l.linkedin && ["LinkedIn", l.linkedin, IC.linkedin],
      ["WhatsApp", l.whatsapp, IC.whatsapp],
      ["GitHub", l.github, IC.github],
      ["Email", "mailto:" + l.email, IC.mail],
    ].filter(Boolean);
    $("#socialRail").innerHTML = items.map(([n, h, i]) => `<a href="${h}" target="_blank" rel="noopener" aria-label="${n}" title="${n}">${i}</a>`).join("");
  }

  function renderTimeline() {
    $("#timeline").innerHTML = S.timeline.map((x, i) => `
      <div class="tl-item reveal" style="transition-delay:${i * 90}ms">
        <span class="tl-dot"></span>
        <div class="tl-card">
          <span class="tl-kind">${{ work: lang === "ar" ? "عمل" : "Work", cert: lang === "ar" ? "شهادة" : "Cert", edu: lang === "ar" ? "دراسة" : "Edu" }[x.kind]}</span>
          <div class="tl-year">${L(x.year)}</div>
          <h4>${L(x.title)}</h4>
          <p>${L(x.text)}</p>
        </div>
      </div>`).join("");
  }

  function renderServices() {
    $("#servicesGrid").innerHTML = S.services.map((s, i) => `
      <article class="svc reveal" style="transition-delay:${i * 90}ms">
        <div class="svc-cover" style="background:linear-gradient(150deg,${s.grad[0]},${s.grad[1]})"><span>${s.cover}</span></div>
        <div class="svc-body">
          <h3>${L(s.title)}</h3>
          <ul>${L(s.items).map(x => `<li>${x}</li>`).join("")}</ul>
          <a href="#works" class="svc-foot" data-filter="${s.filter}">${t("services.see")}<span class="round-arrow">${IC.arrow}</span></a>
        </div>
      </article>`).join("");
    $$(".svc-foot").forEach(a => a.addEventListener("click", () => { filter = a.dataset.filter; renderFilters(); applyFilter(); }));
  }

  function renderStack() {
    $("#stackGroups").innerHTML = S.stack.map(g => `
      <div class="stack-group reveal">
        <h3>${L(g.title)}</h3>
        <div class="tiles">${g.items.map(([n, ic]) => `
          <div class="tile"><img class="${MONO.has(ic) ? "mono" : ""}" src="assets/icons/${ic}.svg" alt="" width="38" height="38" /><span>${n}</span></div>`).join("")}
        </div>
      </div>`).join("");
  }

  function renderFilters() {
    $("#filters").innerHTML = S.filters.map(f => {
      const n = f.id === "all" ? S.projects.length : S.projects.filter(p => p.cat === f.id).length;
      return n ? `<button data-f="${f.id}" class="${f.id === filter ? "on" : ""}">${L(f)}<sup>${n}</sup></button>` : "";
    }).join("");
    $$("#filters button").forEach(b => b.addEventListener("click", () => {
      filter = b.dataset.f;
      $$("#filters button").forEach(x => x.classList.toggle("on", x === b));
      applyFilter();
    }));
  }

  function applyFilter() {
    $$(".work").forEach(w => {
      const show = filter === "all" || w.dataset.cat === filter;
      if (show && w.classList.contains("hide")) {
        w.classList.remove("hide");
        w.animate([{ opacity: 0, transform: "scale(.92) translateY(20px)" }, { opacity: 1, transform: "none" }], { duration: 500, easing: "cubic-bezier(.2,.8,.2,1)" });
      } else if (!show) w.classList.add("hide");
    });
  }

  const repoUrl = p => p.github || `https://github.com/${S.github}/${p.repo}`;

  function renderWorks() {
    $("#worksGrid").innerHTML = S.projects.map((p, i) => {
      const cover = L(p.cover);
      const isAr = /[؀-ۿ]/.test(cover);
      return `
      <article class="work reveal ${filter !== "all" && p.cat !== filter ? "hide" : ""}" data-cat="${p.cat}" data-id="${p.id}" tabindex="0"
        style="--g1:${p.grad[0]};--g2:${p.grad[1]};transition-delay:${(i % 3) * 80}ms" aria-label="${p.name}">
        <div class="work-bg"></div>
        ${p.shot ? `<div class="work-shot" style="background-image:url('${p.shot}')"></div>` : ""}
        <span class="work-live"><i></i>Live</span>
        <span class="work-idx">${String(i + 1).padStart(2, "0")}</span>
        <div class="work-title ${isAr ? "ar" : ""}">${cover}</div>
        <div class="work-meta">
          <div class="work-meta-top"><span>${L(p.type)}</span><span class="st">${p.stack.slice(0, 3).join(" · ")}</span></div>
          <h3>${p.name}</h3>
          <div class="work-actions">
            <a class="wa-btn" href="${p.live}" target="_blank" rel="noopener">${IC.ext}${t("works.live")}</a>
            <a class="wa-btn dark" href="${repoUrl(p)}" target="_blank" rel="noopener">${IC.github}${t("works.code")}</a>
          </div>
        </div>
      </article>`;
    }).join("");

    $$(".work").forEach(card => {
      card.addEventListener("click", e => { if (!e.target.closest("a")) openModal(card.dataset.id); });
      card.addEventListener("keydown", e => { if (e.key === "Enter") openModal(card.dataset.id); });
      if (matchMedia("(hover:hover)").matches) {
        card.addEventListener("mousemove", e => {
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
          card.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
        });
        card.addEventListener("mouseleave", () => (card.style.transform = ""));
      }
    });
  }

  /* ---------- modal ---------- */
  const modal = $("#modal");
  let lastFocus = null;
  function openModal(id) {
    const p = S.projects.find(x => x.id === id); if (!p) return;
    lastFocus = document.activeElement;
    const meta = ghMeta[p.repo];
    const date = meta ? new Date(meta.pushed_at).toLocaleDateString(lang === "ar" ? "ar-EG" : "en-GB", { day: "numeric", month: "short", year: "numeric" }) : "";
    $("#modalBody").innerHTML = `
      <div class="m-hero" style="--g1:${p.grad[0]};--g2:${p.grad[1]}">
        <div class="m-browser">
          <div class="m-bar"><i></i><i></i><i></i><span class="m-url">${p.live.replace("https://", "")}</span></div>
          ${p.shot ? `<img src="${p.shot}" alt="${p.name} screenshot" />` : ""}
        </div>
      </div>
      <div class="m-body">
        <div>
          <span class="m-type">${L(p.type)}</span>
          <h3>${p.name}</h3>
          <p>${L(p.desc)}</p>
          <div class="m-tags">${p.stack.map(s => `<span>${s}</span>`).join("")}</div>
        </div>
        <div class="m-side">
          <h4>${t("works.highlights")}</h4>
          <ul>${(L(p.points) || []).map(x => `<li>${x}</li>`).join("")}</ul>
          <div class="m-links">
            <a class="btn" href="${p.live}" target="_blank" rel="noopener">${t("works.live")} ${IC.ext}</a>
            <a class="btn ghost" href="${repoUrl(p)}" target="_blank" rel="noopener">${IC.github} ${t("works.code")}</a>
          </div>
          ${date ? `<div class="m-updated">${t("works.updated")}: ${date}</div>` : ""}
        </div>
      </div>`;
    modal.classList.add("open"); modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $(".modal-close").focus();
  }
  function closeModal() {
    modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    lastFocus && lastFocus.focus();
  }
  modal.addEventListener("click", e => { if (e.target.closest("[data-close]")) closeModal(); });
  addEventListener("keydown", e => { if (e.key === "Escape" && modal.classList.contains("open")) closeModal(); });

  /* ---------- contact ---------- */
  function renderContact() {
    const l = S.links;
    const cards = [
      { ic: IC.whatsapp, title: t("contact.wa"), sub: l.phoneLabel, href: l.whatsapp },
      { ic: IC.mail, title: t("contact.mail"), sub: l.email, href: "mailto:" + l.email, copy: l.email },
      { ic: IC.phone, title: t("contact.call"), sub: l.phoneLabel, href: "tel:" + l.phone },
      { ic: IC.github, title: t("contact.gh"), sub: "@" + S.github, href: l.github },
    ];
    $("#contactCards").innerHTML = cards.map(c => `
      <a class="c-card" href="${c.href}" ${c.href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""} ${c.copy ? `data-copy="${c.copy}"` : ""}>
        <span class="c-ic">${c.ic}</span><b>${c.title}</b><small>${c.sub}</small>
      </a>`).join("");
    $$("[data-copy]").forEach(a => a.addEventListener("click", () => {
      navigator.clipboard?.writeText(a.dataset.copy).then(() => toast(t("contact.copied")), () => {});
    }));
  }
  function toast(msg) {
    const el = document.createElement("div"); el.className = "toast"; el.textContent = msg;
    document.body.appendChild(el); setTimeout(() => el.remove(), 2100);
  }

  /* ---------- GitHub sync: last-updated dates + auto-add new live repos ---------- */
  async function syncGitHub() {
    try {
      const res = await fetch(`https://api.github.com/users/${S.github}/repos?per_page=100&sort=pushed`);
      if (!res.ok) return;
      const repos = await res.json();
      const known = new Set(S.projects.map(p => p.repo.toLowerCase()));
      const knownLive = new Set(S.projects.map(p => p.live.replace(/\/$/, "")));
      const palette = [["#c4262e", "#3a0a0e"], ["#5b4bd1", "#160f3d"], ["#d9822b", "#3d1c05"], ["#1e9e78", "#062a24"]];
      repos.forEach(r => {
        ghMeta[r.name] = r;
        const home = (r.homepage || "").replace(/\/$/, "");
        if (r.fork || !home || known.has(r.name.toLowerCase()) || knownLive.has(home)) return;
        if (!/^https?:\/\//.test(home) || /backend|api/i.test(home)) return;
        const nice = r.name.replace(/[-_]/g, " ").replace(/\b\w/g, c => c.toUpperCase());
        S.projects.push({
          id: r.name, repo: r.name, cat: "web", cover: { en: nice, ar: nice }, name: nice,
          grad: palette[S.projects.length % palette.length], shot: "", live: home,
          github: r.html_url, stack: [r.language].filter(Boolean),
          type: { en: "New", ar: "جديد" },
          desc: { en: r.description || "Freshly deployed project.", ar: r.description || "مشروع جديد منشور." },
          points: { en: [], ar: [] },
        });
      });
      renderFilters(); renderWorks(); observeReveal();
      const n = S.projects.length;
      const statEl = $('[data-count="8"]'); if (statEl) statEl.dataset.count = n;
      $(".hp-b1 b").textContent = n;
    } catch { /* offline: curated data still renders */ }
  }

  /* ---------- reveal & counters ---------- */
  let io;
  function observeReveal() {
    io ||= new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: .12, rootMargin: "0px 0px -40px 0px" });
    $$(".reveal:not(.in)").forEach(el => io.observe(el));
  }
  const counterIO = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    $$("[data-count]", e.target).forEach(el => {
      const end = +el.dataset.count, suf = el.dataset.suffix || "", t0 = performance.now();
      const step = now => {
        const k = Math.min((now - t0) / 1400, 1), v = Math.round(end * (1 - Math.pow(1 - k, 3)));
        el.textContent = v + suf; if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    counterIO.unobserve(e.target);
  }), { threshold: .5 });
  counterIO.observe($("#stats"));

  /* ---------- nav: scroll spy + sliding indicator ---------- */
  const links = $$("#navPill a"), ind = $("#navIndicator");
  function moveIndicator() {
    const a = $("#navPill a.active") || links[0];
    ind.style.left = a.offsetLeft + "px"; ind.style.width = a.offsetWidth + "px";
  }
  const sections = links.map(a => $(a.getAttribute("href")));
  function onScroll() {
    const y = scrollY + innerHeight * .35;
    let cur = sections[0];
    sections.forEach(s => { if (s && s.offsetTop <= y) cur = s; });
    links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + cur.id));
    moveIndicator();
    const h = document.documentElement.scrollHeight - innerHeight;
    $("#progress").style.width = (h > 0 ? (scrollY / h) * 100 : 0) + "%";
    const img = $("#heroPhoto img");
    if (img && scrollY < innerHeight) img.style.translate = `0 ${scrollY * .12}px`;
    $$(".hn-word").forEach((w, i) => { if (scrollY < innerHeight) w.style.translate = `${(i ? 1 : -1) * scrollY * .25}px 0`; });
  }
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", moveIndicator);

  /* ---------- mobile menu ---------- */
  const mm = $("#mobileMenu");
  $("#burger").addEventListener("click", () => mm.classList.toggle("open"));
  $$("#mobileMenu a").forEach(a => a.addEventListener("click", () => mm.classList.remove("open")));

  /* ---------- hero mouse parallax ---------- */
  if (matchMedia("(hover:hover)").matches) {
    const hero = $(".hero");
    hero.addEventListener("mousemove", e => {
      const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
      $(".hero-glow").style.transform = `translate(${x * 60}px, ${y * 40}px)`;
      $$(".hp-badge").forEach((b, i) => (b.style.translate = `${x * (i ? -24 : 24)}px ${y * 18}px`));
    });
  }

  /* ---------- boot ---------- */
  $("#year").textContent = new Date().getFullYear();
  applyLang();
  onScroll();
  syncGitHub();
  const hideLoader = () => setTimeout(() => $("#loader").classList.add("done"), 350);
  document.readyState === "complete" ? hideLoader() : addEventListener("load", hideLoader);
  setTimeout(() => $("#loader").classList.add("done"), 2500);
})();
