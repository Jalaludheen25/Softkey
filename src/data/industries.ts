import type { ImageMetadata } from 'astro';
import retail from '@/assets/images/retail.jpg';
import distribution from '@/assets/images/distribution.jpg';
import manufacturing from '@/assets/images/manufacturing.jpg';
import pharma from '@/assets/images/pharma.jpg';
import construction from '@/assets/images/construction.jpg';
import hospitality from '@/assets/images/hospitality.jpg';
import trading from '@/assets/images/trading.jpg';
import professional from '@/assets/images/professional-services.jpg';

export type Industry = { name: string; icon: string; text: string; image: ImageMetadata; alt: string };

/** Typical business types that TallyPrime and its ecosystem support. */
export const INDUSTRIES: Industry[] = [
  { name: 'Retail & Supermarkets', icon: 'store', text: 'Fast counter billing, barcode-based stock and daily sales reports.', image: retail, alt: 'Brightly stocked supermarket aisle' },
  { name: 'Wholesale & Distribution', icon: 'truck', text: 'Godown-wise stock, order processing and outstanding follow-up.', image: distribution, alt: 'Large warehouse with racks of boxed stock' },
  { name: 'Manufacturing', icon: 'factory', text: 'Bill of materials, job work, production and stock valuation.', image: manufacturing, alt: 'Automated manufacturing line with robotic arms' },
  { name: 'Pharma & Healthcare', icon: 'pill', text: 'Batch and expiry tracking with GST-compliant invoicing.', image: pharma, alt: 'Capsules spilling from a pill bottle on an orange background' },
  { name: 'Construction & Real Estate', icon: 'hard-hat', text: 'Project-wise costing, material tracking and contractor payments.', image: construction, alt: 'Construction workers on a building site' },
  { name: 'Hotels & Restaurants', icon: 'utensils-crossed', text: 'Billing integrations, purchase control and GST reports.', image: hospitality, alt: 'Customer paying at a café counter' },
  { name: 'Import, Export & Trading', icon: 'ship', text: 'Multi-currency accounting and shipment-wise costing.', image: trading, alt: 'Container ship being loaded at a port' },
  { name: 'Professional Services', icon: 'briefcase', text: 'Client billing, TDS, receivables and MIS reports.', image: professional, alt: 'Modern open-plan office with people at work' },
];
