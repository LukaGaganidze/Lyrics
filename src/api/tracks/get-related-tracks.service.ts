import { Injectable } from '@angular/core';
import { TokenForHttpRequstesService } from '../token-for-http-requstes.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';
import {
  RelatedTracksHTTPResponse,
  TrackDataTransformedResponse,
} from '../apiTypes/tracks/related-tracks-types';

@Injectable({
  providedIn: 'root',
})
export class GetRelatedTracksService {
  constructor(
    private accessToeknSer: TokenForHttpRequstesService,
    private http: HttpClient
  ) {}

  relatedTracks(id: string): Observable<TrackDataTransformedResponse[]> {
    return this.accessToeknSer.apiTokenManager().pipe(
      switchMap((token) => {
        const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', 'Bearer ' + token);

        return this.http
          .get<RelatedTracksHTTPResponse>(
            environment.apiUrl + `/v1/recommendations?seed_tracks=` + id,
            {
              headers,
            }
          )
          .pipe(
            map((res) => {
              const tracks: TrackDataTransformedResponse[] = res.tracks.map(
                (track) => {
                  return {
                    track_album: {
                      track_album_type: track.album.album_type,
                      track_album_artists: track.album.artists,
                      track_album_spotify_url:
                        track.album.external_urls.spotify,
                      track_album_id: track.album.id,
                      track_album_name: track.album.name,
                      track_album_release_date: track.album.release_date,
                    },
                    track_atrists: track.artists.map((artist) => {
                      return {
                        track_artist_on_spot: artist.external_urls.spotify,
                        track_artist_followers_on_spot: artist.followers?.total,
                        track_artist_genres: artist.genres,
                        track_artist_id: artist.id,
                        track_artist_name: artist.name,
                        track_artist_popularity: artist.popularity,
                        track_artist_type: artist.type,
                      };
                    }),
                    track_info: {
                      track_info_duration: track.duration_ms,
                      track_info_sporify_URL: track.external_urls.spotify,
                      track_info_ID: track.id,
                      track_info_name: track.name,
                      track_info_popularity: track.popularity,
                    },
                  };
                }
              );

              return tracks;
            })
          );
      })
    );
  }
}
