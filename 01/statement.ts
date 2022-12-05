import { amountFor } from './amountFor.ts';
import { playFor } from './playFor.ts';
import { totalVolumeCredits } from './totalVolumeCredits.ts';
import { Invoice, PlayPerformance, Plays } from './types.ts';
import { usd } from './usd.ts';

export function statement(invoice: Invoice, plays: Plays) {
  const statementData: Invoice = {
    customer: '',
    performances: [],
  };

  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);

  function enrichPerformance(aPerformance: PlayPerformance) {
    const result: PlayPerformance = Object.assign({}, aPerformance);
    result.play = playFor(result);
    return result;
  }

  return renderPlaintText(statementData, plays);
}

function renderPlaintText(data: Invoice, plays: Plays) {
  console.log('💵 generating plain text statement 💵');
  let totalAmount = 0;
  let result = `Statement for ${data.customer}\n`;

  for (const perf of data.performances) {
    result += `${playFor(perf).name}: ${usd(amountFor(perf, playFor(perf)))} (${perf.audience} seats)\n`;
    totalAmount += amountFor(perf, playFor(perf));
  }

  result += `Amount owed is ${usd(totalAmount)}\n`;
  result += `You earned ${totalVolumeCredits(data)} credits\n`;

  return result;
}
