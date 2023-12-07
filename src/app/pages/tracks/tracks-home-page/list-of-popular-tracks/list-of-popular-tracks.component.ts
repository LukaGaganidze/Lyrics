import { Component, Input, OnInit } from '@angular/core';
import { filteredWorldwideTracks } from 'src/api/apiTypes/topChartTracks/top-chart-worldwide-tracks-type';

@Component({
  selector: 'app-list-of-popular-tracks',
  templateUrl: './list-of-popular-tracks.component.html',
  styleUrls: ['./list-of-popular-tracks.component.scss'],
})
export class ListOfPopularTracksComponent {
  contentToshow = 10;

  @Input() listTracksData!: filteredWorldwideTracks[];

  showMore() {
    this.contentToshow = 25;
  }
  showLess() {
    this.contentToshow = 10;
  }
}
