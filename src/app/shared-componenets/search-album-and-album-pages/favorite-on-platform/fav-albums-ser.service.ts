import { Injectable } from '@angular/core';

interface LocalAlbumData {
  artist: String;
  album: String;
  year: Number;
  tracks: Number;
  img: String;
  about: String;
}

@Injectable({
  providedIn: 'root',
})
export class FavAlbumsSerService {
  albumsData: LocalAlbumData[] = [
    {
      artist: 'NF',
      album: 'CLOUDS (THE MIXTAPE)',
      year: 2021,
      tracks: 11,
      img: '../../../../../assets/albums/ourFavorites/nfc.jpg',
      about: `CLOUDS (THE MIXTAPE) is NF’s first mixtape and project release of
      2021 which comes almost two years after the release of his highly
      successful album The Search.`,
    },
    {
      artist: 'Juice WRLD',
      album: 'Legends Never Die',
      year: 2020,
      tracks: 21,
      img: '../../../../../assets/albums/ourFavorites/juice.jpg',
      about: `Juice WRLD’s first posthumous album, Legends Never Die, was originally rumored to be named The Outsiders based on a freestyle he did within an Instagram live, but was later confirmed to be Legends Never Die four days before the release.
      `,
    },
    {
      artist: 'J Cole',
      album: '4 Your Eyes Only',
      year: 2016,
      tracks: 10,
      img: '../../../../../assets/albums/ourFavorites/jcole4.jpg',
      about: `4 Your Eyez Only is the fourth studio album by J. Cole. The album unexpectedly made it to iTunes for pre-order on December 1, 2016. The project would be officially released December 9, 2016—the two-year anniversary of the release of Cole’s multi-platinum album 2014 Forest Hills Drive.`,
    },
    {
      artist: 'XXXTentacion',
      album: 'LOOK AT ME: THE ALBUM',
      year: 2022,
      tracks: 25,
      img: '../../../../../assets/albums/ourFavorites/xxxl.jpg',
      about: `Released as a double album, LOOK AT ME: THE ALBUM is XXXTENTACION’s third posthumous album following December 2019’s Bad Vibes Forever. This compilation of songs released throughout X’s career serves as a soundtrack to Look At Me.`,
    },
    {
      artist: 'J Cole',
      album: '2014 Forest Hills Drive',
      year: 2014,
      tracks: 13,
      img: '../../../../../assets/albums/ourFavorites/jcolef.jpg',
      about: `This album became certified Platinum on January 8th, 2016 by the RIAA—the first featureless rap album to go Platinum in twenty-five years—and certified Double Platinum by the RIAA in October of 2016.
      `,
    },
  ];

  constructor() {}
}
