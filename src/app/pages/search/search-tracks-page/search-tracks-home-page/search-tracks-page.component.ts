import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ProgressBarService } from 'src/app/services/progress-bar/progress-bar.service';
import { SearcheManagerService } from '../../search-services/searche-manager.service';

@Component({
  selector: 'app-search-tracks-page',
  templateUrl: './search-tracks-page.component.html',
  styleUrls: ['./search-tracks-page.component.scss'],
})
export class SearchTracksPageComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  timer: any;
  constructor(
    private loadingBarSer: ProgressBarService,
    private searchSer: SearcheManagerService
  ) {}
  ngOnInit() {
    // loading spinner for navigation UX
    this.loadingBarSer.onStartProgressBar('search-tracks');

    // this.searchSer.submitResponse$.subscribe((data) => {
    //   console.log(data);
    // });
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
