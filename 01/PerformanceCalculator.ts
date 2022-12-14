import { Play, PlayPerformance } from './types.ts';

export class PerformanceCalculator {
  performance: PlayPerformance;
  play: Play;

  constructor(aPerformance: PlayPerformance, aPlay: Play) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  get amount(): number {
    throw new Error('subclass responsibility');
  }

  get volumeCredits(): number {
    return Math.max(this.performance.audience - 30, 0);
  }
}
