import { Component, Input } from '@angular/core';
import { topChartArtistDataType } from 'src/api/apiTypes/topChartArtists/get-top-chart-artist-types';

@Component({
  selector: 'app-artist-item',
  templateUrl: './artist-item.component.html',
  styleUrls: ['./artist-item.component.scss'],
})
export class ArtistItemComponent {
  @Input() popularArtistData!: topChartArtistDataType;
  @Input() placement!: number;
}
