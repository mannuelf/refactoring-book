import type { Invoice } from './types.ts';

export function totalVolumeCredits(invoice: Invoice): number {
  // Replace loop with pipeline
  return invoice.performances.reduce((total, p) => total + p.volumeCredits, 0);
}
