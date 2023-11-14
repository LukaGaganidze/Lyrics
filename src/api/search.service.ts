import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/env/environment';

import { ApiStoreResposseService } from './api-store-resposse.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private accesstoken = '';

  constructor(
    private http: HttpClient,
    private apiStoreSer: ApiStoreResposseService
  ) {
    this.apiStoreSer.liveToken.subscribe((token: string) => {
      this.accesstoken = token;
    });
  }

  async search(searchInput: string) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.accesstoken);

    this.http
      .get(
        `https://api.spotify.com/v1/search?q=` + searchInput + '&type=artist',
        {
          headers,
        }
      )
      .subscribe(
        (data) => {
          // Handle the response data here
          console.log('Search Response:', data);
        },
        (error) => {
          // Handle errors here
          console.error('Search Error:', error);
        }
      );
  }
}
