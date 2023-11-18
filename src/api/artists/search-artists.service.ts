import { Injectable, OnDestroy } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenForHttpRequstesService } from '../token-for-http-requstes.service';

import { GetArtistBySearchType } from '../apiTypes/artists/artists-types';

import { environment } from 'src/env/environment';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchArtistsService implements OnDestroy {
  // acess token
  private accesstoken = '';
  private accessTokenSubscription!: Subscription;

  constructor(
    private http: HttpClient,
    private tokenSer: TokenForHttpRequstesService
  ) {
    // asigning value to token variable
    this.accessTokenSubscription = this.tokenSer.acessTokenBSubj.subscribe(
      (token: string) => {
        this.accesstoken = token;
      }
    );
  }

  // get tracks by search input
  searchForTrack(searchInput: string) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.accesstoken);

    // http get request
    this.http.get<GetArtistBySearchType>(
      environment.apiUrl +
        `/v1/search?q=` +
        searchInput +
        '&type=artist&limit=10&offset=0',
      {
        headers,
      }
    );
  }

  // unsibscribing on destroy
  ngOnDestroy(): void {
    this.accessTokenSubscription.unsubscribe();
  }
}
