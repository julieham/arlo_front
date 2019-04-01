// class Category {
//   name: string;
//   private icon_name: string;
//
//   constructor(name: string) {
//     this.name = name;
//     this.icon_name = icons[name];
//     console.log('Category constructor');
//   }
//
//   public getIconName(): string {
//     return this.icon_name;
//   }
// }

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
  manual: boolean;
  account: string;

}

export const category_icons = {
  'Food': 'fas fa-apple-alt',
  'Restaurants': 'fas fa-utensils',
  'Laundry': 'fas fa-shower',
  'Snacks': 'fas fa-coffee',
  'Transports': 'fas fa-bicycle',
  'Home': 'fas fa-home',
  'Health': 'fas fa-heartbeat',
  'Bills': 'fas fa-file-invoice',
  'Fine Food': 'fas fa-store',
  'Shopping': 'fas fa-shopping-bag',
  'Fun': 'fas fa-theater-masks',
  'Input': 'fas fa-hand-holding-usd',
  'Deposit': 'fas fa-piggy-bank',
  '-': 'fas fa-question',
  'Link': 'fas fa-link'
};
