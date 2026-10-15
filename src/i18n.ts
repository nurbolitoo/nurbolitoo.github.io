import { withBase } from './lib/url';
import * as ruProfile from './data/profile';
import * as enProfile from './data/en/profile';
import { projects as ruProjects } from './data/projects';
import { projects as enProjects } from './data/en/projects';

export type Lang = 'ru' | 'en';
export const langs: Lang[] = ['ru', 'en'];

// Русская версия живёт в корне сайта, английская — под /en/
export function localePath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\//, '');
  return withBase(lang === 'en' ? `en/${clean}` : clean);
}

export const getProfile = (lang: Lang) => (lang === 'en' ? enProfile : ruProfile);
export const getProjects = (lang: Lang) => (lang === 'en' ? enProjects : ruProjects);

export const ui = {
  ru: {
    htmlLang: 'ru',
    ogLocale: 'ru_RU',
    navProjects: 'Проекты',
    navServices: 'Услуги',
    navExperience: 'Опыт',
    navContact: 'Связаться',
    homeAria: 'На главную',
    navAria: 'Основная навигация',
    themeAria: 'Сменить тему',
    langAria: 'Язык сайта',
    metaSuffix: 'Портфолио проектов и контакты для заказов.',
    seeProjects: 'Смотреть проекты',
    discuss: 'Обсудить задачу',
    projectsEyebrow: 'Проекты',
    projectsTitle: 'Системы, которые работают в продакшене',
    projectsLead:
      'Коммерческие проекты, которые я разрабатывал в команде и самостоятельно: ERP, маркетплейс, Service Desk. Названия заказчиков скрыты.',
    servicesEyebrow: 'Услуги',
    servicesTitle: 'Чем могу помочь',
    servicesLead:
      'Беру задачи целиком — от разбора процесса до запуска на сервере — или отдельные части: интеграцию, интерфейс, деплой.',
    stackEyebrow: 'Стек',
    stackTitle: 'Технологии',
    expEyebrow: 'Опыт и образование',
    expTitle: 'Путь',
    acadEyebrow: 'Учёба',
    acadTitle: 'Учебные проекты',
    acadLead: 'Дипломная работа и проекты, сделанные во время учёбы в Astana IT University.',
    readCase: 'Читать кейс →',
    contactEyebrow: 'Контакты',
    contactTitle: 'Есть задача? Напишите.',
    contactLead: 'Расскажите, что нужно автоматизировать или разработать, — отвечу и предложу, как это сделать.',
    phone: 'Телефон',
    writeWhatsapp: 'Написать в WhatsApp',
    downloadCv: 'Скачать резюме (PDF)',
    cvFile: 'resume/Nurlybay_Nurbol_CV_RU.pdf',
    caseSuffix: 'кейс',
    backAll: '← Все проекты',
    backAcademic: '← Учебные проекты',
    role: 'Роль',
    status: 'Статус',
    period: 'Период',
    link: 'Ссылка',
    screenshots: 'Скриншоты',
    toc: 'Содержание',
    problem: 'Задача',
    solution: 'Решение',
    features: 'Ключевые функции',
    challenges: 'Что было сложно',
    stack: 'Технологии',
    result: 'Результат',
    nextProject: 'Следующий проект',
    portfolio: 'Портфолио',
    commercialProjects: 'Коммерческие проекты →',
    notFoundTitle: 'Такой страницы нет',
    notFoundText: 'Страница не найдена',
    toHome: 'На главную',
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    navProjects: 'Projects',
    navServices: 'Services',
    navExperience: 'Experience',
    navContact: 'Contact',
    homeAria: 'Home',
    navAria: 'Main navigation',
    themeAria: 'Toggle theme',
    langAria: 'Site language',
    metaSuffix: 'Project portfolio and contacts for orders.',
    seeProjects: 'View projects',
    discuss: 'Discuss a project',
    projectsEyebrow: 'Projects',
    projectsTitle: 'Systems running in production',
    projectsLead:
      'Commercial projects I built in a team and on my own: ERP, a marketplace, a Service Desk. Client names are hidden.',
    servicesEyebrow: 'Services',
    servicesTitle: 'How I can help',
    servicesLead:
      'I take on whole projects — from analysing the process to launching on a server — or separate parts: an integration, an interface, deployment.',
    stackEyebrow: 'Stack',
    stackTitle: 'Technologies',
    expEyebrow: 'Experience and education',
    expTitle: 'Background',
    acadEyebrow: 'University',
    acadTitle: 'Academic projects',
    acadLead: 'My diploma project and other work done while studying at Astana IT University.',
    readCase: 'Read case study →',
    contactEyebrow: 'Contact',
    contactTitle: 'Have a project? Get in touch.',
    contactLead: 'Tell me what you need to automate or build — I’ll reply and suggest how to do it.',
    phone: 'Phone',
    writeWhatsapp: 'Message on WhatsApp',
    downloadCv: 'Download CV (PDF)',
    cvFile: 'resume/Nurlybay_Nurbol_CV_EN.pdf',
    caseSuffix: 'case study',
    backAll: '← All projects',
    backAcademic: '← Academic projects',
    role: 'Role',
    status: 'Status',
    period: 'Period',
    link: 'Link',
    screenshots: 'Screenshots',
    toc: 'Contents',
    problem: 'Problem',
    solution: 'Solution',
    features: 'Key features',
    challenges: 'Challenges',
    stack: 'Tech stack',
    result: 'Result',
    nextProject: 'Next project',
    portfolio: 'Portfolio',
    commercialProjects: 'Commercial projects →',
    notFoundTitle: 'This page doesn’t exist',
    notFoundText: 'Page not found',
    toHome: 'Go home',
  },
} as const;

export type UI = (typeof ui)[Lang];
