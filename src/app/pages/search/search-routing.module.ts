import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './searchHomePage/search.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
  },
  {
    path: 'search-albums',
    loadChildren: () =>
      import('./search-albums-page/search-albums-page-routing.module').then(
        (mod) => mod.SearchAlbumsRoutingModule
      ),
  },
  {
    path: 'search-artists',
    loadChildren: () =>
      import('./search-artists-page/search-artists-page-routing.module').then(
        (mod) => mod.SearchArtistsRoutingModule
      ),
  },
  {
    path: 'search-tracks',
    loadChildren: () =>
      import('./search-tracks-page/search-track-page-routing.module').then(
        (mod) => mod.SearchTracksRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
