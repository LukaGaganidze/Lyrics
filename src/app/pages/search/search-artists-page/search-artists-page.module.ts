import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchArtistsPageComponent } from './search-artists-home-page/search-artists-page.component';
import { SearchSharedMod } from '../shared/search-shared-module/search-shared.module';

@NgModule({
  declarations: [SearchArtistsPageComponent],
  imports: [CommonModule, SearchSharedMod],
})
export class SearchArtistsModule {}
