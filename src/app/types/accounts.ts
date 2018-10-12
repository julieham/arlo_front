export class Accounts {
  public static ACCOUNTS = ['T_N26', 'J_N26', 'Cash'];
}

export class AccountMetadata {
  account: string;
  balance: number;
  currency: string;

  constructor(account, balance, currency) {
    this.account = account;
    this.balance = balance;
    this.currency = currency;
  }
}
