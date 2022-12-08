import { Invoice } from './types.ts';
import { usd } from './usd.ts';

export function renderHtmlStatement(data: Invoice) {
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
