export interface RecurringDeposit {
  name: string;
  amount: number;
  category: string;
  active: boolean;
}

export interface DepositState {
  amount: number;
  deposit: string;
}

