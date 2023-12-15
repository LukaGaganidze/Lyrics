import { Component, Input, OnInit } from '@angular/core';
import { TrackDataTransformedResponse } from 'src/api/apiTypes/tracks/related-tracks-types';

@Component({
  selector: 'app-track-page-related-tracks',
  templateUrl: './track-page-related-tracks.component.html',
  styleUrls: ['./track-page-related-tracks.component.scss'],
})
export class TrackPageRelatedTracksComponent implements OnInit {
  @Input() relatedTracksData!: TrackDataTransformedResponse[];

  ngOnInit(): void {
    console.log(this.relatedTracksData);
  }
}
