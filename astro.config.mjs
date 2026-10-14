import { defineConfig } from 'astro/config';

// Для репозитория nurbolitoo.github.io base = '/'.
// Если репозиторий называется иначе (например, portfolio), задайте BASE_PATH=/portfolio
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://nurbolitoo.github.io',
  base: process.env.BASE_PATH ?? '/',
});
