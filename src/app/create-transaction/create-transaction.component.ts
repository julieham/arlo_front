import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CreateTransactionService} from '../services/create-transaction.service';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {

  constructor(private createTransactionService: CreateTransactionService) { }

  ngOnInit() {
  }

  onSubmit(newTransactionForm: NgForm) {
    this.createTransactionService.createTransaction(newTransactionForm.value).subscribe();
  }

}
