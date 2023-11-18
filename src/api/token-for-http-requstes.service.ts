import { Injectable, OnDestroy } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/env/environment';
import { map, Subscription, BehaviorSubject } from 'rxjs';
import { TokenValidResponseType } from './apiTypes/token/token-types';

@Injectable({
  providedIn: 'root',
})
export class TokenForHttpRequstesService implements OnDestroy {
  // live api access token (recieving token from backend or from local storage)
  acessTokenBSubj = new BehaviorSubject<string>('');

  // subscription for toke api call
  private tokenSubscription!: Subscription;

  constructor(private http: HttpClient) {}

  // function to retrieve token for http req calls
  apiTokenMaganger() {
    // api token stored in local storage
    const apiAcessToken = localStorage.getItem('acessToken');

    // if we already have api token we store it in local storage and next it to acessTokenBsubj
    if (apiAcessToken) {
      this.acessTokenBSubj.next(apiAcessToken);
    } else {
      // if we dont have access token then we call backend and retrieve the api token
      // set headers
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
            return res.access_token;
          })
        );

      // 1) subscribing to http observable
      // 2) setting item to lcoal storage
      // 1) next behaviur subject for live updated token
      this.tokenSubscription = apiCallForToken.subscribe((token: string) => {
        localStorage.setItem('acessToken', token);
        this.acessTokenBSubj.next(token);
      });
    }
  }

  // unsubscribing
  ngOnDestroy(): void {
    this.tokenSubscription.unsubscribe();
  }
}
