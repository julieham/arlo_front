export class Transaction {
  index: string;
  bank_name: string;
  amount: number;
  category: string;
  pending: boolean;
}

export class CategoryColors {

  static CATEGORIES_COLORS: { [name: string]: string } = {
    'Home': 'salmon',
    'Transports': 'orange',
    'Laundry': 'yellow',
    'Snacks': 'green',
    'Restaurants': 'duck',
    'Food': 'blue',
    'Sports': 'blue',
    'Fun': 'pink',
    'Bills': 'brown',
  };
}
