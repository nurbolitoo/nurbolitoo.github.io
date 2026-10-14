import { profile as ru } from '../profile';

export const profile = {
  name: 'Nurlybay Nurbol',
  role: 'Fullstack Developer',
  focus: 'Websites of any complexity, ERP/CRM systems and integrations for business',
  location: 'Astana, Kazakhstan',
  available: 'Open to freelance projects and job offers',
  intro:
    'I build websites of any scale — from a landing page or business card site to an online store or a complex web system. I implement ERP and CRM on Frappe/ERPNext, connect payment systems, face recognition terminals and a client’s existing 1C. I take care of the backend, the interface, deployment and server support.',
  contacts: ru.contacts,
  facts: [
    { value: '4+', label: 'commercial systems in production' },
    { value: '1000+', label: 'orders processed by the XTS ERP' },
    { value: '12', label: 'branches on one Service Desk' },
    { value: '~97k', label: 'lines of TypeScript in the AI marketplace' },
  ],
};

export const services = [
  {
    title: 'Websites of any complexity',
    text: 'Landing pages, business card sites, corporate websites, online stores and web apps with user accounts — from the first mockup to launch on your domain.',
  },
  {
    title: 'ERP and CRM on Frappe / ERPNext',
    text: 'Customers and deals, orders, warehouse, purchasing, staged approvals, roles and permissions, reports and print formats tailored to your company’s processes.',
  },
  {
    title: 'Integrations',
    text: 'External REST APIs, Kaspi Pay payments, Google Sheets, AI assistants. Connecting to the 1C you already run through its HTTP services.',
  },
  {
    title: 'FaceID time tracking',
    text: 'Hikvision face recognition terminals: an employee walks past the device at the entrance, the check-in lands in the timesheet automatically, late arrivals and absences are visible right away.',
  },
  {
    title: 'Web apps and dashboards',
    text: 'Role-based work interfaces in React, Vue and Next.js, analytics and charts, Excel export, comfortable on a phone.',
  },
  {
    title: 'Deployment and support',
    text: 'Linux servers, Docker, Nginx/Caddy, HTTPS, CI/CD, daily backups, monitoring with Grafana and Prometheus.',
  },
];

export const skills = [
  { group: 'Backend', items: ['Python', 'Frappe / ERPNext', 'Node.js', 'TypeScript', 'Medusa v2', 'Django', 'REST API'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Vue 3', 'Vite', 'Ant Design', 'PrimeVue', 'Recharts', 'Flutter'] },
  { group: 'Databases', items: ['PostgreSQL', 'MariaDB / MySQL', 'Redis', 'MongoDB'] },
  { group: 'Integrations', items: ['Kaspi Pay', 'Hikvision FaceID (ISAPI)', 'GLPI API', 'Google Gemini', 'JWT / OpenAPI'] },
  { group: 'Infrastructure', items: ['Linux', 'Docker', 'Nginx', 'Caddy', 'GitLab CI', 'Cloudflare Tunnel'] },
  { group: 'Observability', items: ['Grafana', 'Prometheus'] },
];

export const experience = [
  {
    period: '2026 — present',
    title: 'Backend Developer',
    place: 'ABS LAB LLP, Astana',
    items: [
      'Software development company, resident of the Astana Hub tech park.',
      'Backend development of the company’s commercial projects.',
    ],
  },
  {
    period: '2025',
    title: 'Intern',
    place: 'NITEC, Communications Department',
    items: [
      'Built and configured Grafana dashboards for real-time network monitoring.',
      'Wrote Python parsers for Juniper routers to collect operational metrics.',
      'Helped improve network observability and performance monitoring.',
    ],
  },
  {
    period: '2023 – 2026',
    title: 'Bachelor’s degree, Software Development',
    place: 'Astana IT University',
    items: ['Data structures, algorithms, databases, web technologies, machine learning.'],
  },
];

export const academic = [
  {
    title: 'Kazakhstan history learning website',
    text: 'A university web project for learning the history of Kazakhstan.',
    tags: ['Node.js', 'Django', 'HTML/CSS'],
  },
  {
    title: 'Book recommendation system',
    text: 'A TensorFlow neural network trained on a book dataset: recommends books based on the ones a user picks.',
    tags: ['Python', 'TensorFlow'],
  },
];
