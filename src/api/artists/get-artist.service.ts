import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TokenForHttpRequstesService } from '../token-for-http-requstes.service';
import { environment } from 'src/enviroment/enviroment';

import {
  GetArtistByIDType,
  ModifiedArtistId,
} from '../apiTypes/artists/artists-types';

import { Injectable, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subscription,
  map,
  shareReplay,
  switchMap,
  tap,
} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GetArtistService {
  private artistBSub$ = new BehaviorSubject({});
  artistInfo = this.artistBSub$.asObservable();

  constructor(
    private accessToeknSer: TokenForHttpRequstesService,
    private http: HttpClient
  ) {}

  // get atrist with artrist id
  getArtist(id: string): Observable<ModifiedArtistId> {
    return this.accessToeknSer.apiTokenManager().pipe(
      switchMap((token) => {
        const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', 'Bearer ' + token);

        return this.http.get<GetArtistByIDType>(
          environment.apiUrl + `/v1/artists/` + id,
          {
            headers,
          }
        );
      }),
      map((res) => {
        return {
          spotify: res.external_urls.spotify,
          followers: res.followers.total,
          genres: res.genres,
          image: res.images[0],
          name: res.name,
          popularity: res.popularity,
        };
      }),
      shareReplay()
    );
  }
}
