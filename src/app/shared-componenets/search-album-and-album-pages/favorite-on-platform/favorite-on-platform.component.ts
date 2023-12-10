import { Component, OnInit } from '@angular/core';

interface LocalAlbumData {
  artist: String;
  album: String;
  year: Number;
  tracks: Number;
  img: String;
  about: String;
}

import { FavAlbumsSerService } from './fav-albums-ser.service';

@Component({
  selector: 'app-favorite-on-platform',
  templateUrl: './favorite-on-platform.component.html',
  styleUrls: ['./favorite-on-platform.component.scss'],
})
export class FavoriteOnPlatformComponent implements OnInit {
  albums: LocalAlbumData[] = [];

  constructor(private favAlbSer: FavAlbumsSerService) {}

  ngOnInit(): void {
    this.albums = this.favAlbSer.albumsData;
  }
}
