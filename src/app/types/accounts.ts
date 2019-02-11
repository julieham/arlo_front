export class Accounts {
  public static ACCOUNTS = ['Cash', 'HB', 'TR', 'SUL'];
}

export class AccountMetadata {
  account_name: string;
  this_cycle: number;
  currency: string;
  all_times: number;
}
