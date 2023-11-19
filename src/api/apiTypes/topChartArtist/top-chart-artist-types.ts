interface Image {
  '#text': string;
  size: 'small' | 'medium' | 'large' | 'extralarge' | 'mega';
}

interface Artist {
  name: string;
  playcount: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: string;
  image: Image[];
}

export interface TopArtistsResponse {
  artists: {
    artist: Artist[];
    '@attr': {
      page: string;
      perPage: string;
      total: string;
      totalPages: string;
    };
  };
}

export interface ModifiedArtist {
  name: string;
  listeners: string;
}
