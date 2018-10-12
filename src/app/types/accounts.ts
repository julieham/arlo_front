export class Accounts {
  public static ACCOUNTS = ['T_N26', 'J_N26', 'Cash'];
}

export class AccountMetadata {
  account: string;
  finalAmount: number;
  finalCurrency: string;

  constructor(account, balance, currency) {
    this.account = account;
    this.finalAmount = balance;
    this.finalCurrency = currency;
  }
}
