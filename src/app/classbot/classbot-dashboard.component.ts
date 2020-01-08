import {OnInit} from '@angular/core';
import {ClassbotService} from '../services/classbot.service';
import {CalendarDay, Classe, Venue} from '../types/classbot';
import {MatDialog} from '@angular/material/dialog';
import {ClassbotBookingConfirmComponent} from '../classbot-booking-confirm/classbot-booking-confirm.component';

export abstract class ClassbotDashboardComponent implements OnInit {

  venues: Venue[];
  users: string[];
  selectedUser: string;
  venueSelected: string;
  credits: number;
  calendar: CalendarDay[] = [];
  view_more = false;
  fetching = false;
  user_upcoming: CalendarDay[] = [];
  today: Date;
  weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor(private classbotService: ClassbotService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getVenues();
    this.getUsers();
    this.classbotService.bookingChanged.subscribe(() => this.refresh());
  }

  openBookDialog(classe: Classe): void {
    if ((classe.bookable) || (classe.my_status === 'booked')) {
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

  private resetUser(): void {
    this.credits = undefined;
    this.selectedUser = undefined;
    this.calendar = [];
    this.venueSelected = undefined;
    this.view_more = false;
    this.user_upcoming = [];
    this.fetching = false;
  }

  private setUser(name, mobile): void {
    this.calendar = [];
    this.credits = undefined;
    this.fetching = true;
    this.classbotService.loginUser(name).subscribe(credits => this.credits = credits);
    this.classbotService.getClassPassUpcoming(name, mobile).subscribe(calendar => {
      this.user_upcoming = calendar;
      this.calendar = calendar;
      this.fetching = false;
    });
    this.selectedUser = name;
    this.venueSelected = undefined;
    this.view_more = false;
    this.today = new Date();
  }

  private getCalendar(): void {
    this.calendar = [];
    if (this.venueSelected !== undefined) {
      this.fetching = true;
      this.classbotService.getClassPassCalendar(this.selectedUser, this.venueSelected, this.view_more).subscribe(calendar => {
        this.calendar = calendar;
        this.fetching = false;
      });
    } else {
      this.calendar = this.user_upcoming;
    }
  }

  private viewMore(): void {
    this.view_more = true;
    this.getCalendar();
  }

  private is_today(dateString: string): boolean {
    return this.today.toISOString().split('T')[0] === dateString;
  }

  private refresh(): void {
    this.getCalendar();
  }

}
