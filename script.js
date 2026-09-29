const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const modal = document.querySelector('#video-modal');
const siteShell = document.querySelector('.site-shell');
const video = modal.querySelector('video');
const closeButton = modal.querySelector('.video-close');
let previousFocus = null;

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Menyuni ochish');
  mobileNav.classList.remove('is-open');
  mobileNav.inert = true;
}

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Menyuni yopish' : 'Menyuni ochish');
  mobileNav.classList.toggle('is-open', open);
  mobileNav.inert = !open;
});
mobileNav.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 740) closeMenu();
});

function closeVideo() {
  if (modal.getAttribute('aria-hidden') === 'true') return;
  video.pause();
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  modal.inert = true;
  siteShell.inert = false;
  document.body.style.overflow = '';
  previousFocus?.focus();
}

document.querySelector('[data-open-video]').addEventListener('click', (event) => {
  previousFocus = event.currentTarget;
  closeMenu();
  modal.inert = false;
  siteShell.inert = true;
  modal.setAttribute('aria-hidden', 'false');
  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  closeButton.focus();
  video.play().catch(() => {});
});
closeButton.addEventListener('click', closeVideo);
modal.addEventListener('click', (event) => {
  if (event.target === modal) closeVideo();
});
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  closeVideo();
  closeMenu();
});
document.querySelector('#year').textContent = new Date().getFullYear();
