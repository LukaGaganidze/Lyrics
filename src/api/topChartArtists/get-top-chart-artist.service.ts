import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay, switchMap, toArray } from 'rxjs/operators';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';

import { SearchArtistsService } from '../artists/search-artists.service';
import { TopArtistsResponse } from '../apiTypes/topChartArtist/top-chart-artist-types';
import { ModifiedArtist } from '../apiTypes/topChartArtist/top-chart-artist-types';
import { topChartArtistDataType } from '../apiTypes/topChartArtists/get-top-chart-artist-types';

import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class GetTopChartArtistService {
  // Behaviurs subject for state management
  private artistsChartBSub$ = new BehaviorSubject<topChartArtistDataType[]>([]);
  artistsChart$: Observable<topChartArtistDataType[]> =
    this.artistsChartBSub$.asObservable();

  constructor(
    private http: HttpClient,
    private searchArtistSer: SearchArtistsService
  ) {}

  // აქ ვიყენებ last.fm API-ს იმისთვის, რომ წამოვიღო პოპულალაური მომღერლბის სახელები და შემდეგ SPORTIFY API ს თან გავაკეთო ინტეგრაცია.
  // მომღერლის სახელი last.fm --> SPORTIFY API თითოეულ სახელზე API ქოლი

  getTopArtists(): Observable<topChartArtistDataType[]> {
    // if we have value in b sub then  there is  no need  to call for backend  for  data
    if (this.artistsChartBSub$.getValue().length > 0) {
      return this.artistsChart$;
    } else {
      // if there is no data the  we  call becaked  and  store the value in beahaviur subject and return the new  data  as  observable
      return this.http
        .get<TopArtistsResponse>(
          `${environment.apiUrl_lastFM}?method=chart.gettopartists&limit=25&api_key=${environment.API_KEY_lastFM}&format=${environment.Format_lastFM}`
        )
        .pipe(
          map((resp) => {
            const artists = resp.artists.artist;
            const modifiedArtistData: ModifiedArtist[] = artists.map(
              (artist) => ({
                name: artist.name,
                listeners: artist.listeners,
              })
            );
            // Use forkJoin to concurrently fetch data for all artists
            return forkJoin(
              modifiedArtistData.map((artist) =>
                this.searchArtistSer.searchForArtist(artist.name)
              )
            );
          }),
          switchMap((responses) => responses),
          toArray(),
          map((resp) => {
            console.log(resp);
            const artistData = resp[0].map((artist) => {
              return {
                id: artist.artists.items[0].id,
                name: artist.artists.items[0].name,
                image: artist.artists.items[0].images[0].url,
                popularity: artist.artists.items[0].popularity,
                spotify: artist.artists.items[0].external_urls.spotify,
                genre: artist.artists.items[0].genres[0],
              };
            });
            this.artistsChartBSub$.next(artistData);
            return artistData;
          }),
          shareReplay()
        );
    }
  }
}
