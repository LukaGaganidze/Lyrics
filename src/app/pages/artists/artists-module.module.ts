import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopularArtistsComponent } from './popular-artists/popular-artists.component';
import { ArtistItemComponent } from './popular-artists/artist-item/artist-item.component';
import { ListComponent } from './popular-artists/list/list.component';
import { GalleryComponent } from './popular-artists/gallery/gallery.component';
import { ArtistsComponent } from './artists.component';
import { RouterModule } from '@angular/router';

// import function to register Swiper custom elements
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { ArtistPageComponent } from './artist-page/artist-page.component';
register();

@NgModule({
  declarations: [
    PopularArtistsComponent,
    ArtistItemComponent,
    ListComponent,
    GalleryComponent,
    ArtistsComponent,
    ArtistPageComponent,
  ],
  imports: [CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ArtistsModuleModule {}
