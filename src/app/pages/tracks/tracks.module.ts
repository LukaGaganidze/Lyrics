import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksComponent } from './tracks-home-page/tracks.component';
import { SharedModule } from 'src/app/shared-componenets/shared.module';
import { TrackPageComponent } from './track-page/track-page.component';
import { TracksRoutingModule } from './tracks-routing.module';
import { TrackPageHeroComponent } from './track-page/track-page-hero/track-page-hero.component';
import { TrackPageRelatedTracksComponent } from './track-page/track-page-related-tracks/track-page-related-tracks.component';

@NgModule({
  declarations: [
    TracksComponent,
    TrackPageComponent,
    TrackPageHeroComponent,
    TrackPageRelatedTracksComponent,
  ],
  imports: [CommonModule, SharedModule, TracksRoutingModule],
})
export class TracksModule {}
