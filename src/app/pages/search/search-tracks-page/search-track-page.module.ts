import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSharedMod } from '../shared/search-shared-module/search-shared.module';
import { SearchTracksPageComponent } from './search-tracks-home-page/search-tracks-page.component';

@NgModule({
  declarations: [SearchTracksPageComponent],
  imports: [CommonModule, SearchSharedMod],
})
export class SearchTracksModule {}
