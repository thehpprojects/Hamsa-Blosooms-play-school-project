document.addEventListener("DOMContentLoaded", () => {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  // 1. Re-order Section Flow for optimal UX
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

  // 2. Inject Principal Message Section if missing
  if (about && !$(".principal-message")) {
    about.insertAdjacentHTML(
      "beforeend",
      `<div class="principal-message shell reveal">
        <div class="principal-portrait">
          <img src="./images/hp.png" alt="Ms. Hamsa P, Founder and Principal">
          <span>15+<small>years of<br>excellence</small></span>
        </div>
        <div class="principal-words">
          <i class="quote-mark">“</i>
          <p class="eyebrow">A NOTE FROM OUR PRINCIPAL</p>
          <h2>A loving home for curious little minds</h2>
          <p>Welcome to Hamsa Blossoms. Every child is a seed full of potential. We provide the sunshine of love and the water of knowledge so each one blooms into their brightest self.</p>
          <p>Our play-based approach gives children the confidence to ask, discover, create and be wonderfully themselves. We invite your family to grow with ours.</p>
          <div class="signature">
            <b>Ms. Hamsa P</b>
            <span>Founder &amp; Principal</span>
          </div>
        </div>
      </div>`
    );
  }

  // 3. Inject Journey Timeline Section if missing
  if (about && !$("#journey")) {
    about.insertAdjacentHTML(
      "afterend",
      `<section class="section journey" id="journey">
        <div class="section-title reveal">
          <p>OUR JOURNEY</p>
          <h2>A timeline of <span>growing together</span></h2>
          <p class="sub">From one small dream to a vibrant community of joyful learners.</p>
        </div>
        <div class="timeline shell">
          <article class="reveal">
            <div class="time-icon">✿</div>
            <div>
              <time>2010</time>
              <h3>School founded</h3>
              <p>Hamsa Blossoms opened its doors with 12 children and a very big dream.</p>
            </div>
          </article>
          <article class="reveal">
            <div class="time-icon">♡</div>
            <div>
              <time>2013</time>
              <h3>First 100 students</h3>
              <p>Our family grew, one happy Hamsa blossom at a time.</p>
            </div>
          </article>
          <article class="reveal">
            <div class="time-icon">⌘</div>
            <div>
              <time>2016</time>
              <h3>Smart classrooms</h3>
              <p>Modern learning spaces brought new ways to explore and imagine.</p>
            </div>
          </article>
          <article class="reveal">
            <div class="time-icon">★</div>
            <div>
              <time>2019</time>
              <h3>Best Preschool award</h3>
              <p>Honoured by our city for exceptional early childhood education.</p>
            </div>
          </article>
          <article class="reveal">
            <div class="time-icon">⚙</div>
            <div>
              <time>2022</time>
              <h3>Activity labs</h3>
              <p>Robotics, movement and maker corners joined our playful campus.</p>
            </div>
          </article>
          <article class="reveal">
            <div class="time-icon">☀</div>
            <div>
              <time>2025</time>
              <h3>600+ happy students</h3>
              <p>A bright new chapter, with admissions open for more young explorers.</p>
            </div>
          </article>
        </div>
      </section>`
    );
  }

  // 4. Dark Mode Theme Toggle
  const header = $("header");
  if (header && !$(".theme-toggle")) {
    header.insertAdjacentHTML(
      "beforeend",
      '<button class="theme-toggle" aria-label="Enable dark mode" aria-pressed="false"><span>☾</span><b>Dark</b></button>'
    );
  }

  const themeToggle = $(".theme-toggle");
  const savedTheme = localStorage.getItem("lb-theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  if (themeToggle) {
    const isDark = document.body.classList.contains("dark");
    themeToggle.setAttribute("aria-pressed", isDark);
    themeToggle.innerHTML = isDark
      ? "<span>☀</span><b>Light</b>"
      : "<span>☾</span><b>Dark</b>";

    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const darkNow = document.body.classList.contains("dark");
      localStorage.setItem("lb-theme", darkNow ? "dark" : "light");
      themeToggle.setAttribute("aria-pressed", darkNow);
      themeToggle.innerHTML = darkNow
        ? "<span>☀</span><b>Light</b>"
        : "<span>☾</span><b>Dark</b>";
    });
  }

  // 5. Admissions Plus & Steps Insertion
  const admissions = $("#admissions");
  if (admissions && !$(".admission-plus")) {
    admissions.insertAdjacentHTML(
      "beforeend",
      `<div class="admission-plus shell">
        <div class="section-title reveal">
          <p>YOUR ADMISSION JOURNEY</p>
          <h2>Simple steps to a <span>happy beginning</span></h2>
        </div>
        <div class="admission-steps">
          ${[
            "Online Enquiry",
            "Book Campus Visit",
            "Meet Teachers & Principal",
            "Submit Admission Form",
            "Document Verification",
            "Fee Payment",
            "Welcome to Hamsa Blossoms"
          ]
            .map(
              (step, i) =>
                `<article class="step-card reveal">
                  <b>0${i + 1}</b>
                  <i>${["✉", "⌂", "♡", "✎", "✓", "◇", "✿"][i]}</i>
                  <h3>${step}</h3>
                  <p>${i === 0 ? "Tell us about your little one and we will guide you warmly." : "A gentle, guided step towards their joyful school journey."}</p>
                </article>`
            )
            .join("")}
        </div>
        <div class="admission-details">
          <article class="eligibility reveal">
            <h3>Eligibility</h3>
            <p><b>Play Group</b><span>1.5 – 2.5 years</span></p><p><b>Nursery</b><span>2.5 – 3.5 years</span></p><p><b>LKG</b><span>3.5 – 4.5 years</span></p><p><b>UKG</b><span>4.5 – 5.5 years</span></p>
          </article>
          <article class="documents reveal">
            <h3>Required documents</h3>
            <div>
              ${[
                "Birth Certificate",
                "Passport Size Photos",
                "Aadhaar Card",
                "Parent ID Proof",
                "Address Proof",
                "Medical Certificate",
                "Transfer Certificate (if applicable)",
                "Emergency Contact Details"
              ]
                .map((doc) => `<span>✓ ${doc}</span>`)
                .join("")}
            </div>
          </article>
        </div>
      </div>`
    );
  }

  // 6. Program Cards Interactive State
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

  // 7. Button Ripple Effect
  $$(".btn, .enroll").forEach((button) => {
    button.addEventListener("click", (e) => {
      const rect = button.getBoundingClientRect();
      const ring = document.createElement("i");
      ring.className = "ripple";
      ring.style.left = `${e.clientX - rect.left}px`;
      ring.style.top = `${e.clientY - rect.top}px`;
      button.appendChild(ring);
      ring.addEventListener("animationend", () => ring.remove());
    });
  });

  // 8. Hide Page Loader
  setTimeout(() => {
    const loader = $(".loader");
    if (loader) loader.classList.add("hide");
  }, 500);

  // 9. Mobile Hamburger Navigation Toggle
  const menuBtn = $(".menu");
  const navMenu = $("nav");
  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", navMenu.classList.contains("open"));
    });
    $$("nav a").forEach((a) =>
      a.addEventListener("click", () => navMenu.classList.remove("open"))
    );
  }

  // 10. IntersectionObserver for Reveal Animations
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          revealObserver.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  $$(".reveal").forEach((el) => revealObserver.observe(el));

  // 11. Animated Counter for Stats
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const end = +el.dataset.count;
        const duration = 1200;
        const start = performance.now();

        const animate = (now) => {
          const value = Math.min(
            Math.round(((now - start) / duration) * end),
            end
          );
          el.textContent = value + (end === 100 ? "%" : "+");
          if (value < end) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  $$("[data-count]").forEach((el) => counterObserver.observe(el));

  // 12. Scroll Progress Bar, Header Scrolled State & Back-to-Top Button
  const progressBar = $("#progress");
  const topBtn = $("#top");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    if (progressBar && maxScroll > 0) {
      progressBar.style.width = `${(scrollY / maxScroll) * 100}%`;
    }
    if (header) {
      header.classList.toggle("scrolled", scrollY > 15);
    }
    if (topBtn) {
      topBtn.classList.toggle("show", scrollY > 400);
    }
  });

  if (topBtn) {
    topBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 13. Gallery Filtering
  const filterBtns = $$(".filters button");
  const galleryItems = $$(".gallery-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      const filter = btn.dataset.filter;

      galleryItems.forEach((item) => {
        if (filter === "all" || item.dataset.kind === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // 14. Gallery Lightbox Modal
  const lightbox = $(".lightbox");
  if (lightbox) {
    const lightboxImg = lightbox.querySelector("img");
    const closeBtn = lightbox.querySelector("button");

    galleryItems.forEach((item) => {
      item.addEventListener("click", () => {
        if (lightboxImg) lightboxImg.src = item.dataset.image;
        lightbox.classList.add("open");
        lightbox.setAttribute("aria-hidden", "false");
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        lightbox.classList.remove("open");
        lightbox.setAttribute("aria-hidden", "true");
      });
    }

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("open");
        lightbox.setAttribute("aria-hidden", "true");
      }
    });
  }

  // 15. Testimonial Carousel Slider
  const testimonials = $$(".testimonial");
  const prevBtn = $(".slide-prev");
  const nextBtn = $(".slide-next");
  let currentSlide = 0;

  function showSlide(n) {
    if (!testimonials.length) return;
    testimonials[currentSlide].classList.remove("active");
    currentSlide = (n + testimonials.length) % testimonials.length;
    testimonials[currentSlide].classList.add("active");
  }

  if (nextBtn) nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));
  if (prevBtn) prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));

  if (testimonials.length > 1) {
    setInterval(() => showSlide(currentSlide + 1), 6000);
  }

  // 16. Contact & Newsletter Form Feedback
  const contactForm = $("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formNote = $(".form-note");
      if (formNote) {
        formNote.textContent = "Thank you! Our admissions team will contact you shortly.";
      }
      contactForm.reset();
    });
  }

  const newsletterForm = $(".newsletter");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      newsletterForm.innerHTML =
        '<span style="padding: 8px 14px; font-size: 0.8rem; color: #10b981; font-weight: 800;">You’re on the list! ✿</span>';
    });
  }

  // 17. Typewriter Effect for Hero Lead Text
  const texts = [
    "A safe, nurturing and joyful world where little minds grow, explore and blossom every day.",
    "Learning through play, creativity and endless imagination.",
    "Building confidence, kindness and curiosity in every child.",
    "A place where every child feels loved, safe and inspired.",
    "Admissions Open for Playgroup, Nursery, LKG and UKG."
  ];

  const typingElement = document.querySelector(".lead");
  let textIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function typeEffect() {
    if (!typingElement) return;
    const currentText = texts[textIdx];

    if (!isDeleting) {
      typingElement.textContent = currentText.substring(0, charIdx + 1);
      charIdx++;

      if (charIdx === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
      }
    } else {
      typingElement.textContent = currentText.substring(0, charIdx - 1);
      charIdx--;

      if (charIdx === 0) {
        isDeleting = false;
        textIdx = (textIdx + 1) % texts.length;
      }
    }

    setTimeout(typeEffect, isDeleting ? 25 : 55);
  }

  typeEffect();

  // 18. Nav Link Scrollspy Active State
  const sections = $$("section[id]");
  const navLinks = $$("nav a[href^='#']");

  window.addEventListener("scroll", () => {
    let currentId = "";
    sections.forEach((sec) => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentId = sec.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + currentId) {
        link.classList.add("active");
      }
    });
  });
});
