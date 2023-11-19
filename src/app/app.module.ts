import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainNavBarComponent } from './shared-componenets/main-nav-bar/main-nav-bar.component';
import { FooterComponent } from './shared-componenets/footer/footer.component';

// SWIPER
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { PopularArtistsComponent } from './pages/home-page/popular-artists/popular-artists.component';
// register Swiper custom elements
register();

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainNavBarComponent,
    FooterComponent,
    PopularArtistsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
