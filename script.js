document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const THEMES = ['default', 'light', 'desaturated', 'colorblind'];

  // ---- Tema salvo / modo de cor ----
  const savedTheme = localStorage.getItem('gh-color-mode');
  const initialTheme = THEMES.includes(savedTheme) ? savedTheme : 'default';

  THEMES.forEach(theme => {
    body.classList.remove(`theme-${theme}`);
  });
  body.classList.add(`theme-${initialTheme}`);

  const select = document.getElementById('color-mode');
  if (select) {
    select.value = initialTheme;

    select.addEventListener('change', () => {
      const chosen = select.value;

      THEMES.forEach(theme => {
        body.classList.remove(`theme-${theme}`);
      });

      body.classList.add(`theme-${chosen}`);
      localStorage.setItem('gh-color-mode', chosen);
    });
  }

  // ---- Animações de "reveal" ao rolar ----
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // anima só uma vez
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback: se não houver suporte, mostra tudo direto
    revealElements.forEach(el => el.classList.add('is-visible'));
  }
});
