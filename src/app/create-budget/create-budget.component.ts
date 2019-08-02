import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {category_icons} from '../types/transaction';
import {CategoryService} from '../services/category.service';

@Component({
  selector: 'app-create-budget',
  templateUrl: './create-budget.component.html',
  styleUrls: ['./create-budget.component.css']
})
export class CreateBudgetComponent implements OnInit {

  names = ['caca', 'pipi', 'popo'];
  icons = category_icons;
  categories: string[];

  budgetForm = this.builder.group({
      budgets: this.builder.array([])
    }
  );

  constructor(private builder: FormBuilder,
              private categoryService: CategoryService) {
  }

  get budgets() {
    return this.budgetForm.get('budgets') as FormArray;
  }

  ngOnInit() {
    this.names.forEach(name => {
      this.addBudget(name);
    });
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  onSubmit() {
    console.log(this.budgetForm.value);
  }

  removeBudget(index: number): void {
    this.budgets.removeAt(index);
  }

  private addBudget(name: string): void {
    const budget = this.builder.group({
      name: [name, Validators.required],
      amount: ['', [Validators.min(0.01), Validators.required]]
    });

    this.budgets.push(budget);
  }
}
