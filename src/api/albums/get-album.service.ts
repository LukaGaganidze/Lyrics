import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TokenForHttpRequstesService } from '../token-for-http-requstes.service';
import { environment } from 'src/env/environment';

import { GetAlbumByIDType } from '../apiTypes/albums/albums-types';

import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GetAlbumService {
  constructor(
    private accessToeknSer: TokenForHttpRequstesService,
    private http: HttpClient
  ) {}

  getAlbum(id: string): Observable<GetAlbumByIDType> {
    return this.accessToeknSer.apiTokenManager().pipe(
      switchMap((token) => {
        const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', 'Bearer ' + token);

        return this.http.get<GetAlbumByIDType>(
          environment.apiUrl + `/v1/albums/` + id,
          {
            headers,
          }
        );
      })
    );
  }
}
