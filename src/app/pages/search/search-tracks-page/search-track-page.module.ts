import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSharedMod } from '../shared/search-shared-module/search-shared.module';
import { SearchTracksPageComponent } from './search-tracks-home-page/search-tracks-page.component';
import { SearchTracksResultsComponent } from './search-tracks-home-page/search-tracks-results/search-tracks-results.component';
import { SharedModule } from 'src/app/shared-componenets/shared.module';

@NgModule({
  declarations: [SearchTracksPageComponent, SearchTracksResultsComponent],
  imports: [CommonModule, SearchSharedMod, SharedModule],
})
export class SearchTracksModule {}
