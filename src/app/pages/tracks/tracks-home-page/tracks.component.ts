import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { ProgressBarService } from 'src/app/services/progress-bar/progress-bar.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss'],
})
export class TracksComponent implements AfterViewInit, OnDestroy, OnInit {
  private timer: any;

  constructor(private loadingBarSer: ProgressBarService) {}

  ngOnInit() {
    this.loadingBarSer.onStartProgressBar('tracks');
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
