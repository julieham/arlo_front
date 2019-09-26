export interface AmountItem {
  description: string;
  amount: number;
  currency: string;
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

export interface AccountStatus {
  is_connected: boolean;
}
