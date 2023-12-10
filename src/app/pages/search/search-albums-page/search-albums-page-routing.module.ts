import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchAlbumsPageComponent } from './search-albums-home-page/search-albums-page.component';

const routes: Routes = [
  {
    path: '',
    component: SearchAlbumsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchAlbumsRoutingModule {}
