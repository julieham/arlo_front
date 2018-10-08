export class Transaction {
  id: string;
  bank_name: string;
  amount: number;
  category: string;
  pending: boolean;
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
