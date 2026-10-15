export const profile = {
  name: 'Нурлыбай Нурбол',
  role: 'Fullstack-разработчик',
  focus: 'Сайты разной сложности, ERP/CRM-системы и интеграции для бизнеса',
  location: 'Астана, Казахстан',
  available: 'Открыт к фриланс-проектам и предложениям о работе',
  intro:
    'Делаю сайты любого уровня — от лендинга и сайта-визитки до интернет-магазина и сложной веб-системы. Внедряю ERP и CRM на Frappe/ERPNext, подключаю платёжные системы, терминалы распознавания лиц и уже работающую у заказчика 1С. Беру на себя бэкенд, интерфейс, деплой и поддержку на сервере.',
  contacts: {
    email: 'nurlybaynurbol@gmail.com',
    phone: '+7 707 712 64 26',
    phoneHref: 'tel:+77077126426',
    whatsapp: 'https://wa.me/77077126426',
    github: 'https://github.com/nurbolitoo',
    githubLabel: 'github.com/nurbolitoo',
    gitlab: 'https://gitlab.com/nurbolitoo',
    gitlabLabel: 'gitlab.com/nurbolitoo',
  },
  facts: [
    { value: '4+', label: 'коммерческие системы в продакшене' },
    { value: '1000+', label: 'заказов прошли через ERP-систему XTS' },
    { value: '12', label: 'филиалов работают в одном Service Desk' },
    { value: '~97 тыс.', label: 'строк TypeScript в маркетплейсе с ИИ' },
  ],
};

export const services = [
  {
    title: 'Сайты разной сложности',
    text: 'Лендинги, сайты-визитки, корпоративные сайты, интернет-магазины и веб-приложения с личным кабинетом — от первого макета до публикации на вашем домене.',
  },
  {
    title: 'ERP и CRM на Frappe / ERPNext',
    text: 'Учёт клиентов и сделок, заказы, склад, закуп, согласования по этапам, роли и права, отчёты и печатные формы под процессы вашей компании.',
  },
  {
    title: 'Интеграции',
    text: 'Внешние REST API, оплата Kaspi Pay, Google Sheets, ИИ-ассистенты. Подключение к уже работающей у вас 1С через её HTTP-сервисы.',
  },
  {
    title: 'Учёт рабочего времени по FaceID',
    text: 'Подключение терминалов Hikvision с распознаванием лиц: сотрудник проходит мимо устройства на входе, отметка сама попадает в табель, опоздания и неявки видны сразу.',
  },
  {
    title: 'Веб-приложения и дашборды',
    text: 'Рабочие интерфейсы на React, Vue и Next.js под каждую роль, аналитика и графики, экспорт в Excel, удобство на телефоне.',
  },
  {
    title: 'Деплой и поддержка',
    text: 'Сервер на Linux, Docker, Nginx/Caddy, HTTPS, CI/CD, ежедневные бэкапы, мониторинг в Grafana и Prometheus.',
  },
];

export const skills = [
  { group: 'Backend', items: ['Python', 'Frappe / ERPNext', 'Node.js', 'TypeScript', 'Medusa v2', 'Django', 'REST API'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Vue 3', 'Vite', 'Ant Design', 'PrimeVue', 'Recharts', 'Flutter'] },
  { group: 'Базы данных', items: ['PostgreSQL', 'MariaDB / MySQL', 'Redis', 'MongoDB'] },
  { group: 'Интеграции', items: ['Kaspi Pay', 'Hikvision FaceID (ISAPI)', 'GLPI API', 'Google Gemini', 'JWT / OpenAPI'] },
  { group: 'Инфраструктура', items: ['Linux', 'Docker', 'Nginx', 'Caddy', 'GitLab CI', 'Cloudflare Tunnel'] },
  { group: 'Наблюдаемость', items: ['Grafana', 'Prometheus'] },
];

export const experience = [
  {
    period: 'Апрель 2026 — сейчас',
    title: 'Backend-разработчик',
    place: 'ТОО «ABS LAB», Астана · участник технопарка Astana Hub',
    items: [
      'Три коммерческие системы в продакшене: СтройМаркет (основной разработчик), XTS и DC Control (в команде).',
      'Бэкенд на Python и TypeScript, интеграции с внешними API, платёжными системами и оборудованием, деплой и поддержка на серверах.',
    ],
  },
  {
    period: '2026',
    title: 'Fullstack-разработчик, фриланс',
    place: 'Komek Desk · отдельный заказчик',
    items: [
      'Единственный разработчик Service Desk для промышленного предприятия с 12 филиалами: портал на React поверх GLPI, аналитика, инфраструктура, CI/CD и деплой.',
    ],
  },
  {
    period: '2025',
    title: 'Стажёр',
    place: 'NITEC, Департамент организации связи',
    items: [
      'Разрабатывал и настраивал дашборды в Grafana для мониторинга сети в реальном времени.',
      'Писал парсеры на Python для маршрутизаторов Juniper, чтобы собирать эксплуатационные метрики.',
      'Участвовал в улучшении наблюдаемости и мониторинга производительности сети.',
    ],
  },
  {
    period: '2023 – 2026',
    title: 'Бакалавриат, Software Development',
    place: 'Astana IT University',
    items: ['Структуры данных, алгоритмы, базы данных, веб-технологии, машинное обучение.'],
  },
];

export const academic = [
  {
    title: 'Сайт для изучения истории Казахстана',
    text: 'Учебный веб-проект для изучения истории Казахстана.',
    tags: ['Node.js', 'Django', 'HTML/CSS'],
  },
  {
    title: 'Система рекомендаций книг',
    text: 'Нейросетевая модель на TensorFlow, обученная на датасете книг: рекомендует книги на основе выбранных пользователем.',
    tags: ['Python', 'TensorFlow'],
  },
];
