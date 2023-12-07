import { Component, Input } from '@angular/core';
import { FilteredTopChartAlbums } from 'src/api/apiTypes/topChartAlbums/top-chart-albums';

@Component({
  selector: 'albums-chart-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  @Input() albumsData!: FilteredTopChartAlbums[];
}
