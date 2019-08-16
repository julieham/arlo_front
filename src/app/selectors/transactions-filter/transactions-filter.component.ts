import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-transactions-filter',
  templateUrl: './transactions-filter.component.html',
  styleUrls: ['./transactions-filter.component.css']
})
export class TransactionsFilterComponent implements OnInit {

  @Input() categories: string[];

  filter_active = false;
  hideLinked = true;
  private category: FormControl = new FormControl();

  @Output() hideLinkedStatus: EventEmitter<boolean> = new EventEmitter();
  @Output() filterByCategories: EventEmitter<string[]> = new EventEmitter();

  constructor() {
  }


  ngOnInit() {
  }

  filterClick() {
    this.filter_active = !this.filter_active;
  }

  onSelectionChange() {
    this.filterByCategories.emit(this.category.value);
  }

  hideLinkedClick() {
    this.hideLinked = !this.hideLinked;
    this.hideLinkedStatus.emit(this.hideLinked);
  }
}
