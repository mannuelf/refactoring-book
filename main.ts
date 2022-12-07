import { invoice } from './01/data/invoice.ts';
import { plays } from './01/data/plays.ts';
import { htmlStatement, textStatement } from './01/statement.ts';

const toBePaid = textStatement(invoice, plays);
const toBePaidHtml = htmlStatement(invoice, plays);

console.log('💻 Generating plain text statement\n', toBePaid);
console.log('🌍 Generating HTML statement\n', toBePaidHtml);
