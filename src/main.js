import './styles/main.css';

const KEY = 'theme';
const root = document.documentElement;
const btn = document.querySelector('.theme-toggle');

function currentTheme() {
  const explicit = root.getAttribute('data-theme');
  if (explicit) return explicit;
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function renderLabel() {
  if (!btn) return;
  btn.textContent = currentTheme() === 'dark' ? 'light' : 'dark';
}

renderLabel();

btn?.addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem(KEY, next);
  renderLabel();
});

matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (!root.hasAttribute('data-theme')) renderLabel();
});
