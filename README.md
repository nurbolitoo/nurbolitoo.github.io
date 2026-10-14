# Портфолио — Нурлыбай Нурбол

Статический сайт на [Astro](https://astro.build), деплой на GitHub Pages через GitHub Actions.

## Команды

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # сборка в dist/
```

## Где править контент

- `src/data/profile.ts` — имя, контакты, услуги, стек, опыт, учебные проекты
- `src/data/projects.ts` — проекты и страницы кейсов (порядок в массиве = порядок на сайте)

Скриншоты: положите файлы в `public/projects/<slug>/` и добавьте в поле `images` проекта:

```ts
images: [{ src: 'projects/komek-desk/dashboard.png', alt: 'Дашборд аналитики', caption: 'Аналитика для руководства' }],
```

## Деплой

Каждый push в ветку `main` собирает сайт и публикует его (`.github/workflows/deploy.yml`).
В настройках репозитория: Settings → Pages → Source: **GitHub Actions**.

Если репозиторий называется не `nurbolitoo.github.io`, а, например, `portfolio`,
поменяйте в workflow `BASE_PATH: /portfolio` — тогда сайт будет по адресу `nurbolitoo.github.io/portfolio`.
