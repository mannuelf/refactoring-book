import { createStatementData } from './createStatementData.ts';
import { Invoice, Plays } from './types.ts';
import { usd } from './usd.ts';

export function textStatement(invoice: Invoice, plays: Plays) {
  return renderPlaintText(createStatementData(invoice, plays));
}
export function htmlStatement(invoice: Invoice, plays: Plays) {
  return renderHtmlStatement(createStatementData(invoice, plays));
}

function renderPlaintText(data: Invoice) {
  let result = `Statement for ${data.customer}\n`;

  for (const perf of data.performances) {
    result += `${perf.play.name}: ${usd(perf.amount)} (${perf.audience} seats)\n`;
  }

  result += `Amount owed is ${usd(data.totalAmount)}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;

  return result;
}

function renderHtmlStatement(data: Invoice) {
  let result = ``;
  result = `<h1>Statement for ${data.customer}</h1>`;
  result += `<table>\n`;
  result += `
            <tr><th>Play</th></tr>
            <tr><th>Seats</th></tr>
            <tr><th>Costs</th></tr>
            `;
  for (const perf of data.performances) {
    result += `<tr>
                <td>${perf.play.name}</td>
                <td>${perf.audience}</td>
                <td>${usd(perf.amount)}</td>
              </tr>\n`;
  }
  result += `</table>\n`;
  result += `<p>Amount owed is ${usd(data.totalAmount)}</p>\n`;
  result += `<p>You earned ${data.totalVolumeCredits} credits</p>\n`;

  return result;
}
