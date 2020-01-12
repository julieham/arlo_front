import {Component, Inject, OnInit} from '@angular/core';
import {ClassbotService} from '../services/classbot.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Classe} from '../types/classbot';

@Component({
  selector: 'app-classbot-booking-confirm',
  templateUrl: './classbot-booking-confirm.component.html',
  styleUrls: ['./classbot-booking-confirm.component.css']
})
export class ClassbotBookingConfirmComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private classbotService: ClassbotService,
              public dialogRef: MatDialogRef<ClassbotBookingConfirmComponent>) {
  }

  ngOnInit() {
  }

  bookNow(classe: Classe, user: string) {
    this.classbotService.bookNow(classe, user).subscribe();
    this.dialogRef.close();
  }

  bookLater(classe: Classe, user: string) {
    this.classbotService.bookLater(classe, user).subscribe();
    this.dialogRef.close();
  }

  cancelBooked(classe: Classe, user: string) {
    this.classbotService.cancelBooked(classe, user).subscribe();
    this.dialogRef.close();
  }

  cancelScheduled(classe: Classe, user: string) {
    this.classbotService.cancelScheduled(classe, user).subscribe();
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
