export interface AmountItem {
  description: string;
  amount: number;
}

export interface Transfer {
  source: string;
  destination: string;
  amount: number;
}

export interface Month {
  dates: string[];
  cycles: string[];
  colors: number[];
}
