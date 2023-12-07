import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ProgressBarService } from 'src/app/services/progress-bar/progress-bar.service';

import { SearchAlbumsService } from 'src/api/albums/search-albums.service';
import { GetTopChartAlbumsService } from 'src/api/topChartAlbums/get-top-chart-albums.service';
import { FilteredTopChartAlbums } from 'src/api/apiTypes/topChartAlbums/top-chart-albums';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements AfterViewInit, OnDestroy, OnInit {
  // timer
  private timer: any;

  topChartAlbumsData$!: Observable<FilteredTopChartAlbums[]>;

  constructor(
    private loadingBarSer: ProgressBarService,
    private searchAlSer: SearchAlbumsService,
    private gettopAlbumsSer: GetTopChartAlbumsService
  ) {}

  ngOnInit(): void {
    this.loadingBarSer.onStartProgressBar('albums');
    this.topChartAlbumsData$ = this.gettopAlbumsSer.getTopAlbums();
  }
  ngAfterViewInit(): void {
    this.loadingBarSer.onFinishProgressBar();
    this.timer = setTimeout(() => {
      this.loadingBarSer.onEndProgressBar();
    }, 500);
  }
  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
}
