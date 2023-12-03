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
      import('./pages/artists/artists-module/artist-routing.module').then(
        (mod) => mod.ArtistsRoutingModule
      ),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./pages/search/search-modules/search-routing.module').then(
        (mod) => mod.SearchRoutingModule
      ),
  },
  {
    path: 'albums',
    loadChildren: () =>
      import('./pages/albums/albums-modules/albums-routing.module').then(
        (mod) => mod.AlbumsRoutingModule
      ),
  },
  {
    path: 'tracks',
    loadChildren: () =>
      import('./pages/tracks/tracks-module/tracks-routing.module').then(
        (mod) => mod.TracksRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
