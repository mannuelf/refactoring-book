import { createStatementData } from './createStatementData.ts';
import { renderHtmlStatement } from './renderHtml.ts';
import { renderPlaintText } from './renderPlaintText.ts';
import { Invoice, Plays } from './types.ts';

export function textStatement(invoice: Invoice, plays: Plays) {
  return renderPlaintText(createStatementData(invoice, plays));
}
export function htmlStatement(invoice: Invoice, plays: Plays) {
  return renderHtmlStatement(createStatementData(invoice, plays));
}
