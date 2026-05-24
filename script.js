// ============================================
// Dany Haikal · Portfolio interactions
// ============================================

// 1) Set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// 2) Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  // Close menu after clicking a link (mobile)
  nav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => nav.classList.remove('open'))
  );
}

// 3) Dark / Light mode toggle with localStorage persistence
(function initTheme() {
  const root = document.documentElement;
  const themeBtn = document.getElementById('theme-toggle');

  // Load saved theme, or fall back to user's OS preference
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', initial);

  // Update meta theme-color (changes the browser chrome on mobile)
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  const setMeta = (mode) => {
    if (metaTheme) metaTheme.setAttribute('content', mode === 'dark' ? '#0a0a0a' : '#ffffff');
  };
  setMeta(initial);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      setMeta(next);
    });
  }
})();

// 4) Highlight active section in the nav while scrolling
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${id}`) {
          link.style.color = 'var(--ink)';
        }
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach((s) => observer.observe(s));

// 5) Subtle reveal-on-scroll for cards
const revealEls = document.querySelectorAll('.card, .domain-card, .exp-item, .project-card, .edu-item, .skill-block, .contact-card, .lang-card, .about-stat, .about-photo-wrap');
revealEls.forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(14px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach((el) => revealObserver.observe(el));

// 6) Animate language bars when they scroll into view
const langBars = document.querySelectorAll('.lang-bar span');
langBars.forEach((bar) => {
  const targetWidth = bar.style.width;
  bar.style.width = '0%';
  bar.dataset.target = targetWidth;
});
const langObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.target;
      langObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
langBars.forEach((bar) => langObserver.observe(bar));

// 7) Handle missing about-photo gracefully
const aboutPhoto = document.querySelector('.about-photo');
if (aboutPhoto) {
  aboutPhoto.addEventListener('error', () => {
    aboutPhoto.style.display = 'none';
  });
}
