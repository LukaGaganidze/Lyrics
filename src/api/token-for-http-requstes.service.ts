import { Injectable, OnDestroy } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/env/environment';
import { map, Subscription, BehaviorSubject, Observable, of } from 'rxjs';
import { TokenValidResponseType } from './apiTypes/token/token-types';

@Injectable({
  providedIn: 'root',
})
export class TokenForHttpRequstesService {
  private apiAcessToken = localStorage.getItem('acessToken');
  tokenValid$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  apiTokenManager(): Observable<string> {
    if (this.apiAcessToken && this.tokenValid$.getValue()) {
      return of(this.apiAcessToken);
    } else {
      return this.updateToken();
    }
  }

  updateToken() {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    // Set request body
    const requestBody = `grant_type=client_credentials&client_id=${environment.CLIENT_ID}&client_secret=${environment.CLIENT_SECRET}`;

    // Make the API call and store token in local storage
    const apiCallForToken = this.http
      .post<TokenValidResponseType>(
        `https://accounts.spotify.com/api/token`,
        requestBody,
        {
          headers,
        }
      )
      .pipe(
        // triming because I only need token
        map((res) => {
          this.tokenValid$.next(true);
          localStorage.setItem('acessToken', res.access_token);
          return res.access_token;
        })
      );

    return apiCallForToken;
  }
}
