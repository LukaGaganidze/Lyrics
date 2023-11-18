// GET ARTIST BY ID
interface ExternalUrls {
  spotify: string;
}

interface Followers {
  href: null | string;
  total: number;
}

interface Image {
  height: number;
  url: string;
  width: number;
}

export interface GetArtistByIDType {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

// SEARCH ARTIST
interface ArtistImage {
  height: number;
  url: string;
  width: number;
}

interface ExternalUrls {
  spotify: string;
}

interface Followers {
  href: string | null;
  total: number;
}

interface ArtistItem {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: ArtistImage[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface GetArtistBySearchType {
  artists: {
    href: string;
    items: ArtistItem[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
  };
}
