import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums-home-page/albums.component';

import { HeroComponent } from './albums-home-page/hero/hero.component';
import { ListOfAlbumsComponent } from './albums-home-page/list-of-albums/list-of-albums.component';
import { FavoriteOnPlatformComponent } from './albums-home-page/favorite-on-platform/favorite-on-platform.component';

@NgModule({
  declarations: [
    AlbumsComponent,
    HeroComponent,
    ListOfAlbumsComponent,
    FavoriteOnPlatformComponent,
  ],
  imports: [CommonModule],
})
export class AlbumsModule {}
