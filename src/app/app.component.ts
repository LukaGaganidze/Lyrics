import { Component, OnInit } from '@angular/core';

import { GetTrackService } from 'src/api/tracks/get-track.service';

import { TokenForHttpRequstesService } from 'src/api/token-for-http-requstes.service';
import { SearchTracksService } from 'src/api/tracks/search-tracks.service';

import { GetArtistService } from 'src/api/artists/get-artist.service';
import { SearchArtistsService } from 'src/api/artists/search-artists.service';
import { GetAlbumService } from 'src/api/albums/get-album.service';
import { SearchAlbumsService } from 'src/api/albums/search-albums.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private tokenSerNew: TokenForHttpRequstesService,
    private albumSearchSer: SearchAlbumsService,
    private getTrackSerachSer: SearchArtistsService,

    private albumSer: GetAlbumService
  ) {}
  ngOnInit(): void {
    this.tokenSerNew.apiTokenMaganger();
  }

  searchArtist() {
    this.albumSer.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
  }

  getCategories() {
    this.albumSearchSer.searchForAlbum('4 your eyes only');
  }
}
