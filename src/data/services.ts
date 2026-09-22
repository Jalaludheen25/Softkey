import type { ImageMetadata } from 'astro';
import tallyPrimeImg from '@/assets/images/tally-prime.jpg';
import implementationImg from '@/assets/images/implementation.jpg';
import customizationImg from '@/assets/images/customization.jpg';
import integrationImg from '@/assets/images/integration.jpg';
import supportImg from '@/assets/images/support.jpg';
import cloudImg from '@/assets/images/cloud.jpg';
import gstImg from '@/assets/images/gst.jpg';
import businessImg from '@/assets/images/business-management.jpg';
import trainingImg from '@/assets/images/training.jpg';

export type Feature = { icon: string; title: string; text: string };
export type Step = { title: string; text: string };
export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  navTitle: string;
  group: GroupId;
  icon: string;
  image: ImageMetadata;
  imageAlt: string;
  summary: string;
  headline: string;
  lead: string;
  intro: { title: string; body: string[] };
  outcomes: string[];
  features: Feature[];
  process: Step[];
  faqs: Faq[];
  related: string[];
  seo: { title: string; description: string };
};

export type GroupId = 'tally' | 'customize' | 'support' | 'business';

export type ServiceGroup = {
  id: GroupId;
  title: string;
  icon: string;
  image: ImageMetadata;
  imageAlt: string;
  summary: string;
};

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: 'tally',
    title: 'Tally Solutions',
    icon: 'badge-indian-rupee',
    image: tallyPrimeImg,
    imageAlt: 'Laptop on a glossy desk displaying a business analytics dashboard',
    summary: 'Genuine TallyPrime licenses, upgrades and TSS renewals — implemented properly and available on the cloud.',
  },
  {
    id: 'customize',
    title: 'Customization & Integration',
    icon: 'code-xml',
    image: customizationImg,
    imageAlt: 'Laptop showing source code in a dark editor',
    summary: 'TDL customizations and system integrations that make Tally fit your processes — not the other way round.',
  },
  {
    id: 'support',
    title: 'Support, AMC & Training',
    icon: 'headset',
    image: supportImg,
    imageAlt: 'Support team working together at a computer while on a call',
    summary: 'Annual maintenance, remote and on-site support, and hands-on training that keeps your team productive.',
  },
  {
    id: 'business',
    title: 'Business Software Solutions',
    icon: 'briefcase-business',
    image: businessImg,
    imageAlt: 'Monitor displaying business analytics charts',
    summary: 'GST-ready accounting plus connected apps for mobile reporting, collections and billing.',
  },
];

