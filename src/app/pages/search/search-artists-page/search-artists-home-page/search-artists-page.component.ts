import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ProgressBarService } from 'src/app/services/progress-bar/progress-bar.service';
import { SearcheManagerService } from '../../search-services/searche-manager.service';
import { GetTopChartArtistService } from 'src/api/topChartArtists/get-top-chart-artist.service';
import { ModifiedArtistsSearchResp } from '../../search-services/search-ser-type';
import { Observable } from 'rxjs';
import { topChartArtistDataType } from 'src/api/apiTypes/topChartArtists/get-top-chart-artist-types';

@Component({
  selector: 'app-search-artists-page',
  templateUrl: './search-artists-page.component.html',
  styleUrls: ['./search-artists-page.component.scss'],
})
export class SearchArtistsPageComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  SearchResult$!: Observable<ModifiedArtistsSearchResp[] | null>;
  artistData$!: Observable<topChartArtistDataType[]>;

  timer: any;
  constructor(
    private loadingBarSer: ProgressBarService,
    private topCharts: GetTopChartArtistService,
    private searchSer: SearcheManagerService
  ) {}
  ngOnInit() {
    this.artistData$ = this.topCharts.getTopArtists();

    // loading spinner for navigation UX
    this.loadingBarSer.onStartProgressBar('search-artists');

    this.SearchResult$ = this.searchSer.ArtistsObs$;
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
