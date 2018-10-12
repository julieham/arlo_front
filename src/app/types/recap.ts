export class Recap {
  category: string;
  euros_amount: number;
  total_budget: string;

  constructor(category, euros_amount, total_budget) {
    this.category = category;
    this.euros_amount = euros_amount;
    this.total_budget = total_budget;
  }
}
