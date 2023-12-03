import { Component, Input, Output } from '@angular/core';

import { topChartArtistDataType } from '../../../../../api/apiTypes/topChartArtists/get-top-chart-artist-types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() artists!: topChartArtistDataType[];
  loadItems: number = 10;
  loadMore: boolean = false;

  onLoadMore() {
    this.loadItems = 25;
    this.loadMore = true;
  }
  onLoadLess() {
    this.loadItems = 10;
    this.loadMore = false;
  }
}
