import { createStatementData } from './createStatementData.ts';
import { Invoice, Plays } from './types.ts';
import { usd } from './usd.ts';

export function statement(invoice: Invoice, plays: Plays) {
  return renderPlaintText(createStatementData(invoice, plays));
}

function renderPlaintText(data: Invoice) {
  console.log('💵 generating plain text statement 💵');
  let result = `Statement for ${data.customer}\n`;

  for (const perf of data.performances) {
    result += `${perf.play.name}: ${usd(perf.amount)} (${perf.audience} seats)\n`;
  }

  result += `Amount owed is ${usd(data.totalAmount)}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;

  return result;
}
