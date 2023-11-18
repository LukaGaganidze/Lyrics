import { Injectable, OnDestroy } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenForHttpRequstesService } from '../token-for-http-requstes.service';

import { environment } from 'src/env/environment';

import { SearchTrackType } from '../apiTypes/tracks/track-types';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchTracksService implements OnDestroy {
  // 1h api call access token
  private accesstoken = '';
  private tokenSubscription!: Subscription;

  constructor(
    private http: HttpClient,
    private tokenSer: TokenForHttpRequstesService
  ) {
    // token subscription assignig token value to acesstoken varible
    this.tokenSubscription = this.tokenSer.acessTokenBSubj.subscribe(
      (token: string) => {
        this.accesstoken = token;
      }
    );
  }

  searchForTrack(searchInput: string) {
    // api call header
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.accesstoken);

    // get http request
    this.http.get<SearchTrackType>(
      environment.apiUrl +
        `/v1/search?q=` +
        searchInput +
        '&type=track&limit=10&offset=0',
      {
        headers,
      }
    );
  }

  // unsubscribing subscriptions on destroy
  ngOnDestroy(): void {
    this.tokenSubscription.unsubscribe();
  }
}
