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
    volumeCredits += volumeCreditsFor(perf);
    result += `${playFor(perf).name}: ${usd(amountFor(perf, playFor(perf)) / 100)} (${perf.audience} seats)\n`;
    totalAmount += amountFor(perf, playFor(perf));
  }

  result += `Amount owed is ${usd(totalAmount / 100)}\n`;
  result += `You earned ${volumeCredits} credits\n`;

  return result;
}
