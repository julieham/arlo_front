import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ReferenceNameMakerServiceService} from '../services/reference-name-maker-service.service';


export interface DialogData {
  id: string;
}

@Component({
  selector: 'app-reference-name-maker',
  templateUrl: './reference-name-maker.component.html',
  styleUrls: ['./reference-name-maker.component.css']
})

export class ReferenceNameMakerComponent implements OnInit {

  categories: string[];

  constructor(private ReferenceNameMakerService: ReferenceNameMakerServiceService,
              public dialogRef: MatDialogRef<ReferenceNameMakerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit() {
    this.ReferenceNameMakerService.getAllCategories().subscribe( categories => {
      this.categories = categories;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(newReferenceForm: NgForm) {
    this.ReferenceNameMakerService.createReference(newReferenceForm.value, this.data.id).subscribe();
    this.dialogRef.close();
  }

}
