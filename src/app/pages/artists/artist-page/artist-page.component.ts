import { Component, OnInit } from '@angular/core';
import { GetArtistService } from 'src/api/artists/get-artist.service';

import { ModifiedArtistId } from 'src/api/apiTypes/artists/artists-types';
import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.scss'],
})
export class ArtistPageComponent implements OnInit {
  artistData$!: Observable<ModifiedArtistId>;

  constructor(
    private artistIDSer: GetArtistService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.artistData$ = this.artistIDSer.getArtist(
      this.route.snapshot.params['artist']
    );
  }
}
