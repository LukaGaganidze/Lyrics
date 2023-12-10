import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopularArtistsComponent } from './artists-home-page/popular-artists/popular-artists.component';

import { GalleryComponent } from './artists-home-page/popular-artists/gallery/gallery.component';
import { ArtistsComponent } from './artists-home-page/artists.component';
import { RouterModule } from '@angular/router';

import { ArtistPageComponent } from './artist-page/artist-page.component';
import { GalleryItemComponent } from './artists-home-page/popular-artists/gallery/gallery-items/gallery-item/gallery-item.component';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
register();

import { SharedModule } from 'src/app/shared-componenets/shared.module';

@NgModule({
  declarations: [
    PopularArtistsComponent,
    GalleryComponent,
    ArtistsComponent,
    ArtistPageComponent,
    GalleryItemComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ArtistsModuleModule {}
