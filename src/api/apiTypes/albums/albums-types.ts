// GET ALBUM BY ID TYPES
interface ExternalUrls {
  spotify: string;
}

interface AlbumImage {
  height: number;
  url: string;
  width: number;
}

interface ArtistItem {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface TrackItem {
  artists: ArtistItem[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  restrictions: {
    reason: string;
  };
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}

interface Tracks {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: TrackItem[];
}

interface Restrictions {
  reason: string;
}

interface CopyrightItem {
  text: string;
  type: string;
}

interface ExternalIds {
  isrc: string;
  ean: string;
  upc: string;
}

export interface GetAlbumByIDType {
  album_type: string;
  artists: ArtistItem[];
  available_markets: string[];
  copyrights: CopyrightItem[];
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  genres: string[];
  href: string;
  id: string;
  images: AlbumImage[];
  label: string;
  name: string;
  popularity: number;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  tracks: Tracks;
  type: string;
  uri: string;
  restrictions?: Restrictions;
}

// ALBUM SEARCH TYPES
interface ExternalUrls {
  spotify: string;
}

interface ArtistItem {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface AlbumImage {
  height: number;
  url: string;
  width: number;
}

interface AlbumItem {
  album_type: string;
  artists: ArtistItem[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: AlbumImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface GetAlbumBySearchType {
  albums: {
    href: string;
    items: AlbumItem[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
  };
}
