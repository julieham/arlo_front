import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from '../types/transaction';
import {SetCategoryService} from '../services/set-category.service';

@Component({
  selector: 'app-set-category',
  templateUrl: './set-category.component.html',
  styleUrls: ['./set-category.component.css']
})
export class SetCategoryComponent implements OnInit {

  categoryInput = '-';
  @Input() transactions: Transaction[];

  constructor(private setCategoryService: SetCategoryService) { }

  ngOnInit() {
  }

  onApply() {
    this.transactions.forEach(transaction => {
        transaction.category = this.categoryInput;
      });

    this.setCategoryService.setCategory().subscribe();
    }
}
