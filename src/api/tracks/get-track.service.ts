import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { TokenForHttpRequstesService } from '../token-for-http-requstes.service';
import { environment } from 'src/env/environment';

import { GetTrackByIDType } from '../apiTypes/tracks/track-types';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetTrackService implements OnDestroy {
  // 1h sessiona api access token
  private accesstoken: string = '';
  private tokenSubscription!: Subscription;

  constructor(
    private accessToeknSer: TokenForHttpRequstesService,
    private http: HttpClient
  ) {
    // store token to accesstoken
    this.tokenSubscription = this.accessToeknSer.acessTokenBSubj.subscribe(
      (token) => {
        this.accesstoken = token;
      }
    );
  }

  // get track by track id
  getTrack(id: string) {
    // api call headers
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.accesstoken);

    // get call
    this.http.get<GetTrackByIDType>(environment.apiUrl + `/v1/tracks/` + id, {
      headers,
    });
  }

  // unsubscriing
  ngOnDestroy(): void {
    this.tokenSubscription.unsubscribe();
  }
}
