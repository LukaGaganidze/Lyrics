import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/env/environment';

import { ApiStoreResposseService } from './api-store-resposse.service';

@Injectable({
  providedIn: 'root',
})
export class GetTokenService {
  private accesstoken = '';

  constructor(
    private http: HttpClient,
    private apiStoreSer: ApiStoreResposseService
  ) {}

  getToken() {
    // set headers
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );

    // Set request body
    const requestBody = `grant_type=client_credentials&client_id=${environment.CLIENT_ID}&client_secret=${environment.CLIENT_SECRET}`;

    // Make the API call
    this.http
      .post<any>(`https://accounts.spotify.com/api/token`, requestBody, {
        headers,
      })
      .subscribe(
        (response) => {
          this.accesstoken = response.access_token;
          this.apiStoreSer.setToken(this.accesstoken);
        },
        (error) => {
          // Handle errors here
          console.error('Token Error:', error);
        }
      );
  }
}
