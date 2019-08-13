import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Transaction} from '../../types/transaction';

@Component({
  selector: 'app-transactions-filter',
  templateUrl: './transactions-filter.component.html',
  styleUrls: ['./transactions-filter.component.css']
})
export class TransactionsFilterComponent implements OnInit {

  @Input() transactions: Transaction[];
  categoryList: string[];
  filter_active = false;
  private category: FormControl = new FormControl();

  constructor() {
  }

  ngOnInit() {
  }

  filterClick() {
    const available_categories = new Set();
    this.transactions.forEach(transaction => available_categories.add(transaction.category));
    // @ts-ignore
    this.categoryList = Array.from(available_categories.values()).sort();
    this.filter_active = !this.filter_active;
  }

  onSelectionChange() {
    console.log(this.category.value);
  }
}
