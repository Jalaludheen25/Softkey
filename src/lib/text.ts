const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * Brand logos that can appear inside a heading via `{{tally}}` / `{{tallyprime}}`.
 * The alt text keeps the heading readable for screen readers and search engines.
 */
const LOGOS: Record<string, string> = {
  tally: '<img src="/brand/tally-script.svg" alt="Tally" class="title-logo" width="43" height="21" />',
  tallyprime: '<img src="/brand/tallyprime.svg" alt="TallyPrime" class="title-logo title-logo--prime" width="114" height="26" />',
};

/** Convert `*word*` to a gold serif accent and `{{tally}}` to the Tally logo (HTML-escaped). */
export const richTitle = (s: string) =>
  escapeHtml(s)
    .replace(/\*(.+?)\*/g, '<em class="accent">$1</em>')
    .replace(/\{\{(tally|tallyprime)\}\}/g, (_, key: string) => LOGOS[key]);

/** Plain text for meta tags, schema and anywhere HTML is not allowed. */
export const plainTitle = (s: string) =>
  s
    .replace(/\*/g, '')
    .replace(/\{\{tallyprime\}\}/g, 'TallyPrime')
    .replace(/\{\{tally\}\}/g, 'Tally');
