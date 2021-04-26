import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  private _btnStatus: boolean = false;

  get btnStatus(): boolean {
    return this._btnStatus;
  }

  set btnStatus(toggleBtn: boolean) {
    this._btnStatus = toggleBtn;
  }

  constructor() { }

  private emitChangeSource = new Subject<any>();
  changeEmitted = this.emitChangeSource.asObservable();
  emitChange(change: any) { this.emitChangeSource.next(change) }

}
