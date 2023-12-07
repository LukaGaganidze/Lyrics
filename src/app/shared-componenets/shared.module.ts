import { NgModule } from '@angular/core';
import { MainNavBarComponent } from './main-nav-bar/main-nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { SearchDropDownComponent } from './main-nav-bar/search-drop-down/search-drop-down.component';

@NgModule({
  declarations: [MainNavBarComponent, FooterComponent, SearchDropDownComponent],
  imports: [RouterModule, MatProgressBarModule, CommonModule],
  exports: [MainNavBarComponent, FooterComponent],
})
export class SharedModule {}
