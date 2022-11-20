import { amountFor } from './amountFor.ts';
import invoice from './data/invoice.ts';
import plays from './data/plays.ts';

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
    const play = plays[perf.playID];

    // add volume credits
    volumeCredits += Math.max(perf.audience - 30, 0);
    // add extra credit for every ten comedy attendees
    if ('comedy' === play.type) volumeCredits += Math.floor(perf.audience / 5);

    // print line for this order
    result += `${play.name}: ${format(amountFor(perf, play) / 100)} (${
      perf.audience
    } seats)\n`;
    totalAmount += amountFor(perf, play);
  }

  result += `Amount owed is ${format(totalAmount / 100)}\n`;
  result += `You earned ${volumeCredits} credits\n`;

  return result;
}
