// GET TRACK BY ID
interface ExternalUrls {
  spotify: string;
}

interface Image {
  url: string;
  height: number;
  width: number;
}

interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
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
  type: string;
  uri: string;
  artists: Artist[];
}

interface ExternalIds {
  isrc: string;
}

interface ExternalUrls {
  spotify: string;
}

export interface GetTrackByIDType {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}

// MODIFIED GET BY ID
interface Track_modified {
  track_duration: number;
  track_spot: string;
  track_id: string;
  track_name: string;
  track_popularity: number;
  track_type: string;
  track_explicit: boolean;
  track_preview: string | null;
}

interface TrackArtist_modified {
  track_artist_ID: string;
  track_artist_name: string;
  track_artist_spot: string;
}

interface TrackAlbumArtist_modified {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface TrackAlbum_modified {
  track_album_artist: TrackAlbumArtist_modified[];
  track_album_type: string;
  track_album_spotify: string;
  track_album_id: string;
  track_album_image: string;
  track_album_name: string;
  track_album_release_date: string;
  track_album_total_tracks: number;
}

export interface GetTrackData_modified {
  track: Track_modified;
  track_artists_arr: TrackArtist_modified[];
  track_album: TrackAlbum_modified;
}

// SEARCH TRACK
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

interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface TrackExternalIds {
  isrc: string;
  ean: string;
  upc: string;
}

interface Track {
  artists: Artist[];
  album: Album;
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: TrackExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: Record<string, never>;
  restrictions: {
    reason: string;
  };
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}

export interface SearchTrackType {
  tracks: {
    href: string;
    items: Track[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
  };
}
