import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ProgressBarService } from 'src/app/services/progress-bar/progress-bar.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent implements AfterViewInit, OnDestroy, OnInit {
  private timer: any;
  constructor(private loadingBarSer: ProgressBarService) {}

  ngOnInit(): void {
    this.loadingBarSer.onStartProgressBar('artists');
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
