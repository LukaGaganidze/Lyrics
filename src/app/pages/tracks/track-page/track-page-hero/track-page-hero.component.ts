import { Component, Input } from '@angular/core';

import { GetTrackData_modified } from 'src/api/apiTypes/tracks/track-types';

@Component({
  selector: 'app-track-page-hero',
  templateUrl: './track-page-hero.component.html',
  styleUrls: ['./track-page-hero.component.scss'],
})
export class TrackPageHeroComponent {
  @Input('trackDataInput') trackData!: GetTrackData_modified;
}
