import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  hideLinked = true;

  private category: FormControl = new FormControl();

  @Output() transactionsToDisplay: EventEmitter<Transaction[]> = new EventEmitter();

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

  displayTransactionByFilter(transaction: Transaction) {
    if (this.hideLinked && this.category.value !== null) {
      return !transaction.linked && this.category.value.includes(transaction.category);
    }
    if (this.hideLinked) {
      return !transaction.linked;
    }
    if (this.category.value !== null) {
      return this.category.value.includes(transaction.category);
    }
    return true;
  }

  private onSelectionChange() {
    this.emitTransactionsToDisplay();
  }

  private hideLinkedClick() {
    this.hideLinked = !this.hideLinked;
    this.emitTransactionsToDisplay();
  }

  private emitTransactionsToDisplay() {
    this.transactionsToDisplay.emit(this.transactions.filter(transaction => {
      return this.displayTransactionByFilter(transaction);
    }));
    console.log('emit');
    console.log(this.transactions.length);
  }
}
