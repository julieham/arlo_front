import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {SettingsService} from '../services/settings.service';

@Component({
  selector: 'app-n26-authenticate-confirm',
  templateUrl: './n26-authenticate-confirm.component.html',
  styleUrls: ['./n26-authenticate-confirm.component.css']
})
export class N26AuthenticateConfirmComponent implements OnInit {

  n26_status: boolean;

  constructor(private dialogRef: MatDialogRef<N26AuthenticateConfirmComponent>,
              private settingsService: SettingsService) {
  }

  ngOnInit() {
    this.settingsService.getN26AuthStatus().subscribe(account_status =>
      this.n26_status = account_status.is_connected);
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onConfirmAuthentication() {
    this.settingsService.setupN26_2FA().subscribe();
    this.dialogRef.close();
  }

}
