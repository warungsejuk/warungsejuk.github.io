const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.gap = '10px';
});
