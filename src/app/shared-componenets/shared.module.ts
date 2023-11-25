import { NgModule } from '@angular/core';
import { MainNavBarComponent } from './main-nav-bar/main-nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainNavBarComponent, FooterComponent],
  imports: [RouterModule],
  exports: [MainNavBarComponent, FooterComponent],
})
export class SharedModule {}
