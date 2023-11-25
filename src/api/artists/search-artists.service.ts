import { Injectable, OnDestroy } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenForHttpRequstesService } from '../token-for-http-requstes.service';

import { GetArtistBySearchType } from '../apiTypes/artists/artists-types';

import { environment } from 'src/enviroment/enviroment';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchArtistsService {
  constructor(
    private http: HttpClient,
    private tokenSer: TokenForHttpRequstesService
  ) {}

  // get tracks by search input
  searchForArtist(searchInput: string): Observable<GetArtistBySearchType> {
    return this.tokenSer.apiTokenManager().pipe(
      switchMap((token) => {
        const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', 'Bearer ' + token);

        // http get request
        return this.http.get<GetArtistBySearchType>(
          environment.apiUrl +
            `/v1/search?q=` +
            searchInput +
            '&type=artist&limit=10&offset=0',
          {
            headers,
          }
        );
      })
    );
  }
}
