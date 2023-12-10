import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchAlbumsPageComponent } from './search-albums-home-page/search-albums-page.component';
import { SearchSharedMod } from '../shared/search-shared-module/search-shared.module';
import { AlbumSearchResultsComponent } from './search-albums-home-page/album-search-results/album-search-results.component';

@NgModule({
  declarations: [SearchAlbumsPageComponent, AlbumSearchResultsComponent],
  imports: [CommonModule, SearchSharedMod],
})
export class SearchAlbumsModule {}
