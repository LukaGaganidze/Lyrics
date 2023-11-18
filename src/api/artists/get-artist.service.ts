import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TokenForHttpRequstesService } from '../token-for-http-requstes.service';
import { environment } from 'src/env/environment';

import { GetArtistByIDType } from '../apiTypes/artists/artists-types';

import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GetArtistService implements OnDestroy {
  // access token 1h
  private accesstoken: string = '';
  private tokenSubscription!: Subscription;

  constructor(
    private accessToeknSer: TokenForHttpRequstesService,
    private http: HttpClient
  ) {
    // asiginig access token val
    this.tokenSubscription = this.accessToeknSer.acessTokenBSubj.subscribe(
      (token) => {
        this.accesstoken = token;
      }
    );
  }

  // get atrist with artrist id
  getArtist(id: string) {
    // http requts header
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.accesstoken);

    // http get request
    this.http.get<GetArtistByIDType>(environment.apiUrl + `/v1/artists/` + id, {
      headers,
    });
  }

  // unsubscribing to subsciprion on destory
  ngOnDestroy(): void {
    this.tokenSubscription.unsubscribe();
  }
}
