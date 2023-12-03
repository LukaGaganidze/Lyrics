import { Component, Input } from '@angular/core';
import { topChartArtistDataType } from 'src/api/apiTypes/topChartArtists/get-top-chart-artist-types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-item',
  templateUrl: './artist-item.component.html',
  styleUrls: ['./artist-item.component.scss'],
})
export class ArtistItemComponent {
  @Input() popularArtistData!: topChartArtistDataType;
  @Input() placement!: number;

  constructor(private router: Router) {}

  toSpotifyOnSvg(link: string | URL | undefined) {
    // Navigate to the desired route
    const routeToNavigate = link; // Change this to your actual route
    this.router.navigate([routeToNavigate]);

    // Open the route in a new tab
    window.open(routeToNavigate, '_blank');
  }
}
