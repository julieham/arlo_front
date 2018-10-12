export class Recap {
  category: string;
  euro_amount: number;
  total_budget: string;

  constructor(category, euros_amount, total_budget) {
    this.category = category;
    this.euro_amount = euros_amount;
    this.total_budget = total_budget;
  }
}
