import { Component, OnInit } from '@angular/core';

import { GetTopChartArtistService } from 'src/api/topChartArtists/get-top-chart-artist.service';

import { Observable } from 'rxjs';

import { topChartArtistDataType } from 'src/api/apiTypes/topChartArtists/get-top-chart-artist-types';

import { SearchArtistsService } from 'src/api/artists/search-artists.service';
import { GetArtistBySearchType } from 'src/api/apiTypes/artists/artists-types';

@Component({
  selector: 'app-popular-artists',
  templateUrl: './popular-artists.component.html',
  styleUrls: ['./popular-artists.component.scss'],
})
// ModifiedArtist[]
export class PopularArtistsComponent implements OnInit {
  artistTopCharts$!: Observable<topChartArtistDataType[]>;

  constructor(private topCharts: GetTopChartArtistService) {}

  ngOnInit(): void {
    // this.artistTopCharts$ = this.topCharts.getTopArtists();
  }
}
