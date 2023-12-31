import { Component, Input, OnInit } from '@angular/core';
import { ModifiedArtistsSearchResp } from '../../../search-services/search-ser-type';

@Component({
  selector: 'app-artists-search-results',
  templateUrl: './artists-search-results.component.html',
  styleUrls: ['./artists-search-results.component.scss'],
})
export class ArtistsSearchResultsComponent implements OnInit {
  @Input() artistsData!: ModifiedArtistsSearchResp[];

  ngOnInit(): void {}
}
