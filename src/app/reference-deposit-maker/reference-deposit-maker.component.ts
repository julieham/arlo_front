import {Component, Inject, OnInit} from '@angular/core';
import {category_icons} from '../types/transaction';
import {NgForm} from '@angular/forms';
import {ReferenceMakerService} from '../services/reference-maker.service';
import {CategoryService} from '../services/category.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '../reference-name-maker/reference-name-maker.component';

@Component({
  selector: 'app-reference-deposit-maker',
  templateUrl: './reference-deposit-maker.component.html',
  styleUrls: ['./reference-deposit-maker.component.css']
})
export class ReferenceDepositMakerComponent implements OnInit {

  categories: string[];
  icons = category_icons;

  constructor(private referenceMakerService: ReferenceMakerService,
              private categoryService: CategoryService,
              public dialogRef: MatDialogRef<ReferenceDepositMakerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(newReferenceForm: NgForm) {
    this.referenceMakerService.createDepositReference(newReferenceForm.value, this.data.id).subscribe();
    this.dialogRef.close();
  }

}
