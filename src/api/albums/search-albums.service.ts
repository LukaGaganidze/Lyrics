import { Injectable, OnDestroy } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenForHttpRequstesService } from '../token-for-http-requstes.service';

import { GetAlbumBySearchType } from '../apiTypes/albums/albums-types';

import { environment } from 'src/env/environment';
import { Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SearchAlbumsService implements OnDestroy {
  private accesstoken = '';
  private accessToeknSubscription!: Subscription;

  constructor(
    private http: HttpClient,
    private tokenSer: TokenForHttpRequstesService
  ) {
    // assigining  value to token acesstoken
    this.accessToeknSubscription = this.tokenSer.acessTokenBSubj.subscribe(
      (token: string) => {
        this.accesstoken = token;
      }
    );
  }

  // http request based on user input
  searchForAlbum(searchInput: string) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.accesstoken);

    this.http.get<GetAlbumBySearchType>(
      environment.apiUrl +
        `/v1/search?q=` +
        searchInput +
        '&type=album&limit=10&offset=0',
      {
        headers,
      }
    );
  }

  // unsubscribing on destroy
  ngOnDestroy(): void {
    this.accessToeknSubscription.unsubscribe();
  }
}
