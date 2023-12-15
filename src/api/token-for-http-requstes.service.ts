import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  map,
  Observable,
  of,
  shareReplay,
  switchMap,
} from 'rxjs';
import { TokenValidResponseType } from './apiTypes/token/token-types';

@Injectable({
  providedIn: 'root',
})
export class TokenForHttpRequstesService {
  constructor(private http: HttpClient) {}

  apiTokenManager(): Observable<string | null> {
    if (localStorage.getItem('acessToken')) {
      return of(localStorage.getItem('acessToken'));
    } else {
      return this.updateToken();
    }
  }

  updateToken() {
    // Make the API call and store token in local storage
    const apiCallForToken = this.http
      .post<TokenValidResponseType>(`https://accounts.spotify.com/api/token`, {
        // body is in interceptor
      })
      .pipe(
        // triming because I only need token
        map((res) => {
          localStorage.setItem('acessToken', res.access_token);
          return res.access_token;
        }),
        shareReplay()
      );

    return apiCallForToken;
  }
}
