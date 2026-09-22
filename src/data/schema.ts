import { SITE } from './site';

export type Crumb = { label: string; href?: string };

/** schema.org BreadcrumbList for a trail that starts at Home. */
export function breadcrumbSchema(crumbs: Crumb[], currentPath: string) {
  const items = [{ label: 'Home', href: '/' }, ...crumbs];
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: new URL(c.href ?? currentPath, SITE.url).href,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
