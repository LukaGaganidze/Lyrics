import { NgModule } from '@angular/core';
import { MainNavBarComponent } from './main-nav-bar/main-nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { SearchDropDownComponent } from './main-nav-bar/search-drop-down/search-drop-down.component';
import { HeroComponent } from './search-album-and-album-pages/hero/hero.component';
import { ListOfAlbumsComponent } from './search-album-and-album-pages/list-of-albums/list-of-albums.component';
import { FavoriteOnPlatformComponent } from './search-album-and-album-pages/favorite-on-platform/favorite-on-platform.component';

import { ArtistItemComponent } from './search-artist-and-artist-pages/artist-item/artist-item.component';
import { ListComponent } from './search-artist-and-artist-pages/list/list.component';

import { HeroComponent as TracksHeroComponenet } from './search-track-and-track-pages/hero/hero.component';
import { GeoTracksComponent } from './search-track-and-track-pages/geo-tracks/geo-tracks.component';
import { ListOfPopularTracksComponent } from './search-track-and-track-pages/list-of-popular-tracks/list-of-popular-tracks.component';

@NgModule({
  declarations: [
    MainNavBarComponent,
    FooterComponent,
    SearchDropDownComponent,
    HeroComponent,
    ListOfAlbumsComponent,
    FavoriteOnPlatformComponent,
    ArtistItemComponent,
    ListComponent,
    TracksHeroComponenet,
    GeoTracksComponent,
    ListOfPopularTracksComponent,
  ],
  imports: [RouterModule, MatProgressBarModule, CommonModule],
  exports: [
    MainNavBarComponent,
    FooterComponent,
    HeroComponent,
    ListOfAlbumsComponent,
    FavoriteOnPlatformComponent,
    ArtistItemComponent,
    ListComponent,
    TracksHeroComponenet,
    GeoTracksComponent,
    ListOfPopularTracksComponent,
  ],
})
export class SharedModule {}
