import { Component, Input } from '@angular/core';
import { topChartArtistDataType } from 'src/api/apiTypes/topChartArtists/get-top-chart-artist-types';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss'],
})
export class GalleryItemComponent {
  @Input() artist!: topChartArtistDataType;
  activeGalleryItem = false;

  onMouseEnter() {
    this.activeGalleryItem = true;
  }
  onMouseLeave() {
    this.activeGalleryItem = false;
  }
}
