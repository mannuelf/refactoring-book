import { amountFor } from './amountFor.ts';
import invoice from './data/invoice.ts';
import { playFor } from './playFor.ts';

export function statement() {
  console.log('💵 generating statement 💵');

  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.customer}\n`;

  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format;

  for (const perf of invoice.performances) {
    // add volume credits
    volumeCredits += Math.max(perf.audience - 30, 0);
    // add extra credit for every ten comedy attendees
    if ('comedy' === playFor(perf).type) volumeCredits += Math.floor(perf.audience / 5);

    // print line for this order
    result += `${playFor(perf).name}: ${format(amountFor(perf, playFor(perf)) / 100)} (${perf.audience} seats)\n`;
    totalAmount += amountFor(perf, playFor(perf));
  }

  result += `Amount owed is ${format(totalAmount / 100)}\n`;
  result += `You earned ${volumeCredits} credits\n`;

  return result;
}
