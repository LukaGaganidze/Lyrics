interface Image {
  '#text': string;
  size: 'small' | 'medium' | 'large' | 'extralarge';
}

interface Artist {
  name: string;
  mbid: string;
  url: string;
}

interface Track {
  name: string;
  mbid: string; // You might want to replace this with a more appropriate type
  url: string;
  artist: Artist;
  image: Image[];
}

interface TrackAttributes {
  '@attr': {
    rank: string;
  };
}

interface TopAlbumItem {
  name: string;
  mbid: string;
  url: string;
  artist: Artist;
  image: Image[];
  '@attr': {
    rank: string;
  };
}

export interface AlbumsResponse {
  albums: {
    '@attr': {
      page: string;
      perPage: string;
      tag: string;
      total: string;
      totalPages: string;
    };
    album: TopAlbumItem[];
  };
}

export interface FilteredTopChartAlbums {
  rank: string;
  image: Image[];
  album_name: string;
  artist: string;
}
//
