import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchArtistsPageComponent } from './search-artists-home-page/search-artists-page.component';
import { SearchSharedMod } from '../shared/search-shared-module/search-shared.module';
import { ArtistsSearchResultsComponent } from './search-artists-home-page/artists-search-results/artists-search-results.component';

import { SharedModule } from 'src/app/shared-componenets/shared.module';

@NgModule({
  declarations: [SearchArtistsPageComponent, ArtistsSearchResultsComponent],
  imports: [CommonModule, SearchSharedMod, SharedModule],
})
export class SearchArtistsModule {}
