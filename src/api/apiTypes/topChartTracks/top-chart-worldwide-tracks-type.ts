type Streamable = {
  '#text': string;
  fulltrack: string;
};

type Artist = {
  name: string;
  mbid: string;
  url: string;
};

type Image = {
  '#text': string;
  size: string;
};

type Track = {
  name: string;
  duration: string;
  playcount: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: Streamable;
  artist: Artist;
  image: Image[];
};

type PageInfo = {
  country: string;
  page: string;
  perPage: string;
  totalPages: string;
  total: string;
};

export type WorldvideTracksResponse = {
  '@attr': PageInfo;
  track: Track[];
};
