import type { Project } from '../projects';

// Английская версия кейсов. Слаги, картинки и цифры совпадают с русской версией.
export const projects: Project[] = [
  {
    slug: 'stroymarket',
    title: 'StroyMarket',
    category: 'Marketplace · AI · E-commerce',
    card: 'A building materials marketplace where an AI assistant replaces the catalog: the buyer describes the job in text, voice or a photo, and the assistant calculates materials, fills the cart and takes Kaspi payment right in the chat.',
    lead: 'A building materials marketplace for Kazakhstan. Instead of browsing a catalog, the buyer talks to an AI assistant: describes the job in text, voice or a photo, and the assistant calculates materials, picks products, places the order and takes payment via Kaspi in the chat. Several seller companies work on one platform, and the catalog syncs with their 1C.',
    status: 'Production environment with a real seller',
    role: 'Fullstack developer in a team',
    link: { href: 'https://stand.kenenai.com/kz/', label: 'stand.kenenai.com' },
    hue: 28,
    images: [
      {
        src: 'projects/stroymarket/chat.webp',
        alt: 'StroyMarket AI assistant chat: task input, suggestions, voice input and attachments',
        caption: 'AI ordering chat: the buyer describes the job in text, voice or a photo — the assistant calculates materials and places the order',
      },
      {
        src: 'projects/stroymarket/seller.webp',
        alt: 'A seller company storefront on the StroyMarket platform',
        caption: 'Seller storefront: own warehouse, delivery, payment by Kaspi QR or invoice, entry point to the assistant',
      },
      {
        src: 'projects/stroymarket/admin.webp',
        alt: 'StroyMarket admin panel: order queue with statuses',
        caption: 'Admin panel for staff and platform admins: orders, picking, shipping, documents, warehouse, purchasing, drivers',
      },
    ],
    metrics: [
      { value: '~97,000', label: 'lines of TypeScript' },
      { value: '17', label: 'domain modules' },
      { value: '~70', label: 'workflows' },
      { value: '114+', label: 'test files' },
      { value: '~20', label: 'AI agent tools' },
    ],
    cardTags: ['Medusa v2', 'Next.js 15', 'TypeScript', 'PostgreSQL', 'Gemini', 'Kaspi Pay', 'Redis'],
    problem: [
      'Buyers of building materials often don’t know what they need or how much («I want to tile a 6 m² bathroom»). An online store with filters doesn’t help them.',
      'Sellers keep their records in 1C and aren’t willing to duplicate the catalog on a website by hand.',
      'The whole operation is needed: order picking at the warehouse, delivery, closing documents, Kaspi payment.',
    ],
    solution: [
      'A chat-first marketplace: a conversational AI consultant instead of a catalog and cart, plus a full back office for sellers, pickers and drivers.',
      'The backend is built on Medusa v2: isolated domain modules, business logic in workflows with compensations, thin API routes. The storefront is a thin client: prices, stock, bonuses and limits are calculated on the server.',
    ],
    diagrams: [
      {
        type: 'flow',
        title: 'Buying in the chat',
        steps: ['Task as text, voice or photo', 'Materials calculated by norms', 'Real products picked', 'Cart and delivery', 'Order', 'Kaspi payment'],
      },
      {
        type: 'arch',
        title: 'Architecture',
        rows: [
          ['Next.js 15 storefront', '→', '*Medusa v2 API', '→', 'PostgreSQL 16 · Redis 7'],
          ['Medusa Admin · Flutter clients', '→', '*Medusa v2 API'],
          ['*Medusa v2', '↔', 'Seller’s 1C', '·', 'Kaspi Pay', '·', 'Google Gemini'],
          ['Cloudflare Tunnel', '→', 'Nginx (TLS)', '→', 'Docker Compose on a VPS'],
        ],
      },
    ],
    features: [
      {
        title: 'For buyers',
        items: [
          'AI assistant on Google Gemini with function calling: about 20 tools — product search, materials calculation by norms, cart management, delivery, checkout and payment, order status, documents, claims.',
          'Responses stream in (SSE), with a «Stop» button and a fallback to a regular request if the stream fails to open.',
          'Voice input (speech recognition via Gemini, ru/kk/en), photo and PDF attachments — for example, an estimate or a photo of the room.',
          'Materials calculator: calculation by a regulatory database with real products picked.',
          'Phone number login (OTP), personal account with orders, documents, reviews and chat history.',
          'Russian, Kazakh and English, light and dark themes, a custom token-based design system.',
        ],
      },
      {
        title: 'Multi-vendor',
        items: [
          'Several companies on one platform: each has its own storefront /t/<slug>, warehouse, sales channel and legal details on documents.',
          'Data isolation by publishable key and a role whitelist on the API.',
          'Roles: platform admin, company seller, picker, driver.',
        ],
      },
      {
        title: '1C integration',
        items: [
          'Periodic sync of products, stock and cost prices from the seller’s 1C (1C:Fresh HTTP services).',
          'Sale price = cost price × the company’s markup. The 1C password is stored encrypted.',
          'Automatic product categorization. Missing items are taken off the storefront but not deleted.',
        ],
        note: 'The 1C integration in this project was built by another developer on the team.',
      },
      {
        title: 'Back office',
        items: [
          'Order queue: confirmation, rescheduling, cancellation, order lifecycle with a pickup code.',
          'Picking tasks with automatic split by warehouse, shipping screen.',
          'Logistics: delivery slots, driver trips, rates.',
          'Purchasing: AI recognition of supplier invoices (PDF or photo → line items via Gemini) and goods receipt.',
          'Automatic PDF documents: invoice, waybill, completion certificate with continuous numbering.',
          'Product card and review moderation, disputes and claims, a bonus program with accrual, redemption and scheduled expiry.',
          'Customer scoring and credit limits for legal entities (behind a feature flag).',
        ],
      },
      {
        title: 'Payments',
        items: [
          'Custom Kaspi Pay payment provider on top of the Medusa payment core: QR and invoice, status polling, refunds.',
          'Kaspi mock client for tests.',
        ],
      },
    ],
    stack: [
      { group: 'Backend', items: ['Node.js 20', 'TypeScript', 'Medusa v2', 'Zod', 'cron jobs', 'event subscribers'] },
      { group: 'Data', items: ['PostgreSQL 16', 'Redis 7'] },
      { group: 'Storefront', items: ['Next.js 15 (App Router, RSC)', 'React 19', 'Tailwind CSS', 'Medusa JS SDK'] },
      { group: 'Admin and clients', items: ['Medusa Admin', 'Vite', '@medusajs/ui', 'TanStack Query', 'Flutter'] },
      { group: 'AI', items: ['Google Gemini (Flash Lite)', 'function calling', 'STT', 'document data extraction'] },
      { group: 'Integrations', items: ['Kaspi Pay', 'phone OTP', '1C:Fresh (built by another developer)'] },
      { group: 'Infrastructure', items: ['Docker Compose', 'Nginx', 'Cloudflare Tunnel', 'VPS'] },
      { group: 'Quality', items: ['Jest', 'ESLint', 'screenshot tests (headless Chrome)', 'assistant QA runs'] },
    ],
    challengesTitle: 'Architecture decisions',
    challenges: [
      { title: 'Modular architecture', text: 'Modules are isolated and connected only through links. Business logic lives in workflows with compensations, API routes stay thin.' },
      { title: 'Thin client', text: 'The storefront calculates nothing itself: prices, stock, bonuses and limits come from the backend.' },
      { title: 'Fail-closed multi-tenancy', text: 'The company is resolved only on the server. Any failure in the check denies access.' },
      { title: 'The prompt as «store canon»', text: 'The assistant’s system prompt is checked against the code. This reduced the number of facts the model made up; quality was measured with QA runs.' },
      { title: 'Feature flags instead of deletion', text: 'Postponed domains are switched off with flags rather than deleted. Every flag is covered by tests in both states.' },
      { title: 'Safe migrations', text: 'Deployment scripts back up the database before every migration.' },
    ],
    results: [
      'Production environment with HTTPS, a real seller works on the platform (~600 items).',
      '17 domain modules, ~70 workflows, ~25 event subscribers.',
      '114+ Jest test files: unit and integration tests for modules and workflows.',
      'UI screenshot tests in light and dark themes for every locale.',
    ],
  },
  {
    slug: 'xts',
    title: 'XTS — ERP for a telecom contractor',
    category: 'Enterprise · ERP · Integrations',
    card: 'An ERPNext/Frappe ERP for a contractor that builds and maintains mobile operators’ base stations. Orders run from automatic import out of the operator portal to work handover and payment: warehouse, purchasing, roles, notifications and a management dashboard.',
    lead: 'A corporate ERP system on ERPNext/Frappe for a contractor doing construction, installation and design work on the base stations of major Kazakhstan mobile operators. The system runs each order from receipt in the operator portal to work handover and payment: approval, site survey, purchasing, warehouse, subcontractors, acceptance, 1C integration and analytics for management.',
    status: 'In production',
    role: 'Fullstack developer and integrator in a team: development, rollout and production support',
    linkNote: 'Internal corporate system, login required',
    hue: 210,
    images: [
      {
        src: 'projects/xts/analytics.webp',
        alt: 'XTS Analytics: order cards by stage and a plan/actual table with gross profit and margin',
        caption: 'XTS Analytics: orders by stage, plan vs actual, materials, subcontractor and logistics costs, gross profit and margin. The orders in the screenshot are test data',
      },
      {
        src: 'projects/xts/sales.webp',
        alt: 'ERPNext «Sales» workspace: deal dynamics chart and section menu',
        caption: '«Sales» section: deal dynamics, services, orders, completion certificates, payment register and material requests',
      },
      {
        src: 'projects/xts/home.webp',
        alt: 'ERP main menu: shortcuts and accounting, warehouse and CRM sections',
        caption: 'Main menu: accounting, purchasing, sales, warehouse, CRM and projects modules in one system',
      },
    ],
    metrics: [
      { value: 'Thousands', label: 'of orders processed' },
      { value: '2', label: 'mobile operators' },
      { value: '~10', label: 'roles in the process' },
      { value: '0', label: 'manual order transfers' },
    ],
    cardTags: ['Python', 'Frappe / ERPNext', 'React 19', 'TypeScript', 'REST API', 'JWT'],
    problem: [
      'Orders from operators came through their external portals and were transferred by hand.',
      'There was no single chain «order → survey → materials → execution → handover → payment» with clear roles and owners.',
      'Warehouse, purchasing and accounting (1C) lived separately from orders.',
      'Management had no overall picture of order statuses, regions and finances.',
    ],
    solution: [
      'The whole order cycle moved into one ERPNext/Frappe system: orders are imported from operator portals automatically, then go through a multi-stage workflow with roles and notifications, linked to the warehouse, purchasing and 1C.',
      'A separate React app with an order funnel and a financial dashboard was built for management.',
    ],
    diagrams: [
      {
        type: 'flow',
        title: 'Order workflow',
        steps: ['Initiation', 'Technical director approval', 'Site survey', 'Materials check', 'Execution', 'Acceptance', 'Closing'],
        note: 'Two scenarios: «fast track» and the full cycle (design → purchasing → warehouse → accounting → subcontractor → write-off). Separate branches for dismantling and design, partial closing is possible («80% done»).',
      },
      {
        type: 'arch',
        title: 'Integrations',
        rows: [
          ['Operator portals (Strapi REST API)', '→ JWT', '*ERPNext / Frappe', '↔', '1C:Fresh'],
          ['*ERPNext / Frappe', '→ API', 'React dashboard', '←', 'Google Sheets'],
          ['MySQL database of fiber-optic projects', '→', 'React dashboard'],
        ],
      },
    ],
    features: [
      {
        title: 'Operator portal integration',
        items: [
          'Scheduled automatic import of both operators’ orders (Frappe scheduler) via Strapi REST API.',
          'JWT authorization with automatic renewal of a rotating refresh token.',
          'Mapping of regions, contracts and price lists; work items become ERP products.',
          'Batch processing without duplicates (orders are matched by external number), error logging.',
        ],
      },
      {
        title: 'Order business process',
        items: [
          'Multi-stage workflow from initiation to closing, including partial closing.',
          '«Fast track» and full-cycle scenarios, separate branches for dismantling and design.',
          'About 10 roles (technical director, regional manager, engineer, buyer, storekeeper, accounting, subcontractors and more): document permissions, warehouse and region restrictions, reduced interfaces for external subcontractors.',
          'Notifications and task assignment on every transition, with a direct link to the order.',
        ],
      },
      {
        title: 'Warehouse and purchasing',
        items: [
          '«Materials check» module: stock check, then a purchase request or issue from the warehouse. Items that are out of stock cannot be issued.',
          'Simplified goods receipt forms for storekeepers, warehouse stock reports.',
          'Material list upload from Excel and PDF.',
        ],
      },
      {
        title: '1C:Fresh integration',
        items: ['Exchange via HTTP services with an OpenAPI spec: products, suppliers, receipts and write-offs, e-invoice (ESF) numbers.'],
        note: 'The 1C integration in this project was built by another developer on the team.',
      },
      {
        title: 'Analytics dashboard (SPA)',
        items: [
          'React 19 + TypeScript + Vite, Recharts charts, Excel export (ExcelJS, SheetJS).',
          'Kanban order funnel by stage: initiation, survey, execution, acceptance and handover, completed, plus a separate counter for loss-making orders.',
          'Per-order table: plan and actual, materials, subcontractor and logistics costs, penalties, gross profit and margin, payment, totals for the selection.',
          'Filters by client, region, contract, year and month; order card: line items, logistics, payments, costs.',
          'Separate tabs: payment request register and fiber-optic projects analytics.',
          'P&L financial dashboard by client: revenue, direct costs, payroll, taxes, margin. Data comes from the Google Sheets API.',
          'Backend — whitelisted Python API endpoints inside Frappe; an external MySQL database of fiber-optic projects is connected separately.',
        ],
      },
      {
        title: 'ERPNext modules',
        items: [
          'In one system: accounting, purchasing, sales, delivery, warehouse, assets, projects, support.',
          'CRM: leads, customer groups, territories, customer and supplier records.',
          'Role-based workspaces: shortcuts, open document counters and charts right on the section’s home page.',
        ],
      },
      {
        title: 'Reports and documentation',
        items: [
          'SQL Query Reports: order statuses, equipment by warehouse.',
          'DOCX completion certificate generation, payment register export.',
          'Public /docs page with instructions for every role.',
        ],
      },
    ],
    stack: [
      { group: 'Backend', items: ['Python', 'Frappe Framework', 'ERPNext', 'Jinja', 'MariaDB / MySQL'] },
      { group: 'Frontend', items: ['JavaScript (client scripts)', 'React 19', 'TypeScript', 'Vite', 'Recharts', 'ExcelJS'] },
      { group: 'Integrations', items: ['REST API', 'JWT', 'OpenAPI', 'Google Sheets API', '1C:Fresh (built by another developer)'] },
      { group: 'Infrastructure', items: ['Linux', 'Nginx', 'Gunicorn', 'Supervisor'] },
    ],
    challengesTitle: 'Engineering details',
    challenges: [
      { title: 'Rotating refresh token', text: 'The operator portal issues a new refresh token on every renewal. The import renews authorization by itself and keeps running on schedule.' },
      { title: 'Import without duplicates', text: 'Orders are matched by external number, so a repeated run creates no copies. Processing runs in batches, errors are logged.' },
      { title: 'Stock never goes negative', text: 'Materials that are out of stock cannot be issued: the system routes them to a purchase request.' },
      { title: 'External subcontractors', text: 'Subcontractors get reduced interfaces and warehouse and region restrictions.' },
    ],
    results: [
      'The system is in production and used daily by staff of several regional branches (Almaty, Astana, Shymkent and others) and external subcontractors.',
      'Thousands of orders from two mobile operators have gone through it.',
      'Manual transfer of orders from operator portals is gone.',
      'The whole order cycle runs in one system with transparent statuses and owners.',
      'Management sees statuses and finances in real time on the dashboard.',
    ],
  },
  {
    slug: 'dc-control',
    title: 'Ploshchadka — data center construction management',
    category: 'Construction Tech · ERP · IoT',
    card: 'A web system for a contractor building a data center: timesheets from Hikvision face recognition (FaceID) terminals, work orders, a materials warehouse with consumption norms, equipment tracking and reports. Mobile-first interface for foremen on site.',
    lead: 'A web system for a contractor building a data center. It tracks staff, work orders, work acceptance, materials and equipment. Attendance is recorded automatically: Hikvision face recognition (FaceID) terminals stand at the entrance — the device recognizes the employee’s face and logs the pass without badges or cards.',
    status: 'Running on a real construction site',
    role: 'Fullstack developer in a team',
    linkNote: 'Internal corporate system, login required',
    hue: 152,
    images: [
      {
        src: 'projects/dc-control/desk.webp',
        alt: 'DC Control admin on Frappe: employees, work orders, timesheet, explanation notes, reports and reference data',
        caption: 'Home page and admin: employees, work orders, timesheet, explanation notes, sites, reports, reference data and materials warehouse',
      },
      {
        src: 'projects/dc-control/timesheet.webp',
        alt: 'Site staff portal: monthly timesheet from FaceID check-ins with discrepancies',
        caption: 'Separate portal for site staff. Timesheet from FaceID check-ins: attendance, discrepancies, leaving without a check-out; click a day to see arrival and departure times. Employee names are hidden',
      },
      {
        src: 'projects/dc-control/reports.webp',
        alt: 'Reports on all construction processes with tabs and Excel export',
        caption: 'Reports on all processes: output, costs, work orders, attendance, reconciliation, crews, materials, overconsumption, inventory, purchasing, equipment',
      },
    ],
    metrics: [
      { value: '655', label: 'employees in the database' },
      { value: '1,898', label: 'timesheet records' },
      { value: '~7,000', label: 'lines of Python' },
      { value: '~11,500', label: 'lines of Vue / JS' },
      { value: '27', label: 'database entities (doctypes)' },
      { value: '13', label: 'screens' },
      { value: '110+', label: 'commits' },
    ],
    cardTags: ['Python', 'Frappe v15', 'Vue 3', 'PrimeVue', 'MariaDB', 'Hikvision FaceID', 'Redis'],
    problem: [
      'A construction contractor in Kazakhstan, with several subcontractor companies working on the site.',
      'Timesheets, work orders and the warehouse were kept on paper and in Excel.',
      'Management couldn’t see who actually came to work, what was done and where materials went.',
    ],
    solution: [
      'A Frappe Framework v15 backend and a custom Vue 3 SPA. The interface is built around each role’s tasks rather than database tables: one main action per screen.',
      'Mobile-first: the interface works on a 390px-wide phone, because the foreman works on site.',
    ],
    diagrams: [
      {
        type: 'flow',
        title: 'Work order',
        steps: ['Draft', 'Issued', 'Accepted by PTO', 'In progress', 'Under review', 'Done'],
        note: 'The site engineer (PTO) can reject a work order. The crew is picked from staff, drawings are attached, and the print form is ready to sign.',
      },
      {
        type: 'flow',
        title: 'Materials flow',
        steps: ['Purchasing', 'Warehouse', 'Issue for a work order', 'Write-off for accepted work'],
        note: 'Norm = volume × rate from the work types reference. Issuing above the norm requires a justification.',
      },
      {
        type: 'arch',
        title: 'Integrations',
        rows: [
          ['Hikvision face recognition terminals (in, out)', '→ ISAPI', 'Agent on the site PC', '→ HTTPS', '*Frappe server'],
          ['Each company’s 1C:Fresh', '→ nightly', '*Frappe server', '→', 'Vue SPA'],
        ],
        note: 'The terminals sit in the site’s local network, so the agent pushes events itself over outbound HTTPS.',
      },
    ],
    features: [
      {
        title: 'Timesheet and discipline',
        items: [
          'A Hikvision FaceID terminal at the entrance recognizes the employee’s face, and every pass lands in the timesheet automatically.',
          'The system detects late arrivals, absences and leaving without a check-out.',
          'A discrepancy creates an explanation note: the foreman writes an explanation, the site engineer (PTO) reviews it.',
          'Monthly summary: days present, absences, discrepancies, arrivals and departures without a FaceID check. Click a day to see arrival and departure times and hours worked.',
          'A separate list of unmatched FaceID events.',
        ],
      },
      {
        title: 'Work orders',
        items: [
          'Full cycle: draft → issued → accepted or rejected by PTO → in progress → under review → done.',
          'Crew from staff, attached drawings, a print form for signing.',
        ],
      },
      {
        title: 'Materials warehouse',
        items: [
          'Chain «Purchasing → Warehouse → Issue for a work order → Write-off for accepted work».',
          'Consumption norms from the work types reference; overconsumption is highlighted, issuing above the norm only with a justification.',
          'Stock never goes negative: postings run in turn with row locking (SELECT … FOR UPDATE).',
          'Transfers between sites, stocktaking, printed certificates.',
        ],
      },
      {
        title: 'Purchase approval',
        items: [
          'Request limit = norms of active work orders − warehouse stock − already ordered.',
          'Stock and pending orders are allocated to work orders in turn, following MRP pegging.',
          'A manager approves or rejects the request.',
        ],
      },
      {
        title: 'Equipment',
        items: ['Item-level tracking by inventory number: issue, transfer, repair, relocation, write-off. The movement history is stored and immutable.'],
      },
      {
        title: 'Reports and permissions',
        items: [
          'Site cost, materials costs, crew discipline: an 11-sheet workbook with Excel export.',
          'Sheets: output, costs, work orders, attendance, reconciliation, crews, materials, overconsumption, inventory, purchasing, equipment. Period — month, quarter or custom dates.',
          'Multi-company: a user sees only their companies’ sites.',
          'Roles: Foreman, Site engineer (PTO), Storekeeper, Manager.',
        ],
      },
    ],
    stack: [
      { group: 'Backend', items: ['Python 3.11', 'Frappe Framework v15', 'MariaDB', 'Redis', 'scheduler', 'REST API', 'openpyxl'] },
      { group: 'Frontend', items: ['Vue 3', 'Vue Router', 'PrimeVue 4', 'Vite'] },
      { group: 'Integrations', items: ['Hikvision FaceID (ISAPI)', 'Python agent', 'PowerShell', '1C:Fresh (built by another developer)'] },
      { group: 'Infrastructure', items: ['Linux', 'Caddy', 'bench / honcho'] },
      { group: 'Quality', items: ['Playwright', 'ruff', 'eslint', 'prettier', 'pre-commit'] },
    ],
    challenges: [
      { title: 'Terminals aren’t reachable from the internet', text: 'Instead of inbound connections — a push agent over outbound HTTPS, which the site firewall almost always allows. One-click Windows install (setup.cmd → PowerShell → Task Scheduler as SYSTEM).' },
      { title: 'The PC is off at night', text: 'Events arrive in a morning batch. The agent delivers the backlog without losses, and timesheet reconciliation recalculates days whose events arrived late. If the agent stops responding, an alert is sent.' },
      { title: 'Concurrent postings', text: 'Protecting the warehouse from negative stock: row-level locking and an immutable stock ledger.' },
      { title: 'Shortage across work orders', text: 'Allocation by priority: orders accepted by PTO go first, then by work date. Without it, two work orders would both see «enough» for the same stock.' },
    ],
    results: [
      'The system runs on a real construction site.',
      'Attendance comes from FaceID passes, not a paper timesheet.',
      'Work orders, warehouse, equipment and timesheets live in one system instead of paper and Excel.',
    ],
  },
  {
    slug: 'komek-desk',
    title: 'Komek Desk',
    category: 'Service Desk · ITSM · Data Viz',
    card: 'A corporate Service Desk for an industrial company with 12 branches: a simple React ticket portal on top of GLPI 11 and analytics for management on resolution speed and satisfaction.',
    lead: 'An IT support system for a distributed industrial company: employees of 12 branches submit tickets, IT specialists take them on, and management sees analytics on resolution speed and satisfaction. A custom React portal on top of GLPI 11, deployed to production with Docker.',
    status: 'In production',
    role: 'Sole developer: frontend, GLPI integration, infrastructure, CI/CD and deployment',
    link: { href: 'https://komekdesk.kz', label: 'komekdesk.kz' },
    hue: 265,
    cover: 'projects/komek-desk/analytics.webp',
    images: [
      {
        src: 'projects/komek-desk/login.webp',
        alt: 'Komek Desk support portal login page',
        caption: 'Login with a corporate account',
      },
      {
        src: 'projects/komek-desk/tickets.webp',
        alt: 'Home page: ticket counters by status, branch folders and ticket list',
        caption: 'All tickets: counters by status, branch folders, filters by status, urgency and period',
      },
      {
        src: 'projects/komek-desk/new-ticket.webp',
        alt: 'New ticket form: type, folder, category, subject, description, urgency',
        caption: 'New ticket: type, folder (branch), category, subject, description, urgency',
      },
      {
        src: 'projects/komek-desk/analytics.webp',
        alt: 'Analytics: KPIs, tickets received and resolved per day, resolution speed',
        caption: 'Analytics: tickets received and resolved per day, response and resolution time, resolution speed distribution',
      },
      {
        src: 'projects/komek-desk/analytics-2.webp',
        alt: 'Analytics: tickets by folder and category, assignees, open tickets',
        caption: 'Breakdown by folder and category, assignee performance, oldest open tickets. Names are hidden',
      },
    ],
    metrics: [
      { value: '12', label: 'branches' },
      { value: '1–5', label: 'CSAT rating after closing' },
      { value: '14 days', label: 'daily backup retention' },
    ],
    cardTags: ['React 19', 'TypeScript', 'Ant Design', 'GLPI 11', 'Docker', 'Nginx', 'GitLab CI'],
    problem: [
      'A company with 12 geographically spread divisions (administrations, line production sites, compressor stations) needed a single channel for IT support requests instead of phone calls and messages.',
      'The stock GLPI interface is complex and cluttered for regular employees.',
    ],
    solution: [
      'A simple, modern portal was built on top of GLPI. GLPI serves as a reliable backend: ticket storage, users, permissions, attachments.',
      'Integration is only through the REST API, with no changes to the GLPI core, so GLPI can be upgraded independently of the portal.',
    ],
    diagrams: [
      {
        type: 'arch',
        title: 'Architecture',
        rows: [
          ['Browser', '→', '*Nginx', '→ /', 'React portal (static)'],
          ['*Nginx', '→ /api/apirest.php', 'GLPI REST API', '→', 'MariaDB'],
          ['*Nginx', '→ separate subdomain', 'GLPI admin panel'],
        ],
      },
      {
        type: 'flow',
        title: 'CI/CD',
        steps: ['Type-check', 'Build', 'Manual deploy to production'],
        note: 'GitLab CI. One-command deploy: git pull → build → restart → reload nginx.',
      },
    ],
    features: [
      {
        title: 'Tickets',
        items: [
          'Login with a corporate account. An employee sees only their own tickets, support staff (Technician / Supervisor / Admin) see all.',
          'Creating a ticket: type, folder (branch), category, urgency, subject, description, attachments.',
          'Dashboard with search and filters by status, branch, priority and date.',
          'Ticket card: conversation, files, assignee, solution. One specialist takes a ticket, and only they change its status.',
          'Quality rating (CSAT): after closing, the user gives a 1–5 rating and writes feedback.',
        ],
      },
      {
        title: 'Analytics for management',
        items: [
          'KPI tiles with change vs the previous period: received, resolved, open now (with a warning about unassigned tickets), median response and resolution time, average CSAT.',
          'Tickets received and resolved per day, resolution speed distribution (under 1 h, 1–4 h, 4–24 h, 1–3 days, 3+ days), breakdown by branch and category with click-to-filter.',
          'Workload heatmap «day of week × hour», specialist performance table, open tickets list — oldest first.',
          'Period selection, every chart has a table view. Metric calculations live in a module of pure functions.',
        ],
      },
      {
        title: 'Interface',
        items: [
          'Light and dark themes. Chart colors are distinguishable with color blindness and contrast-checked in both themes.',
          'Fully in Russian, with correct plural forms («1 заявка / 2 заявки / 5 заявок»).',
        ],
      },
    ],
    stack: [
      { group: 'Frontend', items: ['React 19', 'TypeScript', 'Vite', 'Ant Design 6', 'Zustand', 'React Router 7', 'Recharts', 'Axios', 'Day.js'] },
      { group: 'Backend', items: ['GLPI 11 (REST API)', 'MariaDB'] },
      { group: 'Infrastructure', items: ['Docker Compose', 'Nginx', "Let's Encrypt / Certbot", 'Ubuntu VPS'] },
      { group: 'CI/CD and scripts', items: ['GitLab CI', 'Bash', 'Node.js'] },
    ],
    challengesTitle: 'Engineering decisions',
    challenges: [
      { title: 'GLPI without a fork', text: 'REST API only, the GLPI core is untouched — it can be upgraded independently of the portal.' },
      { title: 'Safe operations', text: 'GLPI data in a named Docker volume, daily database and file backups kept for 14 days, a documented restore and server migration procedure.' },
      { title: 'Login protection', text: 'Rate limiting on login and API auth against password brute-forcing, HTTPS, admin panel on a separate subdomain.' },
      { title: 'Typing and documentation', text: 'Strict TypeScript with type checks in CI. Team documentation: operations, fresh install, GLPI setup. A Node.js script for bulk creation of branches and accounts via the API.' },
    ],
    results: [
      'The system is in production and used by the company.',
      'Employees of 12 branches submit tickets through a single portal.',
      'Management sees resolution speed, specialist workload and employee satisfaction in the analytics.',
    ],
  },
  {
    slug: 'gymflow',
    title: 'GymFlow — nutrition and workouts',
    kind: 'academic',
    device: 'phone',
    category: 'Mobile · Flutter · Diploma project',
    card: 'A mobile app: meal tracking with calories and macros, and a personal weekly workout plan for the user’s goal.',
    lead: 'A diploma project at Astana IT University, built together with a partner. The Flutter mobile app combines nutrition and training: the user sets a goal and body parameters, logs meals, and the app calculates calories, protein, fat and carbs and builds a weekly workout plan.',
    status: 'Diploma project, Astana IT University',
    role: 'Developer, built together with a partner',
    hue: 280,
    images: [
      { src: 'projects/gymflow/onboarding.webp', alt: 'GymFlow start screen', caption: 'Start screen' },
      { src: 'projects/gymflow/login.webp', alt: 'Email and password login', caption: 'Email and password login' },
      { src: 'projects/gymflow/goal.webp', alt: 'Choosing a goal during sign-up', caption: 'Sign-up, step 1: goal' },
      { src: 'projects/gymflow/metrics.webp', alt: 'Entering body parameters during sign-up', caption: 'Step 2: body parameters for calories and macros' },
      { src: 'projects/gymflow/home.webp', alt: 'Home screen: today’s nutrition and schedule', caption: 'Home: today’s nutrition and schedule' },
      { src: 'projects/gymflow/plan.webp', alt: 'Weekly workout plan', caption: 'Weekly workout plan' },
      { src: 'projects/gymflow/workout.webp', alt: 'Workout mode: exercise with sets and reps', caption: 'Workout mode' },
      { src: 'projects/gymflow/stats.webp', alt: 'Nutrition stats: calories and macronutrients', caption: 'Nutrition stats' },
      { src: 'projects/gymflow/meals.webp', alt: 'Meal history with photos, calories and macros', caption: 'Meal history with calories and macros' },
      { src: 'projects/gymflow/settings.webp', alt: 'Profile settings', caption: 'Profile settings' },
    ],
    metrics: [
      { value: '3', label: 'goals: lose weight, maintain, gain muscle' },
      { value: '3', label: 'onboarding steps' },
      { value: '2–4', label: 'workouts per week in the plan' },
    ],
    cardTags: ['Flutter', 'Dart', 'Android'],
    problem: [
      'Build one app where the user both tracks nutrition and trains to a plan.',
      'Calculate calories, protein, fat and carbs for every meal.',
      'Fit the workout plan to the goal, activity level and number of training days.',
    ],
    solution: [
      'During sign-up the app asks for a goal and body parameters: height, weight, age, sex, activity level and number of training days. These are used to estimate calorie and macro targets and build the workout plan.',
      'The home screen shows today’s nutrition and the workout schedule; the weekly plan, stats and meal history are separate screens.',
    ],
    diagrams: [
      {
        type: 'flow',
        title: 'User journey',
        steps: ['Sign-up', 'Goal', 'Body parameters', 'Calorie and macro targets', 'Weekly workout plan', 'Meal tracking and stats'],
      },
    ],
    features: [
      {
        title: 'Onboarding',
        items: [
          'Goal: lose weight, maintain weight or gain muscle. It can be changed in settings.',
          'Parameters: height, weight, age, sex, activity level, 2–4 training days per week — used to estimate calories and macros.',
          'Email and password sign-up and login, password recovery.',
        ],
      },
      {
        title: 'Nutrition',
        items: [
          'Adding a meal with a photo: calories, protein, carbs and fat are calculated for the dish.',
          'Meal history with photos, time, calories and macros.',
          'Stats: number of saved meals, average calories, total calories, protein, carbs and fat.',
        ],
      },
      {
        title: 'Workouts',
        items: [
          'Weekly plan with day selection; the plan can be regenerated.',
          'Each session: time, muscle group, description and exercise list.',
          'Workout mode: exercise by exercise, sets × reps, technique illustration.',
        ],
      },
      {
        title: 'Profile',
        items: ['Name, avatar, goal, sex, activity level and workouts per week can be changed in settings.'],
      },
    ],
    stack: [{ group: 'Mobile app', items: ['Flutter', 'Dart', 'Android'] }],
    challenges: [],
    results: [
      'Diploma project at Astana IT University.',
      'A working app: onboarding, meal tracking with calories and macros, stats, weekly plan and workout mode.',
    ],
  },
];
