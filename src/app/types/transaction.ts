export interface Transaction {
  id: string;
  name: string;
  amount: number;
  category: string;
  pending: boolean;
  originalAmount: number;
  originalCurrency: string;
  method: string;
  cycle: string;
  linked: boolean;
  bank_name: string;
  date: string;
  auto: boolean;
}

