import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ReferenceNameMakerServiceService} from '../services/reference-name-maker-service.service';
import {CategoryService} from '../services/category.service';
import {category_icons} from '../types/transaction';


export interface DialogData {
  id: string;
  bank_name: string;
}

@Component({
  selector: 'app-reference-name-maker',
  templateUrl: './reference-name-maker.component.html',
  styleUrls: ['./reference-name-maker.component.css']
})

export class ReferenceNameMakerComponent implements OnInit {

  categories: string[];
  icons = category_icons;

  constructor(private referenceNameMakerService: ReferenceNameMakerServiceService,
              private categoryService: CategoryService,
              public dialogRef: MatDialogRef<ReferenceNameMakerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe( categories => {
      this.categories = categories;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(newReferenceForm: NgForm) {
    this.referenceNameMakerService.createReference(newReferenceForm.value, this.data.id).subscribe();
    this.dialogRef.close();
  }

}
