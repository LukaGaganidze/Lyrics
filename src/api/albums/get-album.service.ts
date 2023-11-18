import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TokenForHttpRequstesService } from '../token-for-http-requstes.service';
import { environment } from 'src/env/environment';

import { GetAlbumByIDType } from '../apiTypes/albums/albums-types';

import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GetAlbumService implements OnDestroy {
  // access token 1h
  private accesstoken: string = '';
  private acessTokenSubscription!: Subscription;

  constructor(
    private accessToeknSer: TokenForHttpRequstesService,
    private http: HttpClient
  ) {
    this.accessToeknSer.acessTokenBSubj.subscribe((token) => {
      this.accesstoken = token;
    });
  }

  // get request based on album id
  getAlbum(id: string) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.accesstoken);

    this.http.get<GetAlbumByIDType>(environment.apiUrl + `/v1/albums/` + id, {
      headers,
    });
  }

  // unsibscribing on destory
  ngOnDestroy(): void {
    this.acessTokenSubscription.unsubscribe();
  }
}
