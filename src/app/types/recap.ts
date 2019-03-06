export class Recap {
  category: string;
  euro_amount: number;
  total_budget: number;
  spent: number;
  remaining: number;
  over: number;

  constructor(category, euro_amount, total_budget) {
    this.category = category;
    this.euro_amount = euro_amount;
    this.total_budget = total_budget;
  }
}
