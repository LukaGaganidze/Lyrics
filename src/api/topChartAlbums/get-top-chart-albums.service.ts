import { Injectable } from '@angular/core';
import { environment } from 'src/enviroment/enviroment';
import { FilteredTopChartAlbums } from '../apiTypes/topChartAlbums/top-chart-albums';

import { HttpClient } from '@angular/common/http';
import { AlbumsResponse } from '../apiTypes/topChartAlbums/top-chart-albums';
import { BehaviorSubject, Observable, map, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetTopChartAlbumsService {
  // state  management  for  less api  calls
  private albumsChartBSub$ = new BehaviorSubject<FilteredTopChartAlbums[]>([]);

  private albumsChartObs$ = this.albumsChartBSub$.asObservable();

  constructor(private http: HttpClient) {}

  // getting top chart albums  based  on fm on resposne
  getTopAlbums(): Observable<FilteredTopChartAlbums[]> {
    if (this.albumsChartBSub$.getValue().length > 0) {
      return this.albumsChartObs$;
    } else {
      // http GET  request  to get  tracks
      return this.http
        .get<AlbumsResponse>(
          `${environment.apiUrl_lastFM}?method=tag.gettopalbums&tag=disco&limit=100&api_key=${environment.API_KEY_lastFM}&format=${environment.Format_lastFM}`
        )
        .pipe(
          map((res) => {
            // foramtting data  for  response
            const arrayOfAlbums = res.albums.album;

            // filtered  data
            const modifiedAlbumsData: FilteredTopChartAlbums[] =
              arrayOfAlbums.map((data) => {
                return {
                  rank: data['@attr'].rank,
                  image: data.image,
                  album_name: data.name,
                  artist: data.artist.name,
                };
              });

            this.albumsChartBSub$.next(modifiedAlbumsData);
            return modifiedAlbumsData;
          }),
          shareReplay()
        );
    }
  }
}
