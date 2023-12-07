import { Injectable } from '@angular/core';

import { environment } from 'src/enviroment/enviroment';
import { HttpClient } from '@angular/common/http';

import { WorldvideTracks } from '../apiTypes/topChartTracks/top-chart-worldwide-tracks-type';
import {
  BehaviorSubject,
  Observable,
  forkJoin,
  map,
  shareReplay,
  switchMap,
} from 'rxjs';
import { SearchTracksService } from '../tracks/search-tracks.service';

import { filteredWorldwideTracks } from '../apiTypes/topChartTracks/top-chart-worldwide-tracks-type';

@Injectable({
  providedIn: 'root',
})
export class GetTopChartTracksWorlwideService {
  // Behaviurs subject for state management
  private tracksChartBSub$ = new BehaviorSubject<filteredWorldwideTracks[]>([]);

  // return observable because behaviur subject is mutable from outside
  private artistsChart$: Observable<filteredWorldwideTracks[]> =
    this.tracksChartBSub$.asObservable();

  constructor(
    private http: HttpClient,
    private searchTrackSer: SearchTracksService
  ) {}

  getTracks(): Observable<filteredWorldwideTracks[]> {
    // if behaviur subject is not empty it means that  tehre is no reason to call for http request
    if (this.tracksChartBSub$.getValue().length !== 0) {
      return this.artistsChart$;
    } else {
      //  else if it is empty we  nee to fetche data from backend server
      return this.http
        .get<WorldvideTracks>(
          `${environment.apiUrl_lastFM}?method=chart.gettoptracks&limit=25&api_key=${environment.API_KEY_lastFM}&format=${environment.Format_lastFM}`
        )
        .pipe(
          map((res) => {
            const topTracks = res.tracks.track;
            const modifiedTracks = topTracks.map((track) => {
              return {
                artist: track.artist.name,
                song: track.name,
              };
            });

            // Use forkJoin to concurrently fetch data for all artists
            return forkJoin(
              modifiedTracks.map((artist) =>
                this.searchTrackSer.searchForTrack(artist.song)
              )
            );
          }),
          switchMap((responses) => responses),
          map((res) => {
            const data: filteredWorldwideTracks[] = res.map((data) => {
              const trackData = data.tracks.items[0];
              return {
                track_Id: trackData.id,
                img_large: trackData.album.images[0].url,
                img_sml: trackData.album.images[2].url,
                artist: trackData.artists[0].name,
                song: trackData.name,
                spot_link: trackData.external_urls.spotify,
              };
            });

            this.tracksChartBSub$.next(data);
            return data;
          }),
          shareReplay()
        );
    }
  }
}
