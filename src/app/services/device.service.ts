import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private isMobileResolution: boolean;

  constructor() {
    this.isMobileResolution = window.innerWidth < 1400;
  }

  public getIsMobileResolution(): boolean {
    return this.isMobileResolution;
  }
}
