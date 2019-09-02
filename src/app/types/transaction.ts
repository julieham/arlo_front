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


export class Transaction {
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
  type: string;
  deposit: string;
}

export class Transactions {

  items: Transaction[];
  private allItems: Transaction[];
  private linkedFilter;
  private categoriesFilter: string[] = [];

  constructor() {
    this.allItems = this.items = [];
  }

  public setItems(transactions: Transaction[]): Transactions {
    if (transactions.length !== 0) {
      this.allItems = this.items = transactions;
    }
    return this;
  }

  public filterLinked(hideLinked: boolean): void {
    this.linkedFilter = hideLinked;
    this.applyFilters();
  }

  public filterByCategories(categories: string[]): void {
    this.categoriesFilter = categories;
    this.applyFilters();
  }

  public getAvailableCategories(): string[] {
    const available_categories = new Set();
    this.allItems.forEach(transaction => available_categories.add(transaction.category));
    return Array.from(available_categories.values()).sort() as string[];
  }

  private applyFilters(): void {
    this.items = this.allItems.filter(item => {
      return this.hideLinkCriteria(item);
    });

    if (this.categoriesFilterIsNotEmpty()) {
      this.items = this.items.filter(item => {
        return this.displayCategoryCriteria(item);
      });
    }
  }

  private hideLinkCriteria(transaction: Transaction): boolean {
    return this.linkedFilter ? !transaction.linked : true;
  }

  private displayCategoryCriteria(transaction: Transaction): boolean {
    return this.categoriesFilter.includes(transaction.category);
  }

  private categoriesFilterIsNotEmpty() {
    return this.categoriesFilter.length !== 0;
  }
}

export interface Cycles {
  all_cycles: string[];
  current_cycle: string;
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
  'Plane': 'fas fa-plane',
  '-': 'fas fa-question',
  'Link': 'fas fa-link',
  'Friends': 'fas fa-users',
  'Gifts': 'fas fa-gift',
  'Sports': 'fas fa-quidditch',
  'Apple': 'fab fa-apple',
  'Christmas': 'fas fa-candy-cane',
  'Lunchr Buffer': 'fab fa-cc-mastercard'
};
