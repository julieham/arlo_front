export class Accounts {
  public static ACCOUNTS = ['Cash', 'HB', 'TR', 'SUL'];
}

export class AccountMetadata {
  account: string;
  finalAmount: number;
  finalCurrency: string;
  local_balance: number;
}
