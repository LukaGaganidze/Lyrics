import { NgModule } from '@angular/core';
import { MainNavBarComponent } from './main-nav-bar/main-nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MainNavBarComponent, FooterComponent],
  imports: [RouterModule, MatProgressBarModule, CommonModule],
  exports: [MainNavBarComponent, FooterComponent],
})
export class SharedModule {}
