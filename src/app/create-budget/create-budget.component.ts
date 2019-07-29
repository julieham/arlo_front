import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-budget',
  templateUrl: './create-budget.component.html',
  styleUrls: ['./create-budget.component.css']
})
export class CreateBudgetComponent implements OnInit {

  names = ['caca', 'pipi', 'popo'];
  budgetForm = this.builder.group({
      budgets: this.builder.array([])
    }
  );

  constructor(private builder: FormBuilder) {
  }

  get budgets() {
    return this.budgetForm.get('budgets') as FormArray;
  }

  ngOnInit() {
    this.names.forEach(name => {
      this.addBudget(name);
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
      amount: ['', Validators.compose([Validators.min(0.01), Validators.required])]
    });

    this.budgets.push(budget);
  }
}
