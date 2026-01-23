import './styles/main.css';
import { initScrollAnimations, initSmoothScroll } from './utils/scroll-animations';

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize scroll animations
  initScrollAnimations();

  // Initialize smooth scroll for anchor links
  initSmoothScroll();

  // Make hero visible immediately
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.classList.add('visible');
  }
});
