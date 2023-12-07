import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProgressBarService } from 'src/app/services/progress-bar/progress-bar.service';

@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.scss'],
})
export class MainNavBarComponent implements OnInit {
  // search drowpdown
  searchDropdown = false;

  // propgress bar
  progressVal$!: Observable<number>;
  constructor(private progressBarSer: ProgressBarService) {}

  ngOnInit(): void {
    this.progressVal$ = this.progressBarSer.progressBar$;
  }

  controlDrop(state: boolean) {
    this.searchDropdown = state;
  }
  onTopLoader(route: string) {
    this.progressBarSer.onStartProgressBar(route);
  }
}
