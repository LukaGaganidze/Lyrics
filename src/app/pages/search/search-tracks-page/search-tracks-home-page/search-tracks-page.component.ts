import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ProgressBarService } from 'src/app/services/progress-bar/progress-bar.service';
import { SearcheManagerService } from '../../search-services/searche-manager.service';
import { ModifiedTracksSearchResp } from '../../search-services/search-ser-type';
import { Observable } from 'rxjs';
import { GetTopChartTracksWorlwideService } from 'src/api/topChartTracks/get-top-chart-tracks-worlwide.service';
import { GetTopChartTracksServiceGEO } from 'src/api/topChartTracks/get-top-chart-geo-tracks.service';
import { filteredWorldwideTracks } from 'src/api/apiTypes/topChartTracks/top-chart-worldwide-tracks-type';
import { filteredGeoTracks } from 'src/api/apiTypes/topChartTracks/top-chart-geo-tracks-types';

@Component({
  selector: 'app-search-tracks-page',
  templateUrl: './search-tracks-page.component.html',
  styleUrls: ['./search-tracks-page.component.scss'],
})
export class SearchTracksPageComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  SearchResult$!: Observable<ModifiedTracksSearchResp[] | null>;
  topTracks$!: Observable<filteredWorldwideTracks[]>;
  geoTracks$!: Observable<filteredGeoTracks[]>;

  timer: any;
  constructor(
    private loadingBarSer: ProgressBarService,
    private searchSer: SearcheManagerService,

    private tracksWrld: GetTopChartTracksWorlwideService,
    private tracksGEO: GetTopChartTracksServiceGEO
  ) {}

  ngOnInit() {
    // loading spinner for navigation UX
    this.loadingBarSer.onStartProgressBar('search-tracks');

    this.SearchResult$ = this.searchSer.TracksObs$;

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
    // restaring data on element destroy
    this.searchSer.onRestartdata();

    // clear timer
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
}
