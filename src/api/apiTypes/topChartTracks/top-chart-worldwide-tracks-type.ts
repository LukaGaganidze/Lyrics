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

export type WorldvideTracks = {
  tracks: {
    '@attr': PageInfo;
    track: Track[];
  };
};

export type filteredWorldwideTracks = {
  track_Id: String;
  img_large: String;
  img_sml: String;
  artist: String;
  song: String;
  spot_link: string;
};
