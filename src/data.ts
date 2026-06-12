import { Project, Service, Article, ExperienceNode } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "village-info-system",
    title: "Sistem Informasi Desa Merdeka",
    subtitle: "Village Administration & Civic Registry Platform",
    category: "Community & Govt",
    problem: "Village administrators were bogged down by manual paper registries, leading to delays in resident services, inaccurate census data, and offline distribution of community welfare funds.",
    solution: "A lightweight, secure Laravel & MySQL platform custom-tuned for lower-end village server hardware. Features responsive public information feeds, secure electronic certifications, and automated community tracking.",
    impact: "Dramatically streamlined processing times for citizens, allowing official administrative documents to be requested online and processed in under 3 minutes.",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "REST API"],
    outcomeStats: [
      { label: "Admin overhead reduction", value: "70%" },
      { label: "Document processing time", value: "< 3 mins" },
      { label: "Active village residents served", value: "14,000+" }
    ],
    featuredImage: "village"
  },
  {
    id: "eduportal-sis",
    title: "Sistem Informasi Akademik Terpadu",
    subtitle: "Enterprise School Information System (SIS)",
    category: "Education",
    problem: "A regional school institution suffered from fragmented data systems. Grades, student records, payments, and parent communications occurred in separate offline spreadsheets, causing high administrative drift.",
    solution: "Built a consolidated SIS utilizing a modular schema with normalized MySQL tables. Designed structured dashboards with fine-grained access control (for admins, teachers, students, parents) and integrated WhatsApp REST gateways for automated system triggers.",
    impact: "Unified database sources, eliminating grade discrepancy errors and simplifying reporting schedules for over 150 administrative staff.",
    tech: ["Laravel", "React", "TypeScript", "MySQL", "REST API"],
    outcomeStats: [
      { label: "Grade reporting speed boost", value: "85%" },
      { label: "Parent engagement increase", value: "3.2x" },
      { label: "Concurrent active users", value: "4,500+" }
    ],
    featuredImage: "school"
  },
  {
    id: "sap-middleware-erp",
    title: "EcoLink Custom ERP & SAP Connector",
    subtitle: "Relational Logistics and Secondary Ledger Synchronization Engine",
    category: "Enterprise ERP",
    problem: "A rapid-growth corporate clients' local operations could not afford direct, slow transactions mapped to their HQ’s rigid legacy SAP installation. Staff resorted to manual data entry for operational tracking.",
    solution: "Designed and engineered a responsive, high-performance localized ERP portal using Laravel and React. Developed custom queue-backed REST APIs acting as an asynchronous caching middleware to push secure secondary batches into SAP.",
    impact: "Created an intuitive, responsive localized inventory tracking flow while safeguarding strict compliance audits and database normalization on both systems.",
    tech: ["Laravel", "React", "MySQL", "SAP ODBC", "Queue Jobs", "JWT Auth"],
    outcomeStats: [
      { label: "Manual double-entry errors", value: "0%" },
      { label: "Warehouse sync latency", value: "Real-time" },
      { label: "Daily synchronized batches", value: "12,000+" }
    ],
    featuredImage: "erp"
  },
  {
    id: "interactive-consulting-mesh",
    title: "Web Consultation: Artha Digital Hub",
    subtitle: "Corporate System Redesign & Scalability Roadmapping",
    category: "Web Consulting",
    problem: "An established digital consulting agency faced scaling bottlenecks due to poor monolithic database query structures and a lack of clear separation between frontend and API layers.",
    solution: "Administered an extensive architectural audit. Migrated their legacy frontend to a high-rate static-rendered TypeScript application, decoupled the central core into micro-services, and set up proper indexing structures on MySQL.",
    impact: "Provided robust visual scalability, protecting their platform against major query lock issues and cutting page-render delays significantly.",
    tech: ["MySQL Optimization", "TypeScript", "REST API", "Structural Audit"],
    outcomeStats: [
      { label: "Database query speedup", value: "4.2x" },
      { label: "Server utilization decrease", value: "50%" },
      { label: "Core API Response time", value: "45ms" }
    ],
    featuredImage: "audit"
  },
  {
    id: "clinic-ehr-system",
    title: "Klinik Sehat Bersama EHR",
    subtitle: "Outpatient Clinic Electronic Health Record & Queueing Platform",
    category: "Healthcare",
    problem: "A regional clinic network managed patient records on paper, causing duplicated histories, slow queue handling, and no visibility into stock levels for essential medicines.",
    solution: "Delivered a Laravel & MySQL EHR system with structured patient timelines, role-based access for doctors and pharmacists, and a real-time queue display synced via REST polling.",
    impact: "Cut average patient wait times and gave clinic staff a unified patient history view across multiple branches.",
    tech: ["Laravel", "MySQL", "React", "REST API", "Role-Based Access"],
    outcomeStats: [
      { label: "Avg. patient wait time", value: "-45%" },
      { label: "Branches connected", value: "5" },
      { label: "Records digitized", value: "20,000+" }
    ],
    featuredImage: "clinic"
  },
  {
    id: "b2b-ecommerce-portal",
    title: "Nusantara Supply B2B Portal",
    subtitle: "Wholesale Ordering & Distributor Pricing Platform",
    category: "E-Commerce",
    problem: "A distributor handled bulk orders manually via spreadsheets and chat, leading to mispriced quotes, slow order confirmations, and no central catalog for resellers.",
    solution: "Built a React storefront backed by a Laravel API with tiered distributor pricing, automated quote generation, and MySQL-backed inventory sync across warehouses.",
    impact: "Resellers can now self-serve catalog browsing and ordering, freeing the sales team to focus on key accounts.",
    tech: ["React", "Laravel", "MySQL", "Tailwind CSS", "REST API"],
    outcomeStats: [
      { label: "Order processing time", value: "-60%" },
      { label: "Active reseller accounts", value: "300+" },
      { label: "Pricing error reports", value: "0" }
    ],
    featuredImage: "ecommerce"
  },
  {
    id: "library-management-system",
    title: "Perpustakaan Digital Cerdas",
    subtitle: "School Library Catalog, Loans & Fine Tracking System",
    category: "Education",
    problem: "School librarians tracked book loans using handwritten ledgers, resulting in lost books, untracked overdue fines, and no searchable catalog for students.",
    solution: "Implemented a lightweight Laravel application with a searchable MySQL catalog, barcode-assisted loan tracking, and automated overdue fine calculations.",
    impact: "Gave librarians a real-time view of inventory and loan status while letting students search availability online.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    outcomeStats: [
      { label: "Catalog items tracked", value: "8,500+" },
      { label: "Lost book rate", value: "-80%" },
      { label: "Fine collection accuracy", value: "98%" }
    ],
    featuredImage: "library"
  },
  {
    id: "hr-payroll-portal",
    title: "Karyawan Prima HR & Payroll",
    subtitle: "Employee Self-Service Portal with Automated Payroll Engine",
    category: "Enterprise ERP",
    problem: "An SME calculated payroll manually in spreadsheets each month, causing recurring tax miscalculations and no self-service way for staff to request leave or view payslips.",
    solution: "Engineered a Laravel-based HR portal with configurable payroll components, automated tax/BPJS deduction rules, and a React employee dashboard for leave requests and digital payslips.",
    impact: "Reduced monthly payroll processing from days to hours and gave employees direct access to their records.",
    tech: ["Laravel", "React", "MySQL", "REST API", "Queue Jobs"],
    outcomeStats: [
      { label: "Payroll processing time", value: "-75%" },
      { label: "Employees onboarded", value: "180+" },
      { label: "Calculation disputes", value: "Near 0" }
    ],
    featuredImage: "hr"
  },
  {
    id: "field-survey-sync-app",
    title: "Desa Connect Field Survey Sync",
    subtitle: "Offline-First Field Data Collection & Sync Engine",
    category: "Community & Govt",
    problem: "Field officers collecting community survey data in remote areas had no reliable internet, resulting in lost forms and delayed reporting to the district office.",
    solution: "Built an offline-first web app using local-first storage that queues submissions and syncs automatically with a Laravel REST API and MySQL once connectivity returns.",
    impact: "Field teams can now collect data anywhere and trust that records sync reliably once back in coverage.",
    tech: ["React", "Laravel", "MySQL", "Service Workers", "REST API"],
    outcomeStats: [
      { label: "Survey records synced", value: "12,000+" },
      { label: "Data loss incidents", value: "0" },
      { label: "Districts covered", value: "6" }
    ],
    featuredImage: "field"
  }
];