export const SERVICES: Service[] = [
  {
    slug: 'tallyprime',
    title: 'TallyPrime',
    navTitle: 'TallyPrime',
    group: 'tally',
    icon: 'badge-indian-rupee',
    image: tallyPrimeImg,
    imageAlt: 'Laptop on a glossy desk displaying a business analytics dashboard',
    summary: 'New TallyPrime licenses, upgrades from Tally.ERP 9 and TSS renewals — with the right edition for your business.',
    headline: 'TallyPrime licenses, upgrades & renewals',
    lead: 'Get the right TallyPrime edition for your business, installed and activated correctly — plus timely TSS renewals so you always stay on the latest release.',
    intro: {
      title: 'Business management software, set up right from day one.',
      body: [
        'TallyPrime brings accounting, inventory, GST compliance, banking and payroll together in one simple application. As a channel partner for Tally, Softkey Technologies helps you choose the right edition, activates your license, and makes sure your company data starts on a clean foundation.',
        'Already using Tally.ERP 9 or an older release? We plan and carry out the upgrade, migrate your data and show your team what has changed — so the move feels smooth rather than disruptive.',
      ],
    },
    outcomes: [
      'The right edition for your team size',
      'Genuine license, activated and configured',
      'Smooth upgrade from Tally.ERP 9',
      'TSS renewals handled on time',
    ],
    features: [
      { icon: 'user-round-check', title: 'TallyPrime Silver', text: 'Single-user edition for proprietors and small teams working on one computer.' },
      { icon: 'users', title: 'TallyPrime Gold', text: 'Multi-user edition for teams that need simultaneous access over a local network.' },
      { icon: 'refresh-cw', title: 'Upgrades & migration', text: 'Move from Tally.ERP 9 or older releases to TallyPrime with your data intact.' },
      { icon: 'calendar-check', title: 'TSS renewals', text: 'Keep Tally Software Services active for new releases and Tally’s connected services.' },
      { icon: 'key-round', title: 'License management', text: 'Activation, surrender, reactivation and moving licenses between computers.' },
      { icon: 'settings', title: 'Configuration', text: 'Company creation, features, security levels and user access set up for your needs.' },
    ],
    process: [
      { title: 'Understand', text: 'We learn how you work, how many people use Tally and from where.' },
      { title: 'Recommend', text: 'We suggest the edition and add-ons that genuinely fit — nothing more.' },
      { title: 'Install & activate', text: 'Your license is installed, activated and configured on your systems.' },
      { title: 'Hand over', text: 'We walk your team through the essentials and stay available for questions.' },
    ],
    faqs: [
      {
        q: 'What is the difference between TallyPrime Silver and Gold?',
        a: 'Silver is a single-user license meant for one computer at a time. Gold is a multi-user license that lets several users work on the same company data simultaneously over a local network. We help you decide based on how your team works.',
      },
      {
        q: 'Can you upgrade us from Tally.ERP 9 to TallyPrime?',
        a: 'Yes. We back up your data, migrate it to TallyPrime, verify balances and reports with you, and help your team get comfortable with the new interface.',
      },
      {
        q: 'What is TSS and do I need it?',
        a: 'Tally Software Services (TSS) is the subscription that keeps your license eligible for new TallyPrime releases and Tally’s connected services, such as remote access and connected GST features. We track your renewal date and remind you before it lapses.',
      },
      {
        q: 'Is TallyPrime suitable for a small business?',
        a: 'Yes — TallyPrime is simple enough for a small business while scaling to multi-user, multi-location operations. We recommend the setup that fits your size today and your plans for tomorrow.',
      },
    ],
    related: ['tally-implementation', 'tally-amc-support', 'tally-cloud-remote-support'],
    seo: {
      title: 'TallyPrime Licenses, Upgrades & TSS Renewal',
      description:
        'Buy TallyPrime Silver or Gold, upgrade from Tally.ERP 9 and renew TSS with Softkey Technologies — channel partner for Tally in Kannur, Payyannur and Mangaluru.',
    },
  },
  {
    slug: 'tally-implementation',
    title: 'Tally Implementation',
    navTitle: 'Tally Implementation',
    group: 'tally',
    icon: 'rocket',
    image: implementationImg,
    imageAlt: 'Consultant discussing a software setup with a client over a laptop',
    summary: 'Structured TallyPrime rollouts — requirement study, data migration, configuration and go-live support.',
    headline: 'Tally implementation, planned and delivered end to end',
    lead: 'From the first requirement discussion to the day your team posts its first voucher, we handle the setup so you can focus on running your business.',
    intro: {
      title: 'A clean start for your books.',
      body: [
        'A good implementation decides how useful Tally will be for years to come. We map your business processes — billing, purchase, inventory, GST, payroll — onto TallyPrime, set up masters and opening balances correctly, and switch on only the features you actually need.',
        'Whether you are moving from manual books, spreadsheets or another accounting package, we plan the migration, validate the data and stay with your team through go-live.',
      ],
    },
    outcomes: [
      'Processes mapped to TallyPrime',
      'Accurate masters and opening balances',
      'GST and compliance configured',
      'A team that is confident from day one',
    ],
    features: [
      { icon: 'clipboard-check', title: 'Requirement study', text: 'We document how you bill, buy, stock and report before touching the software.' },
      { icon: 'database', title: 'Data migration', text: 'Ledgers, items, parties and balances brought in from Excel, older Tally or other software.' },
      { icon: 'layers', title: 'Masters & structure', text: 'Ledger groups, stock groups, godowns, cost centres and voucher types set up logically.' },
      { icon: 'receipt-text', title: 'GST configuration', text: 'GSTIN, tax rates, HSN/SAC and e-invoice / e-way bill settings configured correctly.' },
      { icon: 'lock', title: 'Users & security', text: 'Role-based access so each user sees and edits only what they should.' },
      { icon: 'life-buoy', title: 'Go-live handholding', text: 'Hands-on support through the first days of live entries to resolve questions quickly.' },
    ],
    process: [
      { title: 'Discover', text: 'A requirement study covering your processes, reports and compliance needs.' },
      { title: 'Configure', text: 'Company, masters, features and security set up to match the plan.' },
      { title: 'Migrate & verify', text: 'Data imported and balances reconciled with you before going live.' },
      { title: 'Go live', text: 'Your team starts working in Tally with us close at hand.' },
    ],
    faqs: [
      {
        q: 'How long does a Tally implementation take?',
        a: 'It depends on the size of your business, the volume of data to migrate and any customization required. A simple setup can be completed quickly, while multi-branch or customized rollouts are planned in phases. We share a clear plan after the requirement study.',
      },
      {
        q: 'Can you migrate data from Excel or another accounting software?',
        a: 'Yes. We review your existing data, clean and map it to TallyPrime masters, import it, and reconcile balances with you before go-live.',
      },
      {
        q: 'Do you implement at our premises?',
        a: 'We can work on-site at your office or remotely, depending on what the project needs. Our branches in Kannur, Payyannur and Mangaluru make on-site visits in the region practical.',
      },
    ],
    related: ['tallyprime', 'tally-customization', 'software-training'],
    seo: {
      title: 'Tally Implementation Services',
      description:
        'End-to-end TallyPrime implementation — requirement study, data migration, GST setup, user security and go-live support in Kannur, Payyannur and Mangaluru.',
    },
  },
  {
    slug: 'tally-customization',
    title: 'Tally Customization',
    navTitle: 'Tally Customization',
    group: 'customize',
    icon: 'code-xml',
    image: customizationImg,
    imageAlt: 'Laptop showing source code in a dark editor',
    summary: 'TDL-based customizations — invoice formats, reports, fields, controls and workflows built around your business.',
    headline: 'Tally customization that fits the way you work',
    lead: 'Custom invoice formats, reports, fields and workflows built with Tally Definition Language (TDL) — so TallyPrime works exactly the way your business does.',
    intro: {
      title: 'Your process, not a workaround.',
      body: [
        'Every business has details that standard software does not cover: a particular invoice layout, an approval step, an extra field on a voucher, a report the management team relies on. Tally is designed to be extended, and customization adds these without leaving Tally.',
        'We understand the requirement, build and test the customization on your data, and deploy it with documentation — keeping it compatible as you move to newer TallyPrime releases.',
      ],
    },
    outcomes: [
      'Invoices and documents in your format',
      'Reports your management actually uses',
      'Fewer manual steps and errors',
      'Built on Tally’s own TDL framework',
    ],
    features: [
      { icon: 'file-text', title: 'Invoice & print formats', text: 'Branded invoices, quotations, delivery notes and vouchers laid out the way you want.' },
      { icon: 'chart-no-axes-combined', title: 'Custom reports & MIS', text: 'Management reports and analyses that the standard reports do not provide.' },
      { icon: 'sliders-horizontal', title: 'Additional fields', text: 'Capture extra details on masters and vouchers — and use them in reports and prints.' },
      { icon: 'shield-check', title: 'Controls & validations', text: 'Mandatory fields, credit-limit checks and approval steps that prevent costly mistakes.' },
      { icon: 'zap', title: 'Automation', text: 'Automate repetitive entries, calculations and data updates to save time every day.' },
      { icon: 'boxes', title: 'Industry add-ons', text: 'Modules for specific needs such as job work, batch processes or project tracking.' },
    ],
    process: [
      { title: 'Brief', text: 'We capture exactly what should change and why it matters to you.' },
      { title: 'Build', text: 'The customization is developed in TDL to your specification.' },
      { title: 'Test on your data', text: 'You review it against real scenarios before it goes live.' },
      { title: 'Deploy & document', text: 'Installed on your systems with notes your team can refer to.' },
    ],
    faqs: [
      {
        q: 'What is TDL?',
        a: 'Tally Definition Language (TDL) is the development language Tally provides for extending its software. Customizations written in TDL run inside TallyPrime, so your team keeps working in the interface they already know.',
      },
      {
        q: 'Will customizations work after I upgrade TallyPrime?',
        a: 'We build customizations with compatibility in mind and review them when you move to a new release. If a change in Tally requires an update to your customization, we let you know and take care of it.',
      },
      {
        q: 'Can you modify a customization someone else built?',
        a: 'In many cases, yes. We review the existing TDL first and advise whether modifying it or rebuilding it cleanly is the better option.',
      },
    ],
    related: ['tally-integration', 'tally-implementation', 'business-management-solutions'],
    seo: {
      title: 'Tally Customization (TDL) Services',
      description:
        'Custom TallyPrime invoice formats, reports, fields, validations and automation using TDL — built and supported by Softkey Technologies.',
    },
  },
  {
    slug: 'tally-integration',
    title: 'Tally Integration',
    navTitle: 'Tally Integration',
    group: 'customize',
    icon: 'workflow',
    image: integrationImg,
    imageAlt: 'Network patch panel with connected cables',
    summary: 'Connect TallyPrime with your billing, e-commerce, CRM, mobile apps and other business systems.',
    headline: 'Tally integration — your systems, finally connected',
    lead: 'Stop re-typing the same data in two places. We connect TallyPrime with the applications you already use so information flows automatically and accurately.',
    intro: {
      title: 'One source of truth for your numbers.',
      body: [
        'Sales may happen in a POS, an online store or a field app, while the books live in Tally. Integration links these systems so orders, invoices, receipts and stock movements reach Tally without manual re-entry.',
        'We assess the systems involved, design the data flow, and build a reliable connection using Tally’s supported integration methods — with checks to make sure every record lands where it should.',
      ],
    },
    outcomes: [
      'No duplicate data entry',
      'Faster, error-free posting',
      'Up-to-date figures across systems',
      'Built on supported Tally interfaces',
    ],
    features: [
      { icon: 'store', title: 'POS & billing systems', text: 'Bring counter sales and receipts from billing software into Tally automatically.' },
      { icon: 'globe', title: 'E-commerce & web apps', text: 'Sync online orders, customers and payments with your Tally books.' },
      { icon: 'network', title: 'CRM & ERP connections', text: 'Exchange masters and transactions between Tally and other business applications.' },
      { icon: 'smartphone', title: 'Mobile apps', text: 'Connect Tally with apps such as Biz Analyst and Live Keeping for data on the go.' },
      { icon: 'file-spreadsheet', title: 'Excel import & export', text: 'Structured imports of vouchers and masters from spreadsheets, with validation.' },
      { icon: 'server-cog', title: 'API & XML integration', text: 'Custom connectors built on Tally’s XML-over-HTTP and ODBC interfaces.' },
    ],
    process: [
      { title: 'Assess', text: 'We study the systems involved and the data that needs to move.' },
      { title: 'Design the flow', text: 'Mapping of fields, timing and error handling agreed with you.' },
      { title: 'Build & test', text: 'The connector is built and tested with sample data first.' },
      { title: 'Monitor', text: 'We watch the first live runs closely and fine-tune as needed.' },
    ],
    faqs: [
      {
        q: 'Which systems can be integrated with Tally?',
        a: 'Most systems that can export or exchange data — billing and POS software, e-commerce platforms, CRMs, custom applications and spreadsheets — can be connected. We assess your systems first and recommend the most reliable approach.',
      },
      {
        q: 'Is the integration real-time?',
        a: 'It can be real-time, scheduled or on-demand, depending on the systems involved and how quickly you need data to reflect in Tally.',
      },
      {
        q: 'Is our data safe during integration?',
        a: 'We design integrations to run within your environment wherever possible and test with sample data before going live. Backups are taken before any bulk data operation.',
      },
    ],
    related: ['tally-customization', 'business-management-solutions', 'tally-cloud-remote-support'],
    seo: {
      title: 'Tally Integration — POS, E-commerce, CRM & Apps',
      description:
        'Integrate TallyPrime with POS, e-commerce, CRM, mobile apps and Excel. Softkey Technologies builds reliable Tally integrations using XML, ODBC and APIs.',
    },
  },
  {
    slug: 'tally-amc-support',
    title: 'Tally AMC & Support',
    navTitle: 'Tally AMC & Support',
    group: 'support',
    icon: 'headset',
    image: supportImg,
    imageAlt: 'Support team working together at a computer while on a call',
    summary: 'Annual maintenance contracts and on-call support to keep Tally running smoothly all year.',
    headline: 'Tally AMC & support you can count on',
    lead: 'An annual maintenance contract keeps your Tally healthy — regular check-ups, quick help when something goes wrong, and one team that knows your setup.',
    intro: {
      title: 'Support that knows your business.',
      body: [
        'When Tally is how you bill customers and prepare returns, downtime and data errors cost money. Our AMC plans give you a dedicated support relationship: we know your configuration, your customizations and your people.',
        'Reach us on WhatsApp, phone or email. Many issues can be resolved remotely in a single session; when a visit is needed, our branches in Kannur, Payyannur and Mangaluru are close by.',
      ],
    },
    outcomes: [
      'Help on WhatsApp, phone and email',
      'Preventive health checks',
      'Safe backups and data repair',
      'One team that knows your setup',
    ],
    features: [
      { icon: 'message-circle', title: 'Multi-channel support', text: 'Raise queries on WhatsApp, phone or email and get guided answers.' },
      { icon: 'monitor-smartphone', title: 'Remote sessions', text: 'Secure screen-sharing sessions to troubleshoot without waiting for a visit.' },
      { icon: 'wrench', title: 'On-site visits', text: 'Visits for issues that need hands-on attention, as covered in your plan.' },
      { icon: 'database', title: 'Backup & data repair', text: 'Backup setup, data verification and repair of damaged company data.' },
      { icon: 'refresh-cw', title: 'Release updates', text: 'Help installing new TallyPrime releases and understanding what has changed.' },
      { icon: 'bell-ring', title: 'Renewal reminders', text: 'We track TSS and AMC dates so nothing lapses unexpectedly.' },
    ],
    process: [
      { title: 'Onboard', text: 'We record your license, setup and customizations.' },
      { title: 'Health check', text: 'A review of data, backups and settings to prevent problems.' },
      { title: 'Support on demand', text: 'Help whenever you need it through your preferred channel.' },
      { title: 'Review & renew', text: 'A look back at the year and what could work better next.' },
    ],
    faqs: [
      {
        q: 'What does a Tally AMC cover?',
        a: 'AMC plans typically cover query support, remote troubleshooting, backup and data repair assistance, release updates and on-site visits as agreed. We tailor the plan to your number of users and locations — ask us for the details that fit your business.',
      },
      {
        q: 'Is AMC the same as TSS?',
        a: 'No. TSS (Tally Software Services) is Tally’s subscription for product updates and connected services. AMC is a service contract with Softkey Technologies for hands-on support. Most businesses benefit from having both.',
      },
      {
        q: 'How do I raise a support request?',
        a: 'Message us on WhatsApp at 9544 101 401, call 9846 901 101 or email us. Share a short description or a screenshot of the issue and we will take it from there.',
      },
    ],
    related: ['tally-cloud-remote-support', 'tallyprime', 'software-training'],
    seo: {
      title: 'Tally AMC & Support in Kannur, Payyannur & Mangaluru',
      description:
        'Tally annual maintenance contracts with WhatsApp, phone, remote and on-site support, backups and data repair from Softkey Technologies.',
    },
  },
  {
    slug: 'tally-cloud-remote-support',
    title: 'Tally Cloud & Remote Support',
    navTitle: 'Tally Cloud / Remote Support',
    group: 'tally',
    icon: 'cloud-cog',
    image: cloudImg,
    imageAlt: 'Server racks with network cabling in a data centre',
    summary: 'Run TallyPrime on AWS and access it from anywhere — plus secure remote support sessions.',
    headline: 'Tally on Cloud & remote support',
    lead: 'Access TallyPrime securely from any location with Tally on Cloud (AWS), and get expert help remotely without waiting for a visit.',
    intro: {
      title: 'Your books, wherever business takes you.',
      body: [
        'Owners on the move, accountants working from home, branches in different towns — modern businesses need Tally beyond a single office computer. Tally on Cloud runs TallyPrime on Amazon Web Services, so authorised users can work on the same data from anywhere with an internet connection.',
        'We help you decide whether the cloud or TallyPrime’s built-in remote access suits you best, set it up, move your data and train your users. Whichever you choose, our remote support team is a message away.',
      ],
    },
    outcomes: [
      'Access Tally from any location',
      'Multiple users on the same data',
      'Hosted on AWS infrastructure',
      'Remote help without delays',
    ],
    features: [
      { icon: 'cloud', title: 'Tally on Cloud (AWS)', text: 'TallyPrime hosted on AWS — no server to buy or maintain at your office.' },
      { icon: 'building-2', title: 'Multi-branch access', text: 'Branches and remote staff work on one company file at the same time.' },
      { icon: 'lock', title: 'Secure user access', text: 'Individual logins with access controls for every user.' },
      { icon: 'database', title: 'Data migration to cloud', text: 'Your existing Tally data moved to the cloud and verified.' },
      { icon: 'monitor-smartphone', title: 'Remote support sessions', text: 'Secure screen-sharing to fix issues and answer questions quickly.' },
      { icon: 'globe', title: 'Remote & browser access', text: 'Guidance on TallyPrime’s remote access and browser reports where they fit better.' },
    ],
    process: [
      { title: 'Assess', text: 'Users, locations and connectivity reviewed to choose the right approach.' },
      { title: 'Set up', text: 'Cloud environment or remote access configured with secure logins.' },
      { title: 'Migrate', text: 'Company data moved and checked before users switch over.' },
      { title: 'Support', text: 'Ongoing help for users wherever they work from.' },
    ],
    faqs: [
      {
        q: 'What is Tally on Cloud?',
        a: 'Tally on Cloud runs your TallyPrime on AWS cloud infrastructure, letting authorised users access the same company data from different locations over the internet — without maintaining a server in your office.',
      },
      {
        q: 'Do I need a new Tally license for the cloud?',
        a: 'That depends on your current license and the plan you choose. Share your license details with us and we will explain exactly what is needed before you commit.',
      },
      {
        q: 'What do I need for a remote support session?',
        a: 'Just an internet connection and a screen-sharing app we help you install. You stay in control and can end the session at any time.',
      },
    ],
    related: ['tally-amc-support', 'tallyprime', 'tally-integration'],
    seo: {
      title: 'Tally on Cloud (AWS) & Remote Tally Support',
      description:
        'Run TallyPrime on AWS and access it from anywhere. Softkey Technologies sets up Tally on Cloud, migrates data and provides secure remote Tally support.',
    },
  },
  {
    slug: 'gst-accounting-solutions',
    title: 'GST & Accounting Solutions',
    navTitle: 'GST & Accounting Solutions',
    group: 'business',
    icon: 'receipt-text',
    image: gstImg,
    imageAlt: 'Calculator, pen and paperwork on a clean white desk',
    summary: 'GST, e-invoicing, e-way bills, TDS and day-to-day accounting set up correctly in Tally.',
    headline: 'GST & accounting, set up for compliance',
    lead: 'Configure TallyPrime for GST, e-invoicing, e-way bills and TDS, and give your accounts team a clean, reliable workflow for everyday bookkeeping and returns.',
    intro: {
      title: 'Compliance built into every entry.',
      body: [
        'GST rules touch almost every invoice you raise and every bill you record. When Tally is configured correctly — tax rates, HSN/SAC codes, registration types, place of supply — preparing returns becomes a matter of review rather than rework.',
        'We set up the statutory features your business needs, show your team how to generate e-invoices and e-way bills from Tally, and help you use reconciliation reports to catch mismatches early. We work alongside your auditor or tax consultant, not in place of them.',
      ],
    },
    outcomes: [
      'Correct tax on every invoice',
      'E-invoices and e-way bills from Tally',
      'Easier GSTR preparation',
      'Cleaner books at year-end',
    ],
    features: [
      { icon: 'receipt-indian-rupee', title: 'GST setup', text: 'GSTIN, tax rates, HSN/SAC, registration types and place-of-supply rules configured.' },
      { icon: 'file-check-2', title: 'E-invoicing', text: 'Generate IRN and QR codes for e-invoices directly from TallyPrime.' },
      { icon: 'truck', title: 'E-way bills', text: 'Create e-way bills from invoices without re-entering details on the portal.' },
      { icon: 'clipboard-check', title: 'Returns & reconciliation', text: 'Use Tally’s GSTR-1, GSTR-3B and reconciliation reports to prepare returns with confidence.' },
      { icon: 'hand-coins', title: 'TDS & TCS', text: 'Deductor details, nature of payments and TDS / TCS computation set up in Tally.' },
      { icon: 'landmark', title: 'Banking & reconciliation', text: 'Bank reconciliation, cheque printing and payment workflows streamlined.' },
    ],
    process: [
      { title: 'Review', text: 'We check how your transactions and tax settings are recorded today.' },
      { title: 'Configure', text: 'Statutory features and masters corrected and set up properly.' },
      { title: 'Train', text: 'Your team learns the compliant workflow, step by step.' },
      { title: 'Check in', text: 'Periodic reviews keep configuration aligned with rule changes.' },
    ],
    faqs: [
      {
        q: 'Can TallyPrime generate e-invoices and e-way bills?',
        a: 'Yes. With an active TSS subscription and the right configuration, TallyPrime can generate e-invoices (IRN and QR code) and e-way bills directly. We set this up and train your team on the workflow.',
      },
      {
        q: 'Do you file GST returns for us?',
        a: 'We are a software solutions company: we configure Tally, train your team and help you use its return-preparation and reconciliation features. Filing responsibility stays with your business and your tax consultant.',
      },
      {
        q: 'Our GST data has mismatches. Can you help?',
        a: 'We can review how transactions are recorded in Tally, correct the configuration causing errors, and show you how to use reconciliation reports so mismatches are caught before filing.',
      },
    ],
    related: ['tally-implementation', 'software-training', 'tallyprime'],
    seo: {
      title: 'GST, E-Invoicing & Accounting Setup in Tally',
      description:
        'Set up GST, e-invoicing, e-way bills, TDS and bank reconciliation in TallyPrime with Softkey Technologies — channel partner for Tally in Kerala and Karnataka.',
    },
  },
  {
    slug: 'business-management-solutions',
    title: 'Business Management Solutions',
    navTitle: 'Business Management Solutions',
    group: 'business',
    icon: 'briefcase-business',
    image: businessImg,
    imageAlt: 'Monitor displaying business analytics charts',
    summary: 'Inventory, receivables, mobile reporting and billing apps from the Tally ecosystem — working together.',
    headline: 'Business management, beyond the ledger',
    lead: 'Combine TallyPrime with the right connected apps — mobile reporting, collections automation and simple billing — to run sales, stock and cash flow with clarity.',
    intro: {
      title: 'The right tools around your Tally.',
      body: [
        'Accounting is only part of running a business. Owners want sales figures on their phone, sales teams need stock and outstanding details in the field, and finance teams need payments to arrive on time.',
        'As a channel partner for Tally, Biz Analyst, Live Keeping, CredFlow and Vyapar, we help you pick the combination that suits your business, connect it to your data and train your people to use it well.',
      ],
    },
    outcomes: [
      'Clear, up-to-date business visibility',
      'Faster collections',
      'Sales teams equipped in the field',
      'One partner for the whole stack',
    ],
    features: [
      { icon: 'boxes', title: 'Inventory management', text: 'Godown-wise stock, batches, reorder levels and stock valuation in TallyPrime.' },
      { icon: 'smartphone', title: 'Mobile reporting', text: 'Sales, outstanding and stock on your phone with Biz Analyst or Live Keeping.' },
      { icon: 'hand-coins', title: 'Receivables automation', text: 'Automated payment reminders and collection tracking with CredFlow.' },
      { icon: 'scan-barcode', title: 'Billing for small businesses', text: 'Quick GST invoicing, stock and billing with Vyapar.' },
      { icon: 'layout-dashboard', title: 'MIS & dashboards', text: 'Management reports that highlight what needs attention today.' },
      { icon: 'package', title: 'Order management', text: 'Sales orders, purchase orders and deliveries tracked in one flow.' },
    ],
    process: [
      { title: 'Understand', text: 'We learn where time and money are being lost today.' },
      { title: 'Recommend', text: 'The right mix of Tally features and connected apps for you.' },
      { title: 'Connect', text: 'Apps set up and linked to your data where applicable.' },
      { title: 'Enable', text: 'Owners, staff and field teams trained to use them daily.' },
    ],
    faqs: [
      {
        q: 'Which app is right for us — Biz Analyst, Live Keeping or Vyapar?',
        a: 'It depends on what you need. Biz Analyst and Live Keeping bring your Tally data to mobile for owners and sales teams, while Vyapar is a standalone billing and accounting app suited to smaller businesses. We recommend the best fit after understanding your workflow.',
      },
      {
        q: 'Can these apps work with our existing Tally data?',
        a: 'Biz Analyst, Live Keeping and CredFlow are designed to connect with Tally, so they work with your existing company data once set up.',
      },
      {
        q: 'Do you help with setup and training for these apps?',
        a: 'Yes — we handle the setup, connect the app to your data where applicable, and train the people who will use it.',
      },
    ],
    related: ['tally-integration', 'gst-accounting-solutions', 'tally-customization'],
    seo: {
      title: 'Business Management Software & Tally Ecosystem Apps',
      description:
        'TallyPrime plus Biz Analyst, Live Keeping, CredFlow and Vyapar — inventory, mobile reporting, collections and billing solutions from Softkey Technologies.',
    },
  },
  {
    slug: 'software-training',
    title: 'Software Training',
    navTitle: 'Software Training',
    group: 'support',
    icon: 'graduation-cap',
    image: trainingImg,
    imageAlt: 'Presenter leading a training session in a meeting room with laptops',
    summary: 'Practical TallyPrime training for owners, accountants and staff — from basics to advanced features.',
    headline: 'Software training that sticks',
    lead: 'Practical, hands-on TallyPrime training for business owners, accountants and staff — built around the way your company actually uses Tally.',
    intro: {
      title: 'Confident users, fewer errors.',
      body: [
        'Software is only as good as the people using it. Our training focuses on the tasks your team performs every day — recording vouchers, managing stock, handling GST, reading reports — using examples that match your business.',
        'Sessions can be one-to-one or for a group, at your office or remotely, and can follow an implementation, an upgrade or the arrival of new staff.',
      ],
    },
    outcomes: [
      'Hands-on, task-based learning',
      'Sessions tailored to your workflows',
      'On-site or remote',
      'Refreshers after upgrades',
    ],
    features: [
      { icon: 'book-open', title: 'TallyPrime essentials', text: 'Company setup, ledgers, vouchers and everyday bookkeeping.' },
      { icon: 'boxes', title: 'Inventory & orders', text: 'Stock items, godowns, batches, orders and stock reports.' },
      { icon: 'receipt-text', title: 'GST & statutory', text: 'GST invoicing, e-invoicing, e-way bills, TDS and return reports.' },
      { icon: 'wallet', title: 'Payroll', text: 'Employee masters, pay heads, attendance and payroll processing.' },
      { icon: 'chart-no-axes-combined', title: 'Reports & analysis', text: 'Reading financial statements, outstanding, cash flow and MIS reports.' },
      { icon: 'sparkles', title: 'What’s new', text: 'Short sessions on new features after each TallyPrime upgrade.' },
    ],
    process: [
      { title: 'Assess', text: 'We gauge each participant’s current level and role.' },
      { title: 'Plan', text: 'Sessions structured around the tasks they perform daily.' },
      { title: 'Train hands-on', text: 'Practical exercises on real-world scenarios.' },
      { title: 'Follow up', text: 'Doubts cleared after the sessions, while habits form.' },
    ],
    faqs: [
      {
        q: 'Who is the training for?',
        a: 'Business owners who want to read their numbers, accountants who work in Tally every day, and new staff who need to become productive quickly. We adjust the depth to the audience.',
      },
      {
        q: 'Can training be conducted at our office?',
        a: 'Yes. We can train your team on-site at your office or conduct sessions remotely, whichever is more convenient.',
      },
      {
        q: 'Do you train using our own workflows?',
        a: 'Where appropriate, we use your company’s own workflows and a copy of your data so the training applies directly to daily work.',
      },
    ],
    related: ['tally-implementation', 'gst-accounting-solutions', 'tally-amc-support'],
    seo: {
      title: 'TallyPrime Training for Businesses & Staff',
      description:
        'Hands-on TallyPrime training for owners, accountants and staff — accounting, inventory, GST, payroll and reports — on-site or remote from Softkey Technologies.',
    },
  },
];

export const getService = (slug: string) => {
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service: ${slug}`);
  return s;
};

export const servicesInGroup = (id: GroupId) => SERVICES.filter((s) => s.group === id);

export const serviceHref = (slug: string) => `/services/${slug}/`;
