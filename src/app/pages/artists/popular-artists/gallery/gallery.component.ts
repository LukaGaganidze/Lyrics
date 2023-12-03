import { Component, Input, OnInit } from '@angular/core';
import { topChartArtistDataType } from 'src/api/apiTypes/topChartArtists/get-top-chart-artist-types';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  @Input() artists!: topChartArtistDataType[];
}
