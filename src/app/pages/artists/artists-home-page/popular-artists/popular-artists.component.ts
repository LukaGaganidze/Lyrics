import { Component, OnInit } from '@angular/core';

import { Observable, mergeMap, of } from 'rxjs';

import { topChartArtistDataType } from 'src/api/apiTypes/topChartArtists/get-top-chart-artist-types';
import { GetTopChartArtistService } from 'src/api/topChartArtists/get-top-chart-artist.service';

@Component({
  selector: 'app-popular-artists',
  templateUrl: './popular-artists.component.html',
  styleUrls: ['./popular-artists.component.scss'],
})
export class PopularArtistsComponent {
  artistData$!: Observable<topChartArtistDataType[]>;

  constructor(private topCharts: GetTopChartArtistService) {}

  ngOnInit(): void {
    this.artistData$ = this.topCharts.getTopArtists();
  }
}
