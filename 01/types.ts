export interface IInvoice {
  customer: string;
  performances: PlayPerformance[];
  totalAmount: number;
  totalVolumeCredits: number;
}
export interface IPlays {
  [key: string]: Play;
}

export type Play = { name: string; type: string };

export type PlayPerformance = {
  playID: string;
  audience: number;
  play: Play;
  amount: number;
  volumeCredits: number;
};
