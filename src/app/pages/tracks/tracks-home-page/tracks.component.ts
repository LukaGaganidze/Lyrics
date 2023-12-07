import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetTopChartTracksWorlwideService } from 'src/api/topChartTracks/get-top-chart-tracks-worlwide.service';
import { ProgressBarService } from 'src/app/services/progress-bar/progress-bar.service';

import { filteredWorldwideTracks } from 'src/api/apiTypes/topChartTracks/top-chart-worldwide-tracks-type';
import { filteredGeoTracks } from 'src/api/apiTypes/topChartTracks/top-chart-geo-tracks-types';
import { GetTopChartTracksServiceGEO } from 'src/api/topChartTracks/get-top-chart-geo-tracks.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss'],
})
export class TracksComponent implements AfterViewInit, OnDestroy, OnInit {
  topTracks$!: Observable<filteredWorldwideTracks[]>;
  geoTracks$!: Observable<filteredGeoTracks[]>;

  private timer!: ReturnType<typeof setTimeout>;

  constructor(
    private loadingBarSer: ProgressBarService,
    private tracksWrld: GetTopChartTracksWorlwideService,
    private tracksGEO: GetTopChartTracksServiceGEO
  ) {}

  ngOnInit() {
    // loading spinner for navigation UX
    this.loadingBarSer.onStartProgressBar('tracks');

    // loading page wrldwide songs content from server
    this.topTracks$ = this.tracksWrld.getTracks();

    // loading page geo song scontent from server
    this.geoTracks$ = this.tracksGEO.getPopularTracksFromGeo();
  }

  ngAfterViewInit(): void {
    // removing progress bar after .5 s
    this.loadingBarSer.onFinishProgressBar();
    this.timer = setTimeout(() => {
      this.loadingBarSer.onEndProgressBar();
    }, 500);
  }

  ngOnDestroy(): void {
    // clear timer
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
}
