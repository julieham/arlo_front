import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {category_icons} from '../types/transaction';
import {CategoryService} from '../services/category.service';
import {CycleService} from '../services/cycle.service';
import {AmountItem} from '../types/accounts';
import {AccountsInfosService} from '../services/accounts-infos.service';

@Component({
  selector: 'app-create-budget',
  templateUrl: './create-budget.component.html',
  styleUrls: ['./create-budget.component.css']
})

export class CreateBudgetComponent implements OnInit {

  // my_cycle = 'caca';
  icons = category_icons;
  categories: string[];
  cycles: string[] = [];
  selectedCycle = '';

  budgetForm = this.builder.group({
      budgets: this.builder.array([])
    }
  );

  constructor(private builder: FormBuilder,
              private categoryService: CategoryService,
              private cycleService: CycleService,
              private accountsInfosService: AccountsInfosService) {
  }

  get budgets() {
    return this.budgetForm.get('budgets') as FormArray;
  }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
    this.cycleService.getAllCycle().subscribe(cycles => {
      this.cycles = cycles.all_cycles;
    });
  }

  setSelectedCycle(cycle): void {
    this.selectedCycle = cycle;
    this.getBudgets(cycle);
  }

  onSubmit() {
    console.log(this.budgetForm.value);
  }

  removeBudget(index: number): void {
    this.budgets.removeAt(index);
  }

  private fillBudgets(budgets: AmountItem[]) {
    this.budgets.clear();
    budgets.forEach(amount => {
      this.addFilledBudget(amount.description, amount.amount);
    });
  }

  addBudget(): void {
    this.addFilledBudget('', 0);
  }

  private addFilledBudget(name: string, amount: number): void {
    const budget = this.builder.group({
      name: [name, Validators.required],
      amount: [amount, [Validators.min(0.01), Validators.required]]
    });

    this.budgets.push(budget);
  }

  private getBudgets(cycle: string): void {
    this.accountsInfosService.getBudgets(cycle).subscribe(budgets => {
      this.fillBudgets(budgets);
    });
  }

  getTotalAmount(): number {
    let total = 0;
    for (let i = 0; i < this.budgets.length; i++) {
      total += this.budgets.at(i).value.amount;
    }
    return total;
  }

}