export const SERVICES: Service[] = [
  {
    id: "srv-info-sys",
    title: "Custom Information Systems",
    description: "Architecting scalable information ecosystems including School Portals, Village Registries, and Custom ERPs that fully bridge administrative voids and integrate modern localized databases.",
    modules: ["Sistem Informasi Akademik (SIS)", "Sistem Informasi Desa (SID)", "Secondary Ledger Modules", "Dynamic Reporting Tools"],
    idealFor: "Educational Institutions, Local Government units, and growing corporations.",
    architectureHighlight: "Highly optimized MySQL schemas + fast Laravel backends guaranteeing minimal compute costs."
  },
  {
    id: "srv-sap-api",
    title: "System Integration & SAP Gateways",
    description: "Designing high-performance, compliant API middleware layers to connect legacy SAP systems or heavy enterprise databases with client-facing React and web applications safely.",
    modules: ["Asynchronous Queue Bridges", "Tokenized JWT Auth Handshakes", "Data Sanitization Gateways", "Automated DB Backups"],
    idealFor: "Enterprise clients searching for modernized responsive dashboards on top of complex backend architectures.",
    architectureHighlight: "Dual-layer validation schemas protecting ledger integrity."
  },
  {
    id: "srv-web-consult",
    title: "Technical Consultation & Audits",
    description: "Reviewing database query plans, analyzing bottlenecks, and providing actionable blueprints to transition sluggish legacy platforms into lightning-fast, secure headless architectures.",
    modules: ["Database Index Tuning", "Frontend Decoupling Roadmaps", "API Security Analysis", "Lighthouse Performance Tuning"],
    idealFor: "SMEs or agencies experiencing scalability challenges, data losses, or slow system performance.",
    architectureHighlight: "Detailed architectural document highlighting precisely where your application is losing page-rank and performance."
  },
  {
    id: "srv-educate",
    title: "Corporate Mentoring & IT Training",
    description: "Bridging the gap between theory and industry standards. Providing focused engineering workshops on Laravel structure, standard API design patterns, and relational databases for corporate IT units and students.",
    modules: ["Laravel Clean Architecture", "REST API Engineering", "MySQL Normalization Labs", "Interactive Code Reviews"],
    idealFor: "In-house dev teams looking to modernize their practices or schools seeking specialized IT curriculums.",
    architectureHighlight: "Hands-on, custom projects, tailored specifically to your organization's unique stack."
  }
];

