import { Component, Input } from '@angular/core';
import { FilteredTopChartAlbums } from 'src/api/apiTypes/topChartAlbums/top-chart-albums';

@Component({
  selector: 'app-list-of-albums',
  templateUrl: './list-of-albums.component.html',
  styleUrls: ['./list-of-albums.component.scss'],
})
export class ListOfAlbumsComponent {
  @Input() arrayOfArtists!: FilteredTopChartAlbums[];
  controlDisplay = 15;
  showMoreButton = true;

  showMore() {
    this.controlDisplay = this.controlDisplay + 5;
    console.log(this.controlDisplay);

    if (this.controlDisplay < 100) {
      this.showMoreButton = true;
      console.log(this.controlDisplay);
    } else {
      this.controlDisplay = 100;
      this.showMoreButton = false;
      console.log(this.controlDisplay);
    }
  }
}
