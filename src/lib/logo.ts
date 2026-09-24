import type { Partner } from '@/data/partners';

/**
 * Logo lockups differ in shape, so equal height is not equal visual weight.
 * Scaling by aspect ratio^0.35 sits between "same height" (favours wide marks)
 * and "same area" (shrinks them too far), which is how logo walls are balanced.
 */
export function logoScale(partner: Partner): number {
  const { width, height } = partner.logo;
  return +(Math.pow(height / width, 0.35) * (partner.logoTweak ?? 1)).toFixed(3);
}
