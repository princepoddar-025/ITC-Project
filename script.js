document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Hamburger Menu (5 lines)
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  navToggle?.addEventListener('click', () => {
    const open = navMenu.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  });

  // 2. Smooth Scroll & Close Mobile Menu on Link Click
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      navMenu?.classList.remove('is-open');
      navToggle?.classList.remove('is-open');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  // 3. Single Cursor-Reactive CSS Variable Updater (rAF)
  let rafPending = false;
  window.addEventListener('mousemove', e => {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(() => {
      const root = document.documentElement.style;
      root.setProperty('--mx', `${e.clientX}px`);
      root.setProperty('--my', `${e.clientY}px`);
      root.setProperty('--rx', ((e.clientX / window.innerWidth) - 0.5).toFixed(3));
      root.setProperty('--ry', ((e.clientY / window.innerHeight) - 0.5).toFixed(3));
      rafPending = false;
    });
  }, { passive: true });

  // 4. FAQ Accordion
  document.querySelectorAll('.accordion-header').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isOpen = item.classList.toggle('active');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  });

  // 5. Form Validation & Success Modal
  const form = document.getElementById('enroll-form');
  const modal = document.getElementById('success-modal');
  const modalMsg = document.getElementById('modal-message');
  const submitBtn = document.getElementById('submit-btn');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  const setFieldState = (input, valid, msg = '') => {
    const group = input.closest('.form-group');
    const errorEl = document.getElementById(`${input.id}-error`);
    group.classList.toggle('is-valid', valid);
    group.classList.toggle('is-invalid', !valid);
    if (errorEl) errorEl.textContent = valid ? '' : msg;
    return valid;
  };

  const validateField = input => {
    const val = input.value.trim();
    if (input.id === 'fullName') return setFieldState(input, val.length >= 2, 'Please enter your full name.');
    if (input.id === 'email') return setFieldState(input, emailRegex.test(val), 'Enter a valid email address.');
    if (input.id === 'phone') return setFieldState(input, phoneRegex.test(val), 'Enter a 10-digit phone number.');
    if (input.id === 'track') return setFieldState(input, val !== '', 'Please select a learning track.');
    return true;
  };

  form?.querySelectorAll('input, select').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.closest('.form-group').classList.contains('is-invalid')) validateField(field);
    });
  });

  form?.addEventListener('submit', e => {
    e.preventDefault();
    const fields = [...form.querySelectorAll('input, select')];
    const allValid = fields.map(validateField).every(Boolean);
    if (!allValid) return;

    submitBtn.classList.add('is-loading');
    submitBtn.disabled = true;

    setTimeout(() => {
      const name = document.getElementById('fullName').value.trim();
      const track = document.getElementById('track').value;
      modalMsg.textContent = `Welcome aboard, ${name}! Your spot in the ${track} live cohort is reserved. Check your inbox for your onboarding link.`;
      modal.hidden = false;
      submitBtn.classList.remove('is-loading');
      submitBtn.disabled = false;
      form.reset();
      form.querySelectorAll('.form-group').forEach(g => g.classList.remove('is-valid', 'is-invalid'));
    }, 500);
  });

  const closeModal = () => { modal.hidden = true; };
  document.getElementById('modal-close')?.addEventListener('click', closeModal);
  document.getElementById('modal-backdrop')?.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });
});