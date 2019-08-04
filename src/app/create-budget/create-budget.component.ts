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

  icons = category_icons;
  categories: string[];
  cycles: string[] = [];
  selected = '';

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

  getBudgets(cycle: string): void {
    this.accountsInfosService.getBudgets(cycle).subscribe(budgets => {
      this.fillBudgets(budgets);
    });
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

  private addBudget(): void {
    this.addFilledBudget('', 0);
  }

  private addFilledBudget(name: string, amount: number): void {
    const budget = this.builder.group({
      name: [name, Validators.required],
      amount: [amount, [Validators.min(0.01), Validators.required]]
    });

    this.budgets.push(budget);
  }

}
