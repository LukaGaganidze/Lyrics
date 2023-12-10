import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchArtistsPageComponent } from './search-artists-home-page/search-artists-page.component';
const routes: Routes = [
  {
    path: '',
    component: SearchArtistsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchArtistsRoutingModule {}
