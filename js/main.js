/* ============================================
   ATARIYAA CAFE — अटरिया कैफ़े
   Main JavaScript
   ============================================ */

/* ------------------------------------------
   CUSTOM CURSOR
------------------------------------------ */
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});

// Grow cursor on hover over interactive elements
document.querySelectorAll('a, button').forEach((el) => {
  el.addEventListener('mouseenter', () => cursor.classList.add('big'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('big'));
});

/* ------------------------------------------
   SCROLL REVEAL
------------------------------------------ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

/* ------------------------------------------
   MENU FILTER
------------------------------------------ */
function filterMenu(category, clickedBtn) {
  // Update active button
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.classList.remove('active');
  });
  clickedBtn.classList.add('active');

  // Show / hide cards
  document.querySelectorAll('.menu-card').forEach((card) => {
    const match = category === 'all' || card.dataset.cat === category;
    card.style.display = match ? 'block' : 'none';
  });
}

/* ------------------------------------------
   ADD TO CART — toast notification
------------------------------------------ */
function addToCart(btn) {
  // Change button to checkmark
  btn.textContent = '✓';
  btn.style.background = 'var(--sage)';

  // Show toast
  const toast = document.getElementById('toast');
  toast.style.opacity = '1';

  // Reset after 2 seconds
  setTimeout(() => {
    toast.style.opacity = '0';
    btn.textContent     = '+';
    btn.style.background = 'var(--warm)';
  }, 2000);
}

/* ------------------------------------------
   NAVBAR — hide/show on scroll
------------------------------------------ */
let lastScrollY = window.scrollY;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY && window.scrollY > 80) {
    nav.style.transform = 'translateY(-100%)';
  } else {
    nav.style.transform = 'translateY(0)';
  }
  lastScrollY = window.scrollY;
});

nav.style.transition = 'transform 0.3s ease';
