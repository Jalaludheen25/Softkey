import type { ImageMetadata } from 'astro';
import tallyLogo from '@/assets/partners/tally.png';
import tallyCloudLogo from '@/assets/partners/tally-on-cloud-aws.png';
import bizAnalystLogo from '@/assets/partners/biz-analyst.png';
import liveKeepingLogo from '@/assets/partners/live-keeping.png';
import credflowLogo from '@/assets/partners/credflow.png';
import vyaparLogo from '@/assets/partners/vyapar.png';

export type Partner = {
  id: string;
  name: string;
  byline?: string;
  logo: ImageMetadata;
  category: string;
  description: string;
  /** What Softkey Technologies provides around this product. */
  offer: string[];
  services: string[];
};

/** The “Channel Partner For” line-up printed on the client's card. */
export const PARTNERS: Partner[] = [
  {
    id: 'tally',
    name: 'Tally',
    byline: 'TallyPrime',
    logo: tallyLogo,
    category: 'Business management software',
    description:
      'TallyPrime brings accounting, inventory, GST, banking and payroll together in one application that businesses of every size can use with confidence.',
    offer: ['Silver & Gold licenses', 'Upgrades and TSS renewals', 'Implementation and customization', 'AMC, support and training'],
    services: ['tallyprime', 'tally-implementation', 'tally-customization', 'tally-amc-support'],
  },
  {
    id: 'tally-on-cloud',
    name: 'Tally on Cloud',
    byline: 'on AWS',
    logo: tallyCloudLogo,
    category: 'Cloud hosting',
    description:
      'Run TallyPrime on Amazon Web Services and let authorized users work on the same company data from any location, without an office server.',
    offer: ['Cloud suitability assessment', 'Setup and user access', 'Data migration to the cloud', 'Remote user support'],
    services: ['tally-cloud-remote-support'],
  },
  {
    id: 'biz-analyst',
    name: 'Biz Analyst',
    byline: 'by Khatabook',
    logo: bizAnalystLogo,
    category: 'Mobile reporting & sales',
    description:
      'A mobile app that puts your Tally data in your pocket — sales, outstanding, stock and ledgers — and helps field teams take orders on the go.',
    offer: ['Setup and connection to Tally', 'User and access configuration', 'Training for owners and sales teams'],
    services: ['business-management-solutions', 'tally-integration'],
  },
  {
    id: 'live-keeping',
    name: 'Live Keeping',
    byline: 'an IndiaMART company',
    logo: liveKeepingLogo,
    category: 'Tally on mobile',
    description:
      'Access Tally reports on your phone, share invoices and ledgers with customers in a tap, and keep an eye on the business from anywhere.',
    offer: ['Setup and connection to Tally', 'Configuration for your reports', 'Training and support'],
    services: ['business-management-solutions', 'tally-integration'],
  },
  {
    id: 'credflow',
    name: 'CredFlow',
    logo: credflowLogo,
    category: 'Receivables automation',
    description:
      'Automated payment reminders and receivables tracking connected to Tally, helping businesses follow up consistently and get paid faster.',
    offer: ['Setup and connection to Tally', 'Reminder workflows configured', 'Team onboarding'],
    services: ['business-management-solutions'],
  },
  {
    id: 'vyapar',
    name: 'Vyapar',
    logo: vyaparLogo,
    category: 'Billing & accounting app',
    description:
      'A simple GST billing, inventory and accounting app designed for small businesses and shops that want to get invoicing right from day one.',
    offer: ['Plan selection and setup', 'Invoice and stock configuration', 'Training for your staff'],
    services: ['business-management-solutions', 'gst-accounting-solutions'],
  },
];
