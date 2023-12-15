import { Injectable } from '@angular/core';
import { GetTrackService } from 'src/api/tracks/get-track.service';
import { Observable, map } from 'rxjs';
import { GetTrackData_modified } from 'src/api/apiTypes/tracks/track-types';

@Injectable({
  providedIn: 'root',
})
export class TracksPageHelperService {
  currentTrackId!: string;

  constructor(private trackById: GetTrackService) {}

  getTrackData(id: string): Observable<GetTrackData_modified> {
    return this.trackById.getTrack(id).pipe(
      map((res) => {
        const modifiedTrackData: GetTrackData_modified = {
          track: {
            track_duration: res.duration_ms,
            track_spot: res.external_urls.spotify,
            track_id: res.id,
            track_name: res.name,
            track_popularity: res.popularity,
            track_type: res.type,
            track_explicit: res.explicit,
            track_preview: res.preview_url,
          },
          track_artists_arr: res.artists.map((artist) => {
            return {
              track_artist_ID: artist.id,
              track_artist_name: artist.name,
              track_artist_spot: artist.external_urls.spotify,
            };
          }),
          track_album: {
            track_album_artist: res.album.artists,
            track_album_type: res.album.album_type,
            track_album_spotify: res.album.external_urls.spotify,
            track_album_id: res.album.id,
            track_album_image: res.album.images[0].url,
            track_album_name: res.album.name,
            track_album_release_date: res.album.release_date,
            track_album_total_tracks: res.album.total_tracks,
          },
        };

        return modifiedTrackData;
      })
    );
  }
}
