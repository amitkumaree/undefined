import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InAppMessageService {
  private isLoggedInShowHeader = new BehaviorSubject<boolean>(null);
  constructor() { }

  sendisLoggedInShowHeader(message: boolean) { this.isLoggedInShowHeader.next(message); }
  getisLoggedInShowHeader() { return this.isLoggedInShowHeader.asObservable(); }
}
