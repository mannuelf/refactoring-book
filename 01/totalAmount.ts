import type { Invoice } from './types.ts';

export default function totalAmount(invoice: Invoice): number {
  // Replace loop with pipeline
  return invoice.performances.reduce((total, p) => total + p.amount, 0);
}
