import { amountFor } from './amountFor.ts';
import { playFor } from './playFor.ts';
import totalAmount from './totalAmount.ts';
import { totalVolumeCredits } from './totalVolumeCredits.ts';
import { Invoice, Plays, PlayPerformance } from './types.ts';
import { usd } from './usd.ts';
import { volumeCreditsFor } from './volumeCreditsFor.ts';

export function statement(invoice: Invoice, plays: Plays) {
  const statementData: Invoice = {
    customer: '',
    performances: [],
    totalAmount: 0,
    totalVolumeCredits: 0,
  };

  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);

  function enrichPerformance(aPerformance: PlayPerformance) {
    const result: PlayPerformance = Object.assign({}, aPerformance);

    result.play = playFor(result);
    result.amount = amountFor(result);
    result.volumeCredits = volumeCreditsFor(result);

    return result;
  }

  return renderPlaintText(statementData, plays);
}

function renderPlaintText(data: Invoice, plays: Plays) {
  console.log('💵 generating plain text statement 💵');
  let result = `Statement for ${data.customer}\n`;

  for (const perf of data.performances) {
    result += `${perf.play.name}: ${usd(perf.amount)} (${perf.audience} seats)\n`;
  }

  result += `Amount owed is ${usd(data.totalAmount)}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;

  return result;
}
