import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'artists',
    loadChildren: () =>
      import('./pages/artists/artist-routing.module').then(
        (mod) => mod.ArtistsRoutingModule
      ),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./pages/search/search-routing.module').then(
        (mod) => mod.SearchRoutingModule
      ),
  },
  {
    path: 'albums',
    loadChildren: () =>
      import('./pages/albums/albums-routing.module').then(
        (mod) => mod.AlbumsRoutingModule
      ),
  },
  {
    path: 'tracks',
    loadChildren: () =>
      import('./pages/tracks/tracks-routing.module').then(
        (mod) => mod.TracksRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
