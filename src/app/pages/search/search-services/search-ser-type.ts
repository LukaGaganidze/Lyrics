// ALBUMS
interface Artist {
  artist_name: string;
  artist_id: string;
}
interface Image {
  height: number;
  url: string;
  width: number;
}

export interface ModifiedAlbumsSearchResp {
  filter: string;
  album_type: string;
  id: string;
  img: Image[];
  album_name: string;
  release_date: string;
  total_tracks: number;
  artists: Artist[];
}

// ARTISTS
export interface ModifiedArtistsSearchResp {
  type: string;
  followers: number;
  genres: string[];
  artist_id: string;
  images: Image[];
  artist_name: string;
  popularity: number;
  spotify_URL: string;
}
// export interface ModifiedArtistsSearchResp {
//  -- type: string;
//  -- followers: number;
//  -- genres: string[];
//  -- artist_id: string;
//   images: Image[];
//   -- artist_name: string;
//   popularity: number;
//   spotify_URL: string;
// }

// TRACK
interface TrackArtist {
  name: string;
  id: string;
}

export interface ModifiedTracksSearchResp {
  type: string;
  album_imgs: Image[];
  explicit: boolean;
  track_spotify_URL: string;
  track_ID: string;
  track_name: string;
  popularity: number;
  album_name: string;
  album_ID: string;
  artists: TrackArtist[];
}
