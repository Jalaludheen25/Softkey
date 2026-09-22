/**
 * Company information — transcribed from the client's business cards
 * (reference/softkey-card-dark.jpeg, reference/softkey-card-partners.jpeg).
 * Keep this file as the single source of truth for contact details.
 */

export const SITE = {
  name: 'Softkey Technologies',
  legalName: 'Softkey Technologies Pvt. Ltd.',
  legalNameLong: 'Softkey Technologies Private Limited',
  domain: 'tallygoldpartner.in',
  url: 'https://tallygoldpartner.in',
  tagline: 'Tally, Accounting & Business Management Solutions',
  description:
    'Softkey Technologies Pvt. Ltd. is a channel partner for Tally — offering TallyPrime licenses, implementation, customization, integration, AMC, cloud and training across Kannur, Payyannur and Mangaluru.',
  locale: 'en_IN',
  themeColor: '#061731',
} as const;

export const CONTACT = {
  whatsapp: {
    display: '9544 101 401',
    e164: '+919544101401',
    href: 'https://wa.me/919544101401',
  },
  phone: {
    display: '9846 901 101',
    e164: '+919846901101',
    href: 'tel:+919846901101',
  },
  email: {
    display: 'tallygoldpartner@gmail.com',
    href: 'mailto:tallygoldpartner@gmail.com',
  },
  /** Shown on the client's dark business card as the help-desk address. */
  supportEmail: {
    display: 'help.softkey@gmail.com',
    href: 'mailto:help.softkey@gmail.com',
  },
  website: {
    display: 'www.tallygoldpartner.in',
    href: 'https://tallygoldpartner.in',
  },
} as const;

/** Build a WhatsApp click-to-chat link with a pre-filled message. */
export const whatsappLink = (message = 'Hello Softkey Technologies, I would like to know more about your Tally services.') =>
  `${CONTACT.whatsapp.href}?text=${encodeURIComponent(message)}`;

/** Registered office, as printed on the client's dark business card. */
export const REGISTERED_OFFICE = {
  lines: ['Door No. 8/1, Naramkulangara', 'P.O. Kunhimangalam', 'Kannur – 670309'],
  streetAddress: 'Door No. 8/1, Naramkulangara, P.O. Kunhimangalam',
  locality: 'Kannur',
  region: 'Kerala',
  postalCode: '670309',
  country: 'IN',
} as const;

export type Location = {
  id: string;
  city: string;
  address: string;
  region: string;
  state: string;
  mapsQuery: string;
  /** Approximate coordinates, used only to place pins on the illustrative map. */
  lat: number;
  lng: number;
};

/** Branches — spelling exactly as printed on the client's card. */
export const LOCATIONS: Location[] = [
  {
    id: 'kannur',
    city: 'Kannur',
    address: 'Safa Center, Old Bus Stand',
    region: 'Kannur',
    state: 'Kerala',
    mapsQuery: 'Safa Center, Old Bus Stand, Kannur, Kerala',
    lat: 11.8745,
    lng: 75.3704,
  },
  {
    id: 'payyannur',
    city: 'Payyannur',
    address: 'Naramkulangara, Kunhimangalam',
    region: 'Kannur',
    state: 'Kerala',
    mapsQuery: 'Naramkulangara, Kunhimangalam, Kannur, Kerala 670309',
    lat: 12.0781,
    lng: 75.2203,
  },
  {
    id: 'mangaluru',
    city: 'Mangaluru',
    address: 'Crown Complex, Bunder',
    region: 'Dakshina Kannada',
    state: 'Karnataka',
    mapsQuery: 'Crown Complex, Bunder, Mangaluru, Karnataka',
    lat: 12.8658,
    lng: 74.8367,
  },
];

export const mapsLink = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Services', href: '/services/' },
  { label: 'Partners', href: '/partners/' },
  { label: 'Contact', href: '/contact/' },
];
