import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay, switchMap, toArray } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';

import { SearchArtistsService } from '../artists/search-artists.service';
import { TopArtistsResponse } from '../apiTypes/topChartArtist/top-chart-artist-types';
import { ModifiedArtist } from '../apiTypes/topChartArtist/top-chart-artist-types';
import { GetArtistBySearchType } from '../apiTypes/artists/artists-types';
import { topChartArtistDataType } from '../apiTypes/topChartArtists/get-top-chart-artist-types';

@Injectable({
  providedIn: 'root',
})
export class GetTopChartArtistService {
  constructor(
    private http: HttpClient,
    private searchArtistSer: SearchArtistsService
  ) {}

  // აქ ვიყენებ last.fm API-ს იმისთვის, რომ წამოვიღო პოპულალაური მომღერლბის სახელები და შემდეგ SPORTIFY API ს თან გავაკეთო ინტეგრაცია.

  // მომღერლის სახელი last.fm --> SPORTIFY API თითოეულ სახელზე API ქოლი

  getTopArtists(): Observable<topChartArtistDataType[]> {
    return this.http
      .get<TopArtistsResponse>(
        'https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=5&api_key=6d692582e285f3020c9bc6b31ca38e09&format=json'
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
        shareReplay(),
        switchMap((responses) => responses),
        toArray(),
        map((resp) => {
          return resp[0].map((artist) => {
            return {
              id: artist.artists.items[0].id,
              name: artist.artists.items[0].name,
              image: artist.artists.items[0].images[0].url,
              popularity: artist.artists.items[0].popularity,
              spotify: artist.artists.items[0].external_urls.spotify,
              genre: artist.artists.items[0].genres[0],
            };
          });
        }),
        shareReplay()
      );
  }
}
