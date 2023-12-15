import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TracksComponent } from './tracks-home-page/tracks.component';
import { TrackPageComponent } from './track-page/track-page.component';

const routes: Routes = [
  {
    path: '',
    component: TracksComponent,
  },
  {
    path: ':trackID',
    component: TrackPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TracksRoutingModule {}
