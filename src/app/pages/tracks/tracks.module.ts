import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksComponent } from './tracks-home-page/tracks.component';
import { SharedModule } from 'src/app/shared-componenets/shared.module';
import { TrackPageComponent } from './track-page/track-page.component';
import { TracksRoutingModule } from './tracks-routing.module';

@NgModule({
  declarations: [TracksComponent, TrackPageComponent],
  imports: [CommonModule, SharedModule, TracksRoutingModule],
})
export class TracksModule {}
