import { Component, Input, OnInit } from '@angular/core';
import { filteredGeoTracks } from 'src/api/apiTypes/topChartTracks/top-chart-geo-tracks-types';

@Component({
  selector: 'app-geo-tracks',
  templateUrl: './geo-tracks.component.html',
  styleUrls: ['./geo-tracks.component.scss'],
})
export class GeoTracksComponent implements OnInit {
  @Input() tracksData!: filteredGeoTracks[];
  constructor() {}

  ngOnInit(): void {}
}
