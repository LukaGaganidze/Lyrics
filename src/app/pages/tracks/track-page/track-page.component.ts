import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetRelatedTracksService } from 'src/api/tracks/get-related-tracks.service';
import { TrackDataTransformedResponse } from 'src/api/apiTypes/tracks/related-tracks-types';
import { Observable } from 'rxjs';
import { TracksPageHelperService } from './tracks-page-helper.service';
import { GetTrackData_modified } from 'src/api/apiTypes/tracks/track-types';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.scss'],
})
export class TrackPageComponent implements OnInit {
  trackData$!: Observable<GetTrackData_modified>;
  relatedTracksData$!: Observable<TrackDataTransformedResponse[]>;
  private currentTrackId!: string;

  constructor(
    private route: ActivatedRoute,
    private getRelatedTracksSer: GetRelatedTracksService,
    private tracksPageHelperSer: TracksPageHelperService
  ) {}

  ngOnInit(): void {
    // id passed on url params
    this.currentTrackId = this.route.snapshot.params['trackID'];

    // recieving tracks data  based on id
    this.trackData$ = this.tracksPageHelperSer.getTrackData(
      this.currentTrackId
    );
    this.trackData$.subscribe((dat) => console.log(dat));

    // getting related tracks based on track
    this.relatedTracksData$ = this.getRelatedTracksSer.relatedTracks(
      this.currentTrackId
    );
  }
}
