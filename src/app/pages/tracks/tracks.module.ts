import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksComponent } from './tracks-home-page/tracks.component';
import { HeroComponent } from './tracks-home-page/hero/hero.component';
import { GeoTracksComponent } from './tracks-home-page/geo-tracks/geo-tracks.component';
import { ListOfPopularTracksComponent } from './tracks-home-page/list-of-popular-tracks/list-of-popular-tracks.component';

@NgModule({
  declarations: [
    TracksComponent,
    HeroComponent,
    GeoTracksComponent,
    ListOfPopularTracksComponent,
  ],
  imports: [CommonModule],
})
export class TracksModule {}
