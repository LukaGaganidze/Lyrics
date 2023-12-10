import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs';

import { ProgressBarService } from 'src/app/services/progress-bar/progress-bar.service';
import { SearcheManagerService } from '../../search-services/searche-manager.service';

import { ModifiedAlbumsSearchResp } from '../../search-services/search-ser-type';
import { FilteredTopChartAlbums } from 'src/api/apiTypes/topChartAlbums/top-chart-albums';
import { GetTopChartAlbumsService } from 'src/api/topChartAlbums/get-top-chart-albums.service';

@Component({
  selector: 'app-search-albums-page',
  templateUrl: './search-albums-page.component.html',
  styleUrls: ['./search-albums-page.component.scss'],
})
export class SearchAlbumsPageComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  // if it's null it it means that it was searched and there are no results
  // if its [] it has not been touched
  SearchResult$!: Observable<ModifiedAlbumsSearchResp[] | null>;
  // timer for top loading bar
  timer: any;

  // Data for shared album content
  topChartAlbumsData$!: Observable<FilteredTopChartAlbums[]>;

  constructor(
    private loadingBarSer: ProgressBarService,
    private searchSer: SearcheManagerService,
    private gettopAlbumsSer: GetTopChartAlbumsService
  ) {}

  ngOnInit(): void {
    // loading spinner for navigation UX
    this.loadingBarSer.onStartProgressBar('search-albums');

    // data for  the template
    this.SearchResult$ = this.searchSer.AlbumsObs$;

    // load  data  for  albums
    this.topChartAlbumsData$ = this.gettopAlbumsSer.getTopAlbums();
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
