import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums-home-page/albums.component';
import { SharedModule } from 'src/app/shared-componenets/shared.module';

@NgModule({
  declarations: [AlbumsComponent],
  imports: [CommonModule, SharedModule],
})
export class AlbumsModule {}
