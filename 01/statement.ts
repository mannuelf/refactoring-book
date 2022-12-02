import { amountFor } from './amountFor.ts';
import { invoice } from './data/invoice.ts';
import { playFor } from './playFor.ts';
import { totalVolumeCredits } from './totalVolumeCredits.ts';
import { usd } from './usd.ts';

export function statement() {
  console.log('💵 generating statement 💵');

  let totalAmount = 0;
  let result = `Statement for ${invoice.customer}\n`;

  for (const perf of invoice.performances) {
    result += `${playFor(perf).name}: ${usd(amountFor(perf, playFor(perf)))} (${perf.audience} seats)\n`;
    totalAmount += amountFor(perf, playFor(perf));
  }

  result += `Amount owed is ${usd(totalAmount)}\n`;
  result += `You earned ${totalVolumeCredits(invoice)} credits\n`;

  return result;
}
