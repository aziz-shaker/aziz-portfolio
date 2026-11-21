/* =========================================================
   All site content lives here. Edit this file to update it.
   كل محتوى الموقع هنا — عدّل الملف ده بس.
   ========================================================= */
window.SITE = {
  github: "aziz-shaker",
  links: {
    github: "https://github.com/aziz-shaker",
    whatsapp: "https://wa.me/201001854373",
    phone: "+201001854373",
    phoneLabel: "01001854373",
    email: "azizshaker89@gmail.com",
    linkedin: "", // ← add your LinkedIn URL and the icon appears automatically
  },

  ribbon: {
    en: ["Laravel", "Next.js", "ERP Systems", "React", "AI Apps", "PostgreSQL", "Arabic RTL", "POS Systems", "REST APIs"],
    ar: ["لارافيل", "Next.js", "أنظمة ERP", "React", "تطبيقات ذكاء اصطناعي", "PostgreSQL", "واجهات عربية", "أنظمة كاشير", "REST APIs"],
  },

  /* ---------- Projects (order = display order) ---------- */
  projects: [
    {
      id: "thyrotrack", repo: "thyrotrack-ai", cat: "ai",
      cover: { en: "ThyroTrack", ar: "ثايرو تراك" },
      name: "ThyroTrack AI",
      grad: ["#1f7a8c", "#0d2b36"],
      shot: "assets/shots/thyrotrack.webp",
      live: "https://thyrotrack-ai.vercel.app",
      stack: ["Next.js", "TypeScript", "FastAPI", "Python", "PostgreSQL", "Tailwind"],
      type: { en: "AI / Medical", ar: "ذكاء اصطناعي / طبي" },
      desc: {
        en: "AI decision-support for thyroid nodules: ultrasound image analysis, automatic ACR TI-RADS classification, doctor review with e-signature, Arabic PDF reports and a patient portal with a 3D thyroid model.",
        ar: "نظام ذكاء اصطناعي لدعم قرار الطبيب في عُقد الغدة الدرقية: تحليل صور الموجات فوق الصوتية، تصنيف ACR TI-RADS تلقائي، مراجعة الطبيب وتوقيع إلكتروني، تقارير PDF عربية وبوابة مريض بنموذج ثلاثي الأبعاد.",
      },
      points: {
        en: ["Nodule detection + TI-RADS scoring", "Doctor sign-off workflow", "Arabic PDF reports", "3D thyroid model for patients"],
        ar: ["اكتشاف العُقد وحساب TI-RADS", "مراجعة واعتماد الطبيب", "تقارير PDF بالعربي", "نموذج 3D للغدة للمريض"],
      },
    },
    {
      id: "bizmind", repo: "bizmind", cat: "ai",
      cover: { en: "BizMind", ar: "بيز مايند" },
      name: "BizMind AI",
      grad: ["#6a3fd1", "#1e0f3d"],
      shot: "assets/shots/bizmind.webp",
      live: "https://bizmind-peach.vercel.app",
      stack: ["Next.js", "FastAPI", "Python", "pgvector", "LLM / RAG", "Docker"],
      type: { en: "AI / RAG", ar: "ذكاء اصطناعي / RAG" },
      desc: {
        en: "A business assistant: upload PDFs and Excel sheets, ask in Arabic or English, and get answers grounded only in your files — with the exact page number or sheet and cell range cited.",
        ar: "مساعد أعمال للشركات: ارفع ملفات PDF وExcel، واسأل بالعربي أو الإنجليزي، وخد إجابة مبنية على ملفاتك بس — مع رقم الصفحة أو اسم الشيت ونطاق الخلايا.",
      },
      points: {
        en: ["Retrieval-augmented generation", "Citations to page / cell range", "Gemini or Claude provider", "Dockerised full stack"],
        ar: ["RAG على ملفات الشركة", "استشهاد برقم الصفحة والخلايا", "يدعم Gemini وClaude", "تشغيل كامل بـ Docker"],
      },
    },
    {
      id: "serviceflow", repo: "serviceflow", cat: "erp",
      cover: { en: "ServiceFlow", ar: "سيرفس فلو" },
      name: "ServiceFlow",
      grad: ["#d9822b", "#4a2208"],
      shot: "assets/shots/serviceflow.webp",
      live: "https://serviceflow-phi-five.vercel.app",
      stack: ["Laravel", "PHP 8.3", "Vue 3", "Pinia", "MySQL", "Sanctum"],
      type: { en: "ERP / Management", ar: "نظام إدارة" },
      desc: {
        en: "Maintenance-service management for a home-repair company: customers request a technician, reception dispatches, technicians log hours & parts, accountants invoice and collect.",
        ar: "نظام إدارة خدمات صيانة لشركة إصلاحات منزلية: العميل يطلب فني، الاستقبال يوزّع الشغل، الفني يسجّل الساعات وقطع الغيار، والمحاسب يصدر الفواتير ويحصّل.",
      },
      points: {
        en: ["Strict request state machine", "Row-locked inventory", "Money never touches a float", "API-enforced permissions"],
        ar: ["State machine صارمة للطلبات", "مخزون بقفل على مستوى الصف", "حسابات مالية بدون float", "صلاحيات مفروضة من الـ API"],
      },
    },
    {
      id: "vantor", repo: "vantor", cat: "ecom",
      cover: { en: "VANTOR", ar: "VANTOR" },
      name: "VANTOR",
      grad: ["#2b2b2b", "#0a0a0a"],
      shot: "assets/shots/vantor.webp",
      live: "https://vantor-ten.vercel.app",
      stack: ["Next.js 15", "React 19", "TypeScript", "Prisma", "Playwright"],
      type: { en: "E-commerce", ar: "متجر إلكتروني" },
      desc: {
        en: "Bilingual (Arabic RTL / English) store for men's accessories with a full admin panel — built around selling in Egypt: cash on delivery, governorate shipping and Arabic-first UX.",
        ar: "متجر ثنائي اللغة لإكسسوارات الرجال بلوحة تحكم كاملة — مبني على واقع البيع في مصر: الدفع عند الاستلام، شحن حسب المحافظة وتجربة عربية أولاً.",
      },
      points: {
        en: ["URL-driven catalog filters", "Live search with Arabic mapping", "Coupons & COD checkout", "E2E tests with Playwright"],
        ar: ["فلاتر محفوظة في الرابط", "بحث فوري يفهم العربي", "كوبونات ودفع عند الاستلام", "اختبارات E2E بـ Playwright"],
      },
    },
    {
      id: "bisht", repo: "bisht-store", cat: "ecom",
      cover: { en: "Bisht Al-Raqi", ar: "بشت الراقي" },
      name: "Bisht Al-Raqi",
      grad: ["#b8862f", "#3a2306"],
      shot: "assets/shots/bisht.webp",
      live: "https://bisht-store.vercel.app",
      stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL RLS", "Tailwind"],
      type: { en: "E-commerce", ar: "متجر إلكتروني" },
      desc: {
        en: "Full-stack Arabic (RTL) e-commerce platform with a full admin panel, Row-Level-Security database design, order workflow with PDF invoices and payment-receipt review, coupons, reviews and sales reports.",
        ar: "منصة تجارة إلكترونية عربية كاملة بلوحة تحكم، قاعدة بيانات بـ Row-Level Security، دورة طلبات بفواتير PDF ومراجعة إيصالات الدفع، كوبونات وتقييمات وتقارير مبيعات.",
      },
      points: {
        en: ["Postgres Row-Level Security", "PDF invoices", "Payment-receipt review", "Sales reports"],
        ar: ["Row-Level Security", "فواتير PDF", "مراجعة إيصالات الدفع", "تقارير مبيعات"],
      },
    },
    {
      id: "korsaty", repo: "Korsaty", cat: "web",
      cover: { en: "Korsaty", ar: "كورساتي" },
      name: "Korsaty",
      grad: ["#1e9e78", "#06302a"],
      shot: "assets/shots/korsaty.webp",
      live: "https://korsaty.vercel.app",
      stack: ["React 19", "TypeScript", "Supabase", "Postgres Triggers", "Zod"],
      type: { en: "Platform", ar: "منصة تعليمية" },
      desc: {
        en: "Arabic course-selling platform: students pay via Vodafone Cash or InstaPay and upload the receipt, admins approve, and the course unlocks automatically — rules enforced in the database.",
        ar: "منصة عربية لبيع الكورسات: الطالب يدفع بفودافون كاش أو إنستاباي ويرفع الإيصال، الأدمن يوافق، والكورس يتفعّل تلقائيًا — والقواعد مفروضة من قاعدة البيانات.",
      },
      points: {
        en: ["Postgres triggers unlock courses", "Signed URLs for private receipts", "Lesson progress tracking", "Admin approvals dashboard"],
        ar: ["Triggers تفعّل الكورس تلقائيًا", "روابط موقّعة للإيصالات", "حفظ تقدّم الدروس", "لوحة موافقات للأدمن"],
      },
    },
    {
      id: "shifa", repo: "hifa-hospital", cat: "web",
      cover: { en: "Al Shifa", ar: "الشفاء" },
      name: "Al Shifa Hospital",
      grad: ["#2f74c0", "#0b2448"],
      shot: "assets/shots/shifa.webp",
      live: "https://shifa-hospital-xi.vercel.app",
      stack: ["HTML", "CSS", "JavaScript"],
      type: { en: "Website", ar: "موقع" },
      desc: {
        en: "Hospital appointment-booking website — Arabic/English, light/dark mode and per-country pricing, with doctor search, filtering and a validated booking flow.",
        ar: "موقع حجز مواعيد لمستشفى — عربي/إنجليزي، وضع فاتح/داكن وأسعار حسب الدولة، مع بحث وفلترة للأطباء ونموذج حجز متكامل.",
      },
      points: {
        en: ["Bilingual + dark mode", "Doctor search & sort", "Promo codes", "Per-country pricing"],
        ar: ["لغتين + وضع داكن", "بحث وترتيب الأطباء", "أكواد خصم", "أسعار حسب الدولة"],
      },
    },
    {
      id: "maalam", repo: "maalam-real-estate", cat: "web",
      cover: { en: "Maalam", ar: "مَعلَم" },
      name: "Maalam Real Estate",
      grad: ["#8c5a3c", "#26150b"],
      shot: "assets/shots/maalam.webp",
      live: "https://maalam-real-estate.vercel.app",
      stack: ["HTML", "CSS", "JavaScript"],
      type: { en: "Company Profile", ar: "موقع شركة" },
      desc: {
        en: "Arabic company-profile website for a real-estate developer: searchable projects, stats, testimonials and a contact form that sends the lead straight to WhatsApp.",
        ar: "موقع تعريفي عربي لشركة تطوير عقاري: مشاريع قابلة للبحث، إحصائيات، آراء العملاء ونموذج تواصل يبعت الطلب على واتساب مباشرة.",
      },
      points: {
        en: ["Searchable projects", "WhatsApp lead form", "Animated stats", "Fully responsive"],
        ar: ["بحث في المشاريع", "نموذج يبعت على واتساب", "إحصائيات متحركة", "متجاوب بالكامل"],
      },
    },
  ],

  filters: [
    { id: "all", en: "All", ar: "الكل" },
    { id: "ai", en: "AI", ar: "ذكاء اصطناعي" },
    { id: "erp", en: "Systems", ar: "أنظمة" },
    { id: "ecom", en: "E-commerce", ar: "متاجر" },
    { id: "web", en: "Web", ar: "مواقع ومنصات" },
  ],

  services: [
    {
      cover: "ERP", grad: ["#c4262e", "#7d1016"],
      title: { en: "ERP & Business Systems", ar: "أنظمة ERP وإدارة" },
      items: {
        en: ["Inventory, sales & accounting modules", "Factory & maintenance management", "Roles, permissions & audit logs"],
        ar: ["مخازن ومبيعات وحسابات", "إدارة مصانع وصيانة", "صلاحيات وسجل عمليات"],
      },
      filter: "erp",
    },
    {
      cover: "WEB", grad: ["#d9787d", "#a8343b"],
      title: { en: "Web & E-commerce", ar: "مواقع ومتاجر" },
      items: {
        en: ["Arabic RTL stores & platforms", "Admin dashboards & reports", "Payments, coupons & invoices"],
        ar: ["متاجر ومنصات عربية RTL", "لوحات تحكم وتقارير", "دفع وكوبونات وفواتير"],
      },
      filter: "ecom",
    },
    {
      cover: "AI", grad: ["#3a1216", "#140507"],
      title: { en: "AI-Powered Apps", ar: "تطبيقات ذكاء اصطناعي" },
      items: {
        en: ["LLM & RAG integrations", "Medical image analysis", "Chat with your documents"],
        ar: ["دمج LLM وRAG", "تحليل الصور الطبية", "اسأل ملفاتك"],
      },
      filter: "ai",
    },
    {
      cover: "POS", grad: ["#e5533c", "#b3202a"],
      title: { en: "Desktop & POS", ar: "برامج كاشير وديسكتوب" },
      items: {
        en: ["Cashier / POS systems", "Offline-first desktop apps", "Receipts & daily reports"],
        ar: ["أنظمة كاشير POS", "برامج تعمل بدون إنترنت", "فواتير وتقارير يومية"],
      },
      filter: "all",
    },
  ],

  stack: [
    { title: { en: "Frontend", ar: "الواجهات" }, items: [
      ["React", "react"], ["Next.js", "nextdotjs"], ["TypeScript", "typescript"], ["JavaScript", "javascript"],
      ["Vue 3", "vuedotjs"], ["Tailwind CSS", "tailwindcss"], ["HTML5", "html5"], ["CSS3", "css3"] ] },
    { title: { en: "Backend", ar: "الباك إند" }, items: [
      ["Laravel", "laravel"], ["PHP", "php"], ["Python", "python"], ["FastAPI", "fastapi"], ["Node.js", "nodedotjs"], ["Prisma", "prisma"] ] },
    { title: { en: "Databases", ar: "قواعد البيانات" }, items: [
      ["PostgreSQL", "postgresql"], ["MySQL", "mysql"], ["Supabase", "supabase"], ["SQLite", "sqlite"] ] },
    { title: { en: "Tools & DevOps", ar: "أدوات" }, items: [
      ["Git", "git"], ["GitHub", "github"], ["Docker", "docker"], ["Vercel", "vercel"], ["Playwright", "playwright"], ["GitHub Actions", "githubactions"] ] },
  ],

  timeline: [
    { year: "2024", kind: "cert",
      title: { en: "Programming Fundamentals — Core Academy", ar: "أساسيات البرمجة — Core Academy" },
      text: { en: "C++, problem solving, data structures & OOP.", ar: "C++ وحل المشكلات وهياكل البيانات وOOP." } },
    { year: "2024", kind: "cert",
      title: { en: "Full-Stack Web Diploma — ITI", ar: "دبلومة Full-Stack — ITI" },
      text: { en: "Information Technology Institute full-stack web development diploma.", ar: "دبلومة تطوير الويب Full-Stack من معهد تكنولوجيا المعلومات." } },
    { year: { en: "Now", ar: "حاليًا" }, kind: "work",
      title: { en: "Freelance Full Stack Developer", ar: "مطوّر Full Stack فري لانس" },
      text: { en: "Delivered ERP systems, a factory management system, a desktop POS and a real-estate company website for clients.", ar: "سلّمت أنظمة ERP ونظام إدارة مصنع وبرنامج كاشير ديسكتوب وموقع شركة عقارات لعملاء." } },
    { year: "2026", kind: "cert",
      title: { en: "AI Scholarship — MCIT", ar: "منحة الذكاء الاصطناعي — وزارة الاتصالات" },
      text: { en: "Artificial Intelligence scholarship from the Ministry of Communications & IT.", ar: "منحة في الذكاء الاصطناعي من وزارة الاتصالات وتكنولوجيا المعلومات." } },
    { year: "→ 2028", kind: "edu",
      title: { en: "B.Sc. Computers & Information — BIS", ar: "بكالوريوس حاسبات ومعلومات — نظم معلومات إدارية" },
      text: { en: "Nile Higher Institute for Engineering & Technology.", ar: "معهد النيل العالي للهندسة والتكنولوجيا." } },
  ],
};

