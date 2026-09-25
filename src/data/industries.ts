import type { ImageMetadata } from 'astro';
// Each industry is shown with the TallyPrime screen that matters most to it
// (official screenshots — see src/assets/tally/SOURCES.json).
import stockSummary from '@/assets/tally/stock-summary.png';
import godownSummary from '@/assets/tally/godown-summary.png';
import stockItems from '@/assets/tally/stock-items.png';
import batchInventory from '@/assets/tally/batch-inventory.png';
import costCentre from '@/assets/tally/cost-centre.png';
import salesInvoice from '@/assets/tally/sales-invoice.png';
import purchaseDashboard from '@/assets/tally/dashboard-purchase.png';
import balanceSheet from '@/assets/tally/balance-sheet.png';

export type Industry = { name: string; icon: string; text: string; image: ImageMetadata; alt: string; screen: string };

/** Typical business types that TallyPrime and its ecosystem support. */
export const INDUSTRIES: Industry[] = [
  {
    name: 'Retail & Supermarkets',
    icon: 'store',
    text: 'Fast counter billing, barcode-based stock and daily sales reports.',
    image: stockSummary,
    alt: 'TallyPrime stock summary listing items with quantity, rate and value',
    screen: 'Stock summary',
  },
  {
    name: 'Wholesale & Distribution',
    icon: 'truck',
    text: 'Godown-wise stock, order processing and outstanding follow-up.',
    image: godownSummary,
    alt: 'TallyPrime godown summary showing stock held at each location',
    screen: 'Godown summary',
  },
  {
    name: 'Manufacturing',
    icon: 'factory',
    text: 'Bill of materials, job work, production and stock valuation.',
    image: stockItems,
    alt: 'TallyPrime stock item masters with opening quantities and rates',
    screen: 'Stock items',
  },
  {
    name: 'Pharma & Healthcare',
    icon: 'pill',
    text: 'Batch and expiry tracking with GST-compliant invoicing.',
    image: batchInventory,
    alt: 'TallyPrime company features with batch and expiry date options enabled',
    screen: 'Batch & expiry',
  },
  {
    name: 'Construction & Real Estate',
    icon: 'hard-hat',
    text: 'Project-wise costing, material tracking and contractor payments.',
    image: costCentre,
    alt: 'TallyPrime cost centre report showing project-wise figures',
    screen: 'Cost centres',
  },
  {
    name: 'Hotels & Restaurants',
    icon: 'utensils-crossed',
    text: 'Billing integrations, purchase control and GST reports.',
    image: salesInvoice,
    alt: 'TallyPrime sales invoice entry screen',
    screen: 'Sales invoice',
  },
  {
    name: 'Import, Export & Trading',
    icon: 'ship',
    text: 'Multi-currency accounting and shipment-wise costing.',
    image: purchaseDashboard,
    alt: 'TallyPrime purchase dashboard showing orders outstanding and purchase accounts',
    screen: 'Purchase dashboard',
  },
  {
    name: 'Professional Services',
    icon: 'briefcase',
    text: 'Client billing, TDS, receivables and MIS reports.',
    image: balanceSheet,
    alt: 'TallyPrime balance sheet showing sources and application of funds',
    screen: 'Balance sheet',
  },
];
