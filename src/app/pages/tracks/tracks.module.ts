import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksComponent } from './tracks-home-page/tracks.component';
import { SharedModule } from 'src/app/shared-componenets/shared.module';

@NgModule({
  declarations: [TracksComponent],
  imports: [CommonModule, SharedModule],
})
export class TracksModule {}
