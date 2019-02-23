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
}

export class CategoryColors {

  static CATEGORIES_COLORS: { [name: string]: string } = {
    'Home': 'salmon',
    'Transports': 'orange',
    'Health': 'yellow',
    'Sports': 'green',
    'Snacks': 'duck',
    'Restaurants': 'duck',
    'Fancy foods': 'blue',
    'Food': 'blue',
    'Shopping': 'violet',
    'Fun': 'pink',
    'Laundry': 'brown',
    'Bills': 'brown'
  };
}
