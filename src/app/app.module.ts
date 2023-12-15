import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ArtistsModuleModule } from './pages/artists/artists-module.module';
import { HomeModuleModule } from './pages/home-page/home-module.module';

import { SharedModule } from './shared-componenets/shared.module';
import { ValidationTokenInterceptorService } from './services/interceptors/validation-token-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchModule } from './pages/search/search.module';
import { AlbumsModule } from './pages/albums/albums.module';
import { TracksModule } from './pages/tracks/tracks.module';

import { APP_INITIALIZER } from '@angular/core';
import { ServiceOnInitService, initializeApp } from './service-on-init.service';
import { TokenForHttpRequstesService } from 'src/api/token-for-http-requstes.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    HomeModuleModule,
    ArtistsModuleModule,
    SharedModule,
    SearchModule,
    AlbumsModule,
    TracksModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ServiceOnInitService, TokenForHttpRequstesService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ValidationTokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
