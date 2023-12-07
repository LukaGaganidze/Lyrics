import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { filteredWorldwideTracks } from 'src/api/apiTypes/topChartTracks/top-chart-worldwide-tracks-type';

@Component({
  selector: 'tracks-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  @Input() heroTracksData!: filteredWorldwideTracks[];

  constructor() {}

  ngOnInit(): void {}
}
