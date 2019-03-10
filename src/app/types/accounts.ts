export class Accounts {
  name: string;
  this_cycle: number;
  all_times: number;
  currency: string;

  constructor(name, this_cycle, all_times, currency) {
    this.name = name;
    this.this_cycle = this_cycle;
    this.all_times = all_times;
    this.currency = currency;
  }
}

export class AccountMetadata {
  account_name: string;
  this_cycle: number;
  currency: string;
  all_times: number;
}
