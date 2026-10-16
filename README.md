# Portfolio — Nurlybay Nurbol

Full-stack developer: web apps, ERP/CRM on Frappe/ERPNext, integrations.

**Live site:** [nurbolitoo.github.io](https://nurbolitoo.github.io) ·
**Upwork:** [Nurbol Nurlybay](https://www.upwork.com/freelancers/~01b9fffbe0115f9d36) ·
**LinkedIn:** [profile](https://www.linkedin.com/in/%D0%BD%D1%83%D1%80%D0%B1%D0%BE%D0%BB-%D0%BD%D1%83%D1%80%D0%BB%D1%8B%D0%B1%D0%B0%D0%B9-607a352aa/)

A static site built with [Astro](https://astro.build), deployed to GitHub Pages via GitHub Actions.
Available in Russian (site root) and English (`/en/`).

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # build into dist/
```

## Where to edit content

- `src/data/profile.ts`: name, contacts, services, skills, experience, academic projects (Russian)
- `src/data/projects.ts`: projects and case study pages (array order = order on the site)
- `src/data/en/`: the same files for the English version
- `src/i18n.ts`: interface strings for both languages
- `resume/`: CV sources (HTML); the PDFs served by the site live in `public/resume/`

Screenshots: put the files into `public/projects/<slug>/` and add them to the project's `images` field:

```ts
images: [{ src: 'projects/komek-desk/dashboard.png', alt: 'Analytics dashboard', caption: 'Analytics for management' }],
```

## Deployment

Every push to `main` builds and publishes the site (`.github/workflows/deploy.yml`).
In the repository settings: Settings → Pages → Source: **GitHub Actions**.

If the repository is not named `nurbolitoo.github.io` but, for example, `portfolio`,
set `BASE_PATH: /portfolio` in the workflow, and the site will be served at `nurbolitoo.github.io/portfolio`.