/* ---------- UI strings ---------- */
window.I18N = {
  en: {
    "nav.home": "Home", "nav.about": "About", "nav.services": "Services", "nav.stack": "Stack", "nav.works": "Works", "nav.contact": "Contact", "nav.cv": "Download CV",
    "hero.first": "Aziz", "hero.last": "Shaker",
    "hero.kicker": "I build smart<br>business software",
    "hero.right": "That turns<br>ideas into<br><em>products</em>.",
    "hero.status": "Open to full-stack roles & freelance projects",
    "hero.lead": "ERP systems, Arabic-first web platforms and AI-powered products — designed, built and shipped end to end.",
    "hero.hire": "Hire Me", "hero.work": "View My Work", "hero.b1": "live products", "hero.b2": "AI-powered apps",
    "about.eyebrow": "Who am I", "about.title": "A developer building<br>real business products",
    "about.sticker": "Based in Egypt", "about.grad": "Graduating", "about.who": "Who is <em>Aziz</em>?",
    "about.lead": "A Business Information Systems student who already ships production software for real clients.",
    "about.p1": "I'm Aziz Shaker, studying Computers & Information (BIS) at Nile Higher Institute for Engineering & Technology. I work with PHP/Laravel, React, Next.js and PostgreSQL, and I build AI-powered apps with Python and LLM APIs.",
    "about.p2": "As a freelancer I've delivered ERP systems, a factory management system, a desktop POS and a real-estate company website. My portfolio includes an AI thyroid-analysis system, a RAG business assistant, e-commerce stores and a course-selling platform.",
    "about.p3": "I'm looking for a full-stack role where I can turn business problems into clean, working software.",
    "about.journey": "My Journey",
    "stats.live": "Live products", "stats.tech": "Technologies", "stats.cert": "Certifications",
    "services.eyebrow": "What I offer", "services.title": "My Services", "services.see": "See related work",
    "stack.eyebrow": "Tools I trust", "stack.title": "Tech Stack",
    "works.eyebrow": "Live from GitHub", "works.title": "My Work",
    "works.note": "Every project above is deployed and running — click any card for details.", "works.more": "See all on GitHub →",
    "works.live": "Live Demo", "works.code": "Source Code", "works.details": "Details", "works.highlights": "Highlights", "works.updated": "Updated",
    "contact.eyebrow": "Let's work together", "contact.title": "Got an idea?<br><em>Let's build it.</em>",
    "contact.lead": "Whether it's an ERP, an online store or an AI-powered tool — I reply fast.",
    "contact.wa": "WhatsApp", "contact.mail": "Email", "contact.call": "Call", "contact.gh": "GitHub", "contact.copied": "Copied!",
    "footer.name": "Aziz Shaker", "footer.made": "Designed & built by me — no templates.",
  },
  ar: {
    "nav.home": "الرئيسية", "nav.about": "عني", "nav.services": "خدماتي", "nav.stack": "التقنيات", "nav.works": "أعمالي", "nav.contact": "تواصل", "nav.cv": "تحميل السيرة الذاتية",
    "hero.first": "عزيز", "hero.last": "شاكر",
    "hero.kicker": "بَبني برمجيات<br>ذكية للأعمال",
    "hero.right": "بتحوّل<br>الأفكار إلى<br><em>منتجات</em>.",
    "hero.status": "متاح لوظائف Full Stack ومشاريع فري لانس",
    "hero.lead": "أنظمة ERP، منصات ويب عربية، ومنتجات بالذكاء الاصطناعي — من التصميم لحد النشر.",
    "hero.hire": "وظّفني", "hero.work": "شوف أعمالي", "hero.b1": "منتجات منشورة", "hero.b2": "تطبيقات ذكاء اصطناعي",
    "about.eyebrow": "مين أنا", "about.title": "مطوّر بيبني<br>منتجات حقيقية",
    "about.sticker": "من مصر", "about.grad": "التخرج", "about.who": "مين <em>عزيز</em>؟",
    "about.lead": "طالب نظم معلومات إدارية بيسلّم برمجيات شغّالة لعملاء حقيقيين.",
    "about.p1": "أنا عزيز شاكر، بدرس حاسبات ومعلومات (BIS) في معهد النيل العالي للهندسة والتكنولوجيا. بشتغل بـ PHP/Laravel وReact وNext.js وPostgreSQL، وببني تطبيقات ذكاء اصطناعي بـ Python وواجهات LLM.",
    "about.p2": "كفري لانسر سلّمت أنظمة ERP ونظام إدارة مصنع وبرنامج كاشير ديسكتوب وموقع لشركة عقارات. وأعمالي فيها نظام ذكاء اصطناعي لتحليل الغدة الدرقية، ومساعد أعمال RAG، ومتاجر إلكترونية ومنصة لبيع الكورسات.",
    "about.p3": "بدوّر على وظيفة Full Stack أحوّل فيها مشاكل البيزنس لبرمجيات نضيفة وشغّالة.",
    "about.journey": "رحلتي",
    "stats.live": "منتجات منشورة", "stats.tech": "تقنية", "stats.cert": "شهادات",
    "services.eyebrow": "اللي بقدّمه", "services.title": "خدماتي", "services.see": "شوف أعمال مشابهة",
    "stack.eyebrow": "أدوات بثق فيها", "stack.title": "التقنيات",
    "works.eyebrow": "مباشرة من GitHub", "works.title": "أعمالي",
    "works.note": "كل المشاريع دي منشورة وشغّالة — اضغط على أي كارت للتفاصيل.", "works.more": "كل المشاريع على GitHub ←",
    "works.live": "ديمو مباشر", "works.code": "الكود", "works.details": "التفاصيل", "works.highlights": "أهم المميزات", "works.updated": "آخر تحديث",
    "contact.eyebrow": "يلا نشتغل سوا", "contact.title": "عندك فكرة؟<br><em>يلا نبنيها.</em>",
    "contact.lead": "سواء نظام ERP أو متجر أونلاين أو أداة بالذكاء الاصطناعي — برد بسرعة.",
    "contact.wa": "واتساب", "contact.mail": "إيميل", "contact.call": "اتصال", "contact.gh": "GitHub", "contact.copied": "اتنسخ!",
    "footer.name": "عزيز شاكر", "footer.made": "تصميم وتنفيذ بإيدي — من غير قوالب.",
  },
};
