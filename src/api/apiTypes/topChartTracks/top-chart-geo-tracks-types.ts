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

type Attributes = {
  rank: string;
};

type Track = {
  name: string;
  duration: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: Streamable;
  artist: Artist;
  image: Image[];
  '@attr': Attributes;
};

type PageInfo = {
  country: string;
  page: string;
  perPage: string;
  totalPages: string;
  total: string;
};

export type GeoTracksResponse = {
  '@attr': PageInfo;
  track: Track[];
};
