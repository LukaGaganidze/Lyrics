import { Injectable, OnDestroy } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenForHttpRequstesService } from '../token-for-http-requstes.service';

import { GetAlbumBySearchType } from '../apiTypes/albums/albums-types';

import { environment } from 'src/enviroment/enviroment';
import { Observable, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SearchAlbumsService {
  constructor(
    private http: HttpClient,
    private tokenSer: TokenForHttpRequstesService
  ) {}

  // http request based on user input
  searchForAlbum(searchInput: string): Observable<GetAlbumBySearchType> {
    return this.tokenSer.apiTokenManager().pipe(
      switchMap((token) => {
        const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', 'Bearer ' + token);

        return this.http.get<GetAlbumBySearchType>(
          environment.apiUrl +
            `/v1/search?q=` +
            searchInput +
            '&type=album&limit=10&offset=0',
          {
            headers,
          }
        );
      })
    );
  }
}
