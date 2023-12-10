import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './searchHomePage/search.component';

import { SearchAlbumsModule } from './search-albums-page/search-albums-page.module';
import { SearchArtistsModule } from './search-artists-page/search-artists-page.module';
import { SearchTracksModule } from './search-tracks-page/search-track-page.module';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchAlbumsModule,
    SearchArtistsModule,
    SearchTracksModule,

    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
})
export class SearchModule {}
