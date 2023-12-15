interface Seed {
  afterFilteringSize: number;
  afterRelinkingSize: number;
  href: string;
  id: string;
  initialPoolSize: number;
  type: string;
}

interface ExternalUrls {
  spotify: string;
}

interface Image {
  url: string;
  height: number;
  width: number;
}

interface Album {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: {
    reason: string;
  };
  type: string;
  uri: string;
  artists: Artist[];
}

interface Followers {
  href: string;
  total: number;
}

interface Artist {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

interface ExternalIds {
  isrc: string;
  ean: string;
  upc: string;
}

interface ExternalUrlsTrack {
  spotify: string;
}

interface LinkedFrom {}

interface Restrictions {
  reason: string;
}

interface Track {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrlsTrack;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: LinkedFrom;
  restrictions: Restrictions;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}

export interface RelatedTracksHTTPResponse {
  seeds: Seed[];
  tracks: Track[];
}

// piped transformed response data
interface TrackAlbumArtist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface TrackAlbum {
  track_album_type: string;
  track_album_artists: TrackAlbumArtist[];
  track_album_spotify_url: string;
  track_album_id: string;
  track_album_name: string;
  track_album_release_date: string;
}

interface TrackArtists {
  track_artist_on_spot: string;
  track_artist_id: string;
  track_artist_name: string;
  track_artist_type: string;
}

interface TrackInfo {
  track_info_duration: number;
  track_info_sporify_URL: string;
  track_info_ID: string;
  track_info_name: string;
  track_info_popularity: number;
}

export interface TrackDataTransformedResponse {
  track_album: TrackAlbum;
  track_atrists: TrackArtists[];
  track_info: TrackInfo;
}
