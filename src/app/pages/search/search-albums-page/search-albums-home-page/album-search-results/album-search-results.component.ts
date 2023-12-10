import { Component, Input, OnInit } from '@angular/core';
import { ModifiedAlbumsSearchResp } from '../../../search-services/search-ser-type';

@Component({
  selector: 'app-album-search-results',
  templateUrl: './album-search-results.component.html',
  styleUrls: ['./album-search-results.component.scss'],
})
export class AlbumSearchResultsComponent implements OnInit {
  @Input() albumsData!: ModifiedAlbumsSearchResp[];

  ngOnInit(): void {}
}
