const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Convert `*word*` markers to gold serif accents (HTML-escaped). */
export const richTitle = (s: string) => escapeHtml(s).replace(/\*(.+?)\*/g, '<em class="accent">$1</em>');

/** Remove accent markers for plain-text contexts (meta tags, schema). */
export const plainTitle = (s: string) => s.replace(/\*/g, '');
