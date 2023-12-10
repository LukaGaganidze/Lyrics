import { Component, Input } from '@angular/core';
import { ProgressBarService } from 'src/app/services/progress-bar/progress-bar.service';

@Component({
  selector: 'app-search-drop-down',
  templateUrl: './search-drop-down.component.html',
  styleUrls: ['./search-drop-down.component.scss'],
})
export class SearchDropDownComponent {
  @Input() active = false;
  constructor(private progressBarSer: ProgressBarService) {}

  onTopLoader(route: string) {
    this.progressBarSer.onStartProgressBar(route);
  }
}
