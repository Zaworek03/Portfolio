import { defineConfig } from 'astro/config';

// GitHub Pages: https://zaworek03.github.io/Portfolio/
export default defineConfig({
  site: 'https://zaworek03.github.io',
  base: '/Portfolio',
  trailingSlash: 'always',
  build: {
    // GitHub Pages cache'uje HTML przez 10 minut, a każdy deploy zmienia nazwy plików CSS.
    // Wbudowany CSS sprawia, że strona z cache nigdy nie odwołuje się do usuniętego arkusza.
    inlineStylesheets: 'always',
  },
});
