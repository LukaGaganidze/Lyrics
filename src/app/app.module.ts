import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ArtistsModuleModule } from './pages/artists/artists-module.module';
import { HomeModuleModule } from './pages/home-page/home-module.module';

import { SharedModule } from './shared-componenets/shared.module';
import { ValidationTokenInterceptorService } from './services/interceptors/validation-token-interceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    HomeModuleModule,
    ArtistsModuleModule,
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ValidationTokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
