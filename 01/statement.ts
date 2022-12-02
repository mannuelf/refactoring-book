import { amountFor } from './amountFor.ts';
import invoice from './data/invoice.ts';
import { playFor } from './playFor.ts';
import { usd } from './usd.ts';
import { volumeCreditsFor } from './volumeCreditsFor.ts';

export function statement() {
  console.log('💵 generating statement 💵');

  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.customer}\n`;

  for (const perf of invoice.performances) {
    result += `${playFor(perf).name}: ${usd(amountFor(perf, playFor(perf)))} (${perf.audience} seats)\n`;
    totalAmount += amountFor(perf, playFor(perf));
  }

  for (const perf of invoice.performances) {
    volumeCredits += volumeCreditsFor(perf);
  }

  result += `Amount owed is ${usd(totalAmount)}\n`;
  result += `You earned ${volumeCredits} credits\n`;

  return result;
}
