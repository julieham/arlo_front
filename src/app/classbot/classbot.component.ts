import {Component, OnInit} from '@angular/core';
import {ClassbotService} from '../services/classbot.service';
import {Classe, Venue} from '../types/classbot';
import {MatDialog} from '@angular/material/dialog';
import {ClassbotBookingConfirmComponent} from '../classbot-booking-confirm/classbot-booking-confirm.component';

@Component({
  selector: 'app-classbot',
  templateUrl: './classbot.component.html',
  styleUrls: ['./classbot.component.scss']
})
export class ClassbotComponent implements OnInit {

  venues: Venue[];
  users: string[];
  classes: Classe[] = [];
  selectedUser: string;
  venueSelected: string;
  token: string;

  constructor(private classbotService: ClassbotService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getVenues();
    this.getUsers();
  }

  openBookDialog(classe: Classe): void {
    if (classe.bookable) {
      this.dialog.open(ClassbotBookingConfirmComponent, {
        data: {
          classe: classe,
          user: this.selectedUser
        }
      });
    }
  }

  private getVenues(): void {
    this.classbotService.getClassPassVenues().subscribe(venues => this.venues = venues);
  }

  private getUsers(): void {
    this.classbotService.getClassPassUsers().subscribe(users => this.users = users);
  }

  private setUser(name): void {
    this.token = '';
    this.selectedUser = name;
    this.classbotService.loginUser(name).subscribe(token => this.token = token);
    this.resetClasses();
    this.venueSelected = undefined;
  }

  private resetClasses(): void {
    this.classes = [];
  }

  private getSchedule(): void {
    const now: Date = new Date();
    console.log(now);
    if (this.venueSelected !== undefined) {
      this.classbotService.getClassPassSchedule(this.selectedUser, this.venueSelected).subscribe(classes => this.classes = classes);
    }
  }

  private getCPSchedule(): void {
    this.classbotService.getCPSchedule(this.token).subscribe(classes => console.log(classes));
  }


}
