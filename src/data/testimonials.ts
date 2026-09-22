/**
 * PLACEHOLDER CONTENT — the client has not supplied testimonials yet.
 * Replace each entry with a verified client review (with the client's permission)
 * and set TESTIMONIALS_ARE_PLACEHOLDERS to false to remove the on-page notice.
 */
export const TESTIMONIALS_ARE_PLACEHOLDERS = true;

export type Testimonial = { quote: string; name: string; role: string; location: string };

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Softkey moved our billing and stock from spreadsheets to TallyPrime without disrupting a single working day. Our staff were trained on our own items and invoices, so they were confident from the start.',
    name: 'Client name',
    role: 'Owner, retail business',
    location: 'Kannur',
  },
  {
    quote:
      'The custom invoice format and the outstanding report they built are now part of our daily routine. When something needs attention, a WhatsApp message is all it takes.',
    name: 'Client name',
    role: 'Accounts manager, distribution company',
    location: 'Mangaluru',
  },
  {
    quote:
      'Setting up e-invoicing and e-way bills inside Tally saved our team from re-entering data on the portal. The support has been patient and practical.',
    name: 'Client name',
    role: 'Partner, trading firm',
    location: 'Payyannur',
  },
];
