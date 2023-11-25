import {Component, Input, Output} from '@angular/core';

import {topChartArtistDataType} from '../../../../../api/apiTypes/topChartArtists/get-top-chart-artist-types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() artists!: topChartArtistDataType[];
}
