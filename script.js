document.addEventListener("DOMContentLoaded", () => {
  const $ = (s) => document.querySelector(s),
    $$ = (s) => document.querySelectorAll(s);
  const about = $("#about"),
    stats = $(".stats"),
    why = $(".why"),
    programs = $("#programs"),
    facilities = $("#facilities"),
    tour = $("#tour");
  if (about && stats) stats.after(about);
  if (about && programs && facilities && why) {
    about.after(programs);
    programs.after(facilities);
    if (tour) facilities.after(tour);
    (tour || facilities).after(why);
  }
  if (about && !$(".principal-message"))
    about.insertAdjacentHTML(
      "beforeend",
      `<div class="principal-message shell reveal"><div class="principal-portrait"><img src="./images/hp.png" alt=" Ms. Hamsa  P, Founder and Principal"><span>15+<small>years of<br>excellence</small></span></div><div class="principal-words"><i class="quote-mark">“</i><p class="eyebrow">A NOTE FROM OUR PRINCIPAL</p><h2>A loving home for curious little minds</h2><p>Welcome to Hamsa Blossoms. Every child is a seed full of potential. We provide the sunshine of love and the water of knowledge so each one blooms into their brightest self.</p><p>Our play-based approach gives children the confidence to ask, discover, create and be wonderfully themselves. We invite your family to grow with ours.</p><div class="signature"><b> Ms. Hamsa  P</b><span>Founder &amp; Principal</span></div></div></div>`,
    );
  if (about && !$("#journey"))
    about.insertAdjacentHTML(
      "afterend",
      `<section class="section journey" id="journey"><div class="section-title reveal"><p>OUR JOURNEY</p><h2>A timeline of <span>growing together</span></h2><p class="sub">From one small dream to a vibrant community of joyful learners.</p></div><div class="timeline shell"><article class="reveal"><div class="time-icon">✿</div><div><time>2010</time><h3>School founded</h3><p>Hamsa Blossoms opened its doors with 12 children and a very big dream.</p></div></article><article class="reveal"><div class="time-icon">♡</div><div><time>2013</time><h3>First 100 students</h3><p>Our family grew, one happy Hamsa blossom at a time.</p></div></article><article class="reveal"><div class="time-icon">⌘</div><div><time>2016</time><h3>Smart classrooms</h3><p>Modern learning spaces brought new ways to explore and imagine.</p></div></article><article class="reveal"><div class="time-icon">★</div><div><time>2019</time><h3>Best Preschool award</h3><p>Honoured by our city for exceptional early childhood education.</p></div></article><article class="reveal"><div class="time-icon">⚙</div><div><time>2022</time><h3>Activity labs</h3><p>Robotics, movement and maker corners joined our playful campus.</p></div></article><article class="reveal"><div class="time-icon">☀</div><div><time>2025</time><h3>600+ happy students</h3><p>A bright new chapter, with admissions open for more young explorers.</p></div></article></div></section>`,
    );
  if (!$(".theme-toggle"))
    document
      .querySelector("header")
      .insertAdjacentHTML(
        "beforeend",
        '<button class="theme-toggle" aria-label="Enable dark mode" aria-pressed="false"><span>☾</span><b>Dark</b></button>',
      );
  const theme = $(".theme-toggle"),
    savedTheme = localStorage.getItem("lb-theme");
  if (savedTheme === "dark") document.body.classList.add("dark");
  theme.setAttribute("aria-pressed", document.body.classList.contains("dark"));
  theme.innerHTML = document.body.classList.contains("dark")
    ? "<span>☀</span><b>Light</b>"
    : "<span>☾</span><b>Dark</b>";
  theme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const dark = document.body.classList.contains("dark");
    localStorage.setItem("lb-theme", dark ? "dark" : "light");
    theme.setAttribute("aria-pressed", dark);
    theme.innerHTML = dark
      ? "<span>☀</span><b>Light</b>"
      : "<span>☾</span><b>Dark</b>";
  });
  const heroPhoto = $(".hero-art>img");
  if (heroPhoto) {
    heroPhoto.src = "./images/home.jpg";
    heroPhoto.alt =
      "Caring teacher sharing a happy learning moment with preschool children";
    $(".hero-art").insertAdjacentHTML(
      "beforeend",
      '<div class="hero-toys" aria-hidden="true">🧸&nbsp; ◼ &nbsp; ◯</div><div class="hero-birds" aria-hidden="true">⌁ &nbsp;⌁</div><div class="hero-butterfly" aria-hidden="true">🦋</div><div class="hero-bubbles" aria-hidden="true"><i></i><i></i><i></i></div>',
    );
  }
  $(".castle")?.remove();
  $(".hero-butterfly")?.remove();
  const heroToys = $(".hero-toys");
  if (heroToys) heroToys.innerHTML = "◼ &nbsp; ▲ &nbsp; ◯";
  const hero = $(".hero");
  if (hero && !$(".hero-scene")) {
    hero
      .querySelectorAll(
        ".sun,.rainbow,.castle,.hero-toys,.hero-birds,.hero-butterfly,.hero-bubbles,.balloon,.star,.cloud",
      )
      .forEach((el) => el.remove());
    const copy = $(".hero-copy"),
      art = $(".hero-art");
    copy.querySelector("h1").innerHTML =
      "Where Every <span>Child’s Journey</span> Begins";
    copy.insertAdjacentHTML(
      "afterbegin",
      '<div class="hero-kicker">A brighter beginning for every little learner</div>',
    );
    copy
      .querySelector(".trust")
      .insertAdjacentHTML(
        "afterend",
        '<div class="family-badge"><i>♥</i><span><b>Trusted by 600+ Happy Families</b><small>A warm start to lifelong learning</small></span></div>',
      );
    art.classList.add("montessori-photo");
    art.insertAdjacentHTML(
      "beforeend",
      '<span class="photo-label">Play. Discover. Bloom.</span>',
    );
  }
  if (facilities && !$(".facility-showcase"))
    facilities
      .querySelector(".split>div:first-child")
      .insertAdjacentHTML(
        "afterbegin",
        '<div class="facility-showcase reveal"><img src="./images/child7.jpeg" alt="A bright Hamsa Blossoms classroom campus"><span class="showcase-sun">☀</span><span class="showcase-rainbow">🌈</span><span class="showcase-flower">✿</span><span class="showcase-badge">A world made<br>for wonder</span></div>',
      );
  if (facilities && !$(".facility-card")) {
    const info = [
      [
        "🧩",
        "Smart Classroom",
        "Interactive digital learning with engaging visuals.",
        "Technology",
      ],
      [
        "📹",
        "24/7 CCTV",
        "Continuous monitoring for maximum child safety.",
        "Security",
      ],
      [
        "🚌",
        "GPS Transport",
        "Real-time school bus tracking for peace of mind.",
        "Transport",
      ],
      [
        "🍎",
        "Healthy Meals",
        "Fresh nutritious food prepared every day.",
        "Nutrition",
      ],
      [
        "🩺",
        "Medical Room",
        "Immediate healthcare support when it matters.",
        "Health",
      ],
      [
        "🎲",
        "Indoor Play Zone",
        "Fun learning through indoor activities.",
        "Recreation",
      ],
      [
        "⚽",
        "Outdoor Playground",
        "Safe equipment for active outdoor play.",
        "Fitness",
      ],
      [
        "🎵",
        "Music Room",
        "Creative musical learning and self-expression.",
        "Creativity",
      ],
      [
        "💃",
        "Dance Studio",
        "Movement and confidence building with joy.",
        "Expression",
      ],
      [
        "🖍",
        "Art & Craft",
        "Hands-on creativity for imaginative minds.",
        "Innovation",
      ],
      ["📚", "Library", "Early reading habits in a cozy corner.", "Knowledge"],
      [
        "🌙",
        "Nap Room",
        "Comfortable resting space for little learners.",
        "Wellness",
      ],
      [
        "🎓",
        "Experienced Teachers",
        "Certified caring educators by every child.",
        "Excellence",
      ],
      [
        "❄",
        "Air Conditioned",
        "Comfortable learning all year round.",
        "Comfort",
      ],
      [
        "✦",
        "Clean Washrooms",
        "Hygienic facilities designed for children.",
        "Hygiene",
      ],
    ];
    facilities.querySelector(".facility-grid").innerHTML = info
      .map(
        (x) =>
          `<article class="facility-card reveal"><i>${x[0]}</i><h3>${x[1]}</h3><p>${x[2]}</p><small>${x[3]}</small></article>`,
      )
      .join("");
  }
  [
    [".why", "🌸 ✦"],
    [".programs", "🪁 ✿"],
    [".gallery", "✦ ✧"],
    [".testimonials", "☁ ✦"],
    [".admissions", "✿ ✧"],
    [".contact", "✈ ☀"],
    ["footer", "🌼 ☁"],
  ].forEach(([selector, icons]) => {
    const section = $(selector);
    if (section && !section.querySelector(".page-doodles"))
      section.insertAdjacentHTML(
        "afterbegin",
        `<div class="page-doodles" aria-hidden="true"><i>${icons.split(" ")[0]}</i><b>${icons.split(" ")[1]}</b></div>`,
      );
  });
  $$(".section,.tour,.testimonials,.contact,footer").forEach((section) => {
    if (!section.querySelector(".twinkle-field"))
      section.insertAdjacentHTML(
        "beforeend",
        '<div class="twinkle-field" aria-hidden="true">✦ &nbsp;✧ &nbsp;✦</div>',
      );
  });
  $$(".program").forEach((card) => {
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    const toggle = () => card.classList.toggle("is-active");
    card.addEventListener("click", (e) => {
      if (!e.target.closest("a")) toggle();
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });
  });
  const admissions = $("#admissions");
  if (admissions && !$(".admission-plus"))
    admissions.insertAdjacentHTML(
      "beforeend",
      `<div class="admission-plus shell"><div class="section-title reveal"><p>YOUR ADMISSION JOURNEY</p><h2>Simple steps to a <span>happy beginning</span></h2></div><div class="admission-steps">${["Online Enquiry", "Book Campus Visit", "Meet Teachers & Principal", "Submit Admission Form", "Document Verification", "Fee Payment", "Welcome to Hamsa Blossoms"].map((x, i) => `<article class="step-card reveal"><b>0${i + 1}</b><i>${["✉", "⌂", "♡", "✎", "✓", "◇", "✿"][i]}</i><h3>${x}</h3><p>${i === 0 ? "Tell us about your little one and we will guide you warmly." : "A gentle, guided step towards their joyful school journey."}</p></article>`).join("")}</div><div class="admission-details"><article class="eligibility reveal"><h3>Eligibility</h3><p><b>Play Group</b><span>1.5 – 2.5 years</span></p><p><b>Nursery</b><span>2.5 – 3.5 years</span></p><p><b>LKG</b><span>3.5 – 4.5 years</span></p><p><b>UKG</b><span>4.5 – 5.5 years</span></p></article><article class="documents reveal"><h3>Required documents</h3><div>${["Birth Certificate", "Passport Size Photos", "Aadhaar Card", "Parent ID Proof", "Address Proof", "Medical Certificate", "Transfer Certificate (if applicable)", "Emergency Contact Details"].map((x) => `<span>✓ ${x}</span>`).join("")}</div></article></div></div>`,
    );
  $$(".btn,.enroll").forEach((button) =>
    button.addEventListener("click", (e) => {
      const r = button.getBoundingClientRect(),
        ring = document.createElement("i");
      ring.className = "ripple";
      ring.style.left = `${e.clientX - r.left}px`;
      ring.style.top = `${e.clientY - r.top}px`;
      button.append(ring);
      ring.addEventListener("animationend", () => ring.remove());
    }),
  );
  const art = $(".hero-art");
  addEventListener(
    "mousemove",
    (e) => {
      if (!art || innerWidth < 800) return;
      const x = (e.clientX / innerWidth - 0.5) * 12,
        y = (e.clientY / innerHeight - 0.5) * 12;
      art.style.transform = `translate(${x}px,${y}px)`;
    },
    { passive: true },
  );
  setTimeout(() => $(".loader").classList.add("hide"), 550);
  const menu = $(".menu"),
    nav = $("nav");
  menu.addEventListener("click", () => {
    nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", nav.classList.contains("open"));
  });
  $$("nav a").forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("open")),
  );
  const reveal = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          reveal.unobserve(e.target);
        }
      }),
    { threshold: 0.12 },
  );
  $$(".reveal").forEach((e) => reveal.observe(e));
  const counters = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target,
          end = +el.dataset.count,
          duration = 1300,
          start = performance.now();
        const go = (now) => {
          const value = Math.min(
            Math.round(((now - start) / duration) * end),
            end,
          );
          el.textContent = value + (end === 100 ? "%" : "+");
          if (value < end) requestAnimationFrame(go);
        };
        requestAnimationFrame(go);
        counters.unobserve(el);
      }),
    { threshold: 0.7 },
  );
  $$("[data-count]").forEach((e) => counters.observe(e));
  addEventListener("scroll", () => {
    const y = scrollY,
      max = document.documentElement.scrollHeight - innerHeight;
    $("#progress").style.width = `${(y / max) * 100}%`;
    $("header").classList.toggle("scrolled", y > 10);
    $("#top").classList.toggle("show", y > 500);
  });
  $("#top").onclick = () => scrollTo({ top: 0, behavior: "smooth" });
  $$(".filters button").forEach(
    (b) =>
      (b.onclick = () => {
        $$(".filters button").forEach((x) => x.classList.remove("selected"));
        b.classList.add("selected");
        $$(".gallery-item").forEach(
          (item) =>
            (item.style.display =
              b.dataset.filter === "all" ||
              item.dataset.kind === b.dataset.filter
                ? "block"
                : "none"),
        );
      }),
  );
  const light = $(".lightbox");
  $$(".gallery-item").forEach(
    (i) =>
      (i.onclick = () => {
        light.querySelector("img").src = i.dataset.image;
        light.classList.add("open");
        light.setAttribute("aria-hidden", "false");
      }),
  );
  light.querySelector("button").onclick = () => light.classList.remove("open");
  light.onclick = (e) => {
    if (e.target === light) light.classList.remove("open");
  };
  let slide = 0,
    slides = $$(".testimonial");
  function show(n) {
    slides[slide].classList.remove("active");
    slide = (n + slides.length) % slides.length;
    slides[slide].classList.add("active");
  }
  $(".slide-next").onclick = () => show(slide + 1);
  $(".slide-prev").onclick = () => show(slide - 1);
  setInterval(() => show(slide + 1), 6500);
  $("#contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    $(".form-note").textContent =
      "Thank you! Our admissions team will contact you shortly.";
    e.target.reset();
  });
  $(".newsletter").addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.innerHTML =
      '<span style="padding:8px 14px;font-size:.75rem;color:#4aac52;font-weight:800">You’re on the list! ✿</span>';
  });
  const texts = [
    "A safe, nurturing and joyful world where little minds grow, explore and blossom every day.",
    "Learning through play, creativity and endless imagination.",
    "Building confidence, kindness and curiosity in every child.",
    "A place where every child feels loved, safe and inspired.",
    "Admissions Open for Playgroup, Nursery, LKG and UKG.",
  ];

  const typingElement = document.querySelector(".lead");

  let textIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {
    if (!typingElement) return;

    const currentText = texts[textIndex];

    if (!deleting) {
      typingElement.textContent = currentText.substring(0, charIndex + 1);

      charIndex++;

      if (charIndex === currentText.length) {
        deleting = true;
        setTimeout(typeEffect, 1800);
        return;
      }
    } else {
      typingElement.textContent = currentText.substring(0, charIndex - 1);

      charIndex--;

      if (charIndex === 0) {
        deleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    }

    setTimeout(typeEffect, deleting ? 30 : 60);
  }

  typeEffect();
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a[href^='#']");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
});
