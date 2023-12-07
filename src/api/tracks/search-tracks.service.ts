import { Injectable, OnDestroy } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenForHttpRequstesService } from '../token-for-http-requstes.service';

import { environment } from 'src/enviroment/enviroment';

import { SearchTrackType } from '../apiTypes/tracks/track-types';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchTracksService {
  constructor(
    private http: HttpClient,
    private tokenSer: TokenForHttpRequstesService
  ) {}

  searchForTrack(searchInput: string): Observable<SearchTrackType> {
    return this.tokenSer.apiTokenManager().pipe(
      switchMap((token) => {
        const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', 'Bearer ' + token);

        return this.http.get<SearchTrackType>(
          environment.apiUrl +
            `/v1/search?q=` +
            searchInput +
            '&type=track&limit=10&offset=0',
          {
            headers,
          }
        );
      })
    );
  }
}
