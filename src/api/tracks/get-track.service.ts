import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { TokenForHttpRequstesService } from '../token-for-http-requstes.service';
import { environment } from 'src/enviroment/enviroment';

import { GetTrackByIDType } from '../apiTypes/tracks/track-types';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetTrackService {
  constructor(
    private accessToeknSer: TokenForHttpRequstesService,
    private http: HttpClient
  ) {}

  // get track by track id
  getTrack(id: string): Observable<GetTrackByIDType> {
    return this.accessToeknSer.apiTokenManager().pipe(
      switchMap((token) => {
        const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', 'Bearer ' + token);

        return this.http.get<GetTrackByIDType>(
          environment.apiUrl + `/v1/tracks/` + id,
          {
            headers,
          }
        );
      })
    );
  }
}
