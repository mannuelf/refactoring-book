import { plays } from './01/data/plays.ts';
import { statement } from './01/statement.ts';
import { invoice } from './01/data/invoice.ts';

const toBePaid = statement(invoice, plays);

console.log(toBePaid);
