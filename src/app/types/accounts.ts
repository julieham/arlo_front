export class Accounts {
  acc_name: string;
  this_cycle: number;
  all_times: number;
  currency: string;
  manual: boolean;
}

export interface AmountItem {
  description: string;
  amount: number;
}

export interface Transfer {
  source: string;
  destination: string;
  amount: number;
}
