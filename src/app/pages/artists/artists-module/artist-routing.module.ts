import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from '../artists.component';
import { ArtistPageComponent } from '../artist-page/artist-page.component';

const routes: Routes = [
  {
    path: '',
    component: ArtistsComponent,
  },
  {
    path: ':artist',
    component: ArtistPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistsRoutingModule {}