export const ARTICLES: Article[] = [
  {
    id: "art-laravel-sis",
    title: "Architecting High-Performance SIS Portals with Laravel & MySQL",
    excerpt: "How to design academic databases that gracefully handle 5,000+ simultaneous students fetching reports during grade publication days, utilizing indexing and redis cache loops.",
    category: "System Design",
    readTime: "6 min read",
    date: "May 2026",
    content: "When grade publication season hits, educational database load spikes can quickly bring servers down. This article deep-dives into schema normalization, strategic index strategies for student IDs, and how to utilize Laravel's queue-driven batch processes to isolate export formats dynamically..."
  },
  {
    id: "art-sap-middleware",
    title: "Simplifying Legacy Integration: Building Asynchronous SAP REST Middleware",
    excerpt: "A technical breakdown of how to guard transaction boundaries when syncing high-frequency local web apps back into enterprise SAP nodes without system lag.",
    category: "Laravel",
    readTime: "8 min read",
    date: "April 2026",
    content: "Enterprise clients often request modernized web portals, but pushing each click directly to SAP is a recipe for system latency. We explore how to establish a fast auxiliary Laravel REST interface, store transactions in structured MySQL tables, and stream structured records at set operational windows safely..."
  },
  {
    id: "art-village-empowerment",
    title: "Digitalizing Democratic Access: The Power of Open-Source Village Portals",
    excerpt: "Exploring the technical, architectural, and educational challenges of installing secure, resilient digital administrative hubs in rural regional districts.",
    category: "Education",
    readTime: "5 min read",
    date: "February 2026",
    content: "Digital equity starts in the villages. This article discusses deploying low-compute Laravel platforms into remote server environments with intermittent connectivity, designing for high accessibility, and mentoring local operators to maintain community portals independently..."
  }
];

export const EXPERIENCE: ExperienceNode[] = [
  {
    id: "exp-consultant",
    period: "2022 - Present",
    role: "Digital Solutions Architect & IT Consultant",
    organization: "Independent Practice",
    metric: "12+ Enterprise Systems Delivered Successfully",
    description: "Providing high-performance web engineering and systems advice. Specializing in designing bespoke ERP extensions, village management software, and unified student tracking portals.",
    highlights: [
      "Designed and configured 3 Village Information Systems servicing 30,000+ localized residents.",
      "Re-engineered student database models for 2 major regional academic academies, boosting software query speeds by over 300%.",
      "Formulated integration schemas for industrial manufacturers, interfacing client-side ordering flows with back office core ledgers."
    ]
  },
  {
    id: "exp-educator",
    period: "2019 - 2022",
    role: "Lead Systems Educator & Core Faculty Advisor",
    organization: "Technical Vocational & Academic Alliances",
    metric: "400+ Junior Developers Trained & Placed",
    description: "Led academic courses detailing Full Stack Development (PHP, Laravel, MySQL) and Relational Database principles. Integrated real-world portfolio standards into classical IT curriculums.",
    highlights: [
      "Mentored development teams that built 8 award-winning open-source administrative products.",
      "Developed a customized Laravel bootcamp curriculumadopted by secondary academies in the province.",
      "Hosted community code audits and engineering bootcamps sponsored by local trade and tech chapters."
    ]
  },
  {
    id: "exp-engineer",
    period: "2016 - 2019",
    role: "Senior Full Stack Engineer & Middleware Integrator",
    organization: "Global Logistics & enterprise Tech Groups",
    metric: "90% Reduction in Synchronous System Lag",
    description: "Engineered web-based client interfaces and transaction tracking portals. Specialized in constructing reliable database layers and queue systems linking user devices back to large-scale backend mainframes.",
    highlights: [
      "Authored custom REST APIs facilitating real-time status communication across shipping warehouses.",
      "Maintained complex multi-point database mappings between localized operational stores and primary accounting architectures.",
      "Architected clean, robust backend solutions using custom PHP frameworks later upgraded to PHP 7+ and Laravel."
    ]
  }
];
