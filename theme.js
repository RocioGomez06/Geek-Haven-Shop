// Lógica isolada de temas para GeekHaven

document.addEventListener('DOMContentLoaded', function () {
  const root = document.documentElement;
  const THEMES = ['default', 'light', 'desaturated', 'colorblind'];

  // Lee tema salvo ou usa "default"
  const saved = localStorage.getItem('gh-color-mode');
  const initial = THEMES.includes(saved) ? saved : 'default';

  // Aplica tema inicial
  THEMES.forEach(t => root.classList.remove('theme-' + t));
  root.classList.add('theme-' + initial);

  // Ativa botão correspondente
  const buttons = document.querySelectorAll('.theme-btn');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    if (btn.dataset.theme === initial) {
      btn.classList.add('active');
    }

    btn.addEventListener('click', () => {
      const chosen = btn.dataset.theme || 'default';

      // troca a clase no <html>
      THEMES.forEach(t => root.classList.remove('theme-' + t));
      root.classList.add('theme-' + chosen);
      localStorage.setItem('gh-color-mode', chosen);

      // atualiza estado visual dos botões
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
});