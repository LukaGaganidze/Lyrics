import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, filter, map, Subscription } from 'rxjs';

// search servicers
import { SearchAlbumsService } from 'src/api/albums/search-albums.service';
import { SearchArtistsService } from 'src/api/artists/search-artists.service';
import { SearchTracksService } from 'src/api/tracks/search-tracks.service';

// types
import { ModifiedAlbumsSearchResp } from './search-ser-type';
import { ModifiedArtistsSearchResp } from './search-ser-type';
import { ModifiedTracksSearchResp } from './search-ser-type';

@Injectable({
  providedIn: 'root',
})
export class SearcheManagerService implements OnDestroy {
  // created behaviur subject for state management
  // created  subscription for unsubscribing
  // created observable of imutability from outside

  // ALBUMS
  private AlbumsBSub$ = new BehaviorSubject<ModifiedAlbumsSearchResp[] | null>(
    []
  );
  private AlbumsSubscription!: Subscription;
  AlbumsObs$ = this.AlbumsBSub$.asObservable();

  // TRACKS
  private TracksBSub$ = new BehaviorSubject<ModifiedTracksSearchResp[] | null>(
    []
  );
  private TracksSubscription!: Subscription;
  TracksObs$ = this.TracksBSub$.asObservable();

  //  ARTISTS
  private ArtistsSub$ = new BehaviorSubject<ModifiedArtistsSearchResp[] | null>(
    []
  );
  private ArtistsSubscription!: Subscription;
  ArtistsObs$ = this.ArtistsSub$.asObservable();

  //  LOADER
  private SearchDataLoadingBSub$ = new BehaviorSubject<boolean>(false);
  SearchLoaderIndicator$ = this.SearchDataLoadingBSub$.asObservable();

  constructor(
    private searchAlb: SearchAlbumsService,
    private searchArtists: SearchArtistsService,
    private searchTracks: SearchTracksService
  ) {}

  // search function returns observable based on type of function call or observable which will resoleve to null
  onSearch(type: string, inputVal: string): void {
    if (type === 'album') {
      this.SearchDataLoadingBSub$.next(true);
      // ALBUMS OBS
      this.AlbumsSubscription = this.searchAlb
        .searchForAlbum(inputVal)
        .pipe(
          map((res) => {
            const albumsArrOf10 = res.albums.items;

            const modifiedAlbumsArr = albumsArrOf10.map((album) => {
              return {
                filter: 'AL',
                album_type: album.album_type,
                id: album.id,
                img: album.images,
                album_name: album.name,
                release_date: album.release_date,
                total_tracks: album.total_tracks,
                artists: album.artists.map((indArt) => {
                  return {
                    artist_name: indArt.name,
                    artist_id: indArt.id,
                  };
                }),
              };
            });
            return modifiedAlbumsArr;
          })
        )
        .subscribe((data) => {
          const filteredToDisplayOnlyAlbums = data.filter(
            (album) => album.album_type === 'album'
          );

          if (filteredToDisplayOnlyAlbums.length > 0) {
            this.AlbumsBSub$.next(filteredToDisplayOnlyAlbums);
          } else {
            this.AlbumsBSub$.next(null);
          }
          this.SearchDataLoadingBSub$.next(false);
        });
    } else if (type === 'artist') {
      this.SearchDataLoadingBSub$.next(true);
      // ARTISTS OBS
      this.TracksSubscription = this.searchArtists
        .searchForArtist(inputVal)
        .pipe(
          map((res) => {
            const artistsArrOf10 = res.artists.items;
            const modifiedArtistsArr = artistsArrOf10.map((artist) => {
              return {
                type: artist.type,
                followers: artist.followers.total,
                genres: artist.genres,
                artist_id: artist.id,
                images: artist.images,
                artist_name: artist.name,
                popularity: artist.popularity,
                spotify_URL: artist.external_urls.spotify,
              };
            });

            return modifiedArtistsArr;
          })
        )
        .subscribe((data) => {
          const filteredToDisplayOnlyArtists = data
            .filter((album) => album.type === 'artist')
            .filter((artist) => artist.images.length > 0);

          if (filteredToDisplayOnlyArtists.length > 0) {
            this.ArtistsSub$.next(filteredToDisplayOnlyArtists);
          } else {
            this.ArtistsSub$.next(null);
          }
          this.SearchDataLoadingBSub$.next(false);
        });
    } else if (type === 'track') {
      this.SearchDataLoadingBSub$.next(true);
      // TRACKS OBS
      this.TracksSubscription = this.searchTracks
        .searchForTrack(inputVal)
        .pipe(
          map((res) => {
            const tracksArrOf10 = res.tracks.items;
            console.log(tracksArrOf10);
            const modifiedTracksArr = tracksArrOf10.map((track) => {
              return {
                type: track.type,
                explicit: track.explicit,
                track_spotify_URL: track.external_urls.spotify,
                track_ID: track.id,
                track_name: track.name,
                popularity: track.popularity,
                album_name: track.album.name,
                album_ID: track.album.id,
                album_imgs: track.album.images,
                artists: track.artists.map((indArt) => {
                  return {
                    name: indArt.name,
                    id: indArt.id,
                  };
                }),
              };
            });
            return modifiedTracksArr;
          })
        )
        .subscribe((data) => {
          console.log(data);
          const filteredToDisplayOnlyTracks = data.filter(
            (album) => album.type === 'track'
          );

          if (filteredToDisplayOnlyTracks.length > 0) {
            this.TracksBSub$.next(filteredToDisplayOnlyTracks);
          } else {
            this.TracksBSub$.next(null);
          }
          this.SearchDataLoadingBSub$.next(false);
        });
    }
  }

  onRestartdata(): void {
    this.AlbumsBSub$.next([]);
    this.TracksBSub$.next([]);
    this.ArtistsSub$.next([]);
  }

  ngOnDestroy(): void {
    this.AlbumsSubscription.unsubscribe();
    this.TracksSubscription.unsubscribe();
    this.ArtistsSubscription.unsubscribe();
  }
}
