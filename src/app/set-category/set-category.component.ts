import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from '../transaction';

@Component({
  selector: 'app-set-category',
  templateUrl: './set-category.component.html',
  styleUrls: ['./set-category.component.css']
})
export class SetCategoryComponent implements OnInit {

  categoryInput = 'caca';
  @Input() transactions: Transaction[];

  constructor() { }

  ngOnInit() {
  }

  onApply() {
    this.transactions.forEach(transaction => {
        transaction.category = 'caca';
      });
    }
}
