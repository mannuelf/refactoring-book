import { PerformanceCalculator } from './PerformanceCalculator.ts';
import type { Invoice, Play, PlayPerformance, Plays } from './types.ts';

export function createStatementData(invoice: Invoice, plays: Plays) {
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
    const calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance));
    const result: PlayPerformance = Object.assign({}, aPerformance);

    result.play = playFor(result);
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;

    return result;
  }

  function playFor(aPerformance: PlayPerformance) {
    return plays[aPerformance.playID];
  }

  function totalAmount(invoice: Invoice): number {
    // Replace loop with pipeline
    return invoice.performances.reduce((total, p) => total + p.amount, 0);
  }

  function totalVolumeCredits(invoice: Invoice): number {
    // Replace loop with pipeline
    return invoice.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }

  return statementData;
}

function createPerformanceCalculator(aPerformance: PlayPerformance, aPlay: Play) {
  switch (aPlay.type) {
    case 'tragedy':
      return new TragedyCalculator(aPerformance, aPlay);
    case 'comedy':
      return new ComedyCalculator(aPerformance, aPlay);
    default:
      throw new Error(`unknown type: ${aPlay.type}`);
  }
}

class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 40000;
    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30);
    }
    return result;
  }

  get volumeCredits(): number {
    return super.volumeCredits + Math.floor(this.performance.audience / 5);
  }
}
class ComedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 30000;
    if (this.performance.audience > 20) {
      result += 10000 + 500 * (this.performance.audience - 20);
    }
    result += 300 * this.performance.audience;
    return result;
  }

  get volumeCredits() {
    return super.volumeCredits + Math.floor(this.performance.audience / 5);
  }
}
