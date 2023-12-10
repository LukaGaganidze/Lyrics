import { Component, Input } from '@angular/core';
import { ModifiedTracksSearchResp } from '../../../search-services/search-ser-type';

@Component({
  selector: 'app-search-tracks-results',
  templateUrl: './search-tracks-results.component.html',
  styleUrls: ['./search-tracks-results.component.scss'],
})
export class SearchTracksResultsComponent {
  @Input() tracksData!: ModifiedTracksSearchResp[];
}
