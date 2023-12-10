import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-results-page',
  templateUrl: './no-results-page.component.html',
  styleUrls: ['./no-results-page.component.scss'],
})
export class NoResultsPageComponent {
  @Input() errFor: string = 'album';
}
