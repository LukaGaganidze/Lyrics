import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiStoreResposseService {
  liveToken = new BehaviorSubject<string>('');

  constructor() {}

  setToken(token: string) {
    this.liveToken.next(token);
  }
}
