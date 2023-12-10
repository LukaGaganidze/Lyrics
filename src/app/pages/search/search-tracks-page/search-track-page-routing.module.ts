import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchTracksPageComponent } from './search-tracks-home-page/search-tracks-page.component';

const routes: Routes = [
  {
    path: '',
    component: SearchTracksPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchTracksRoutingModule {}
