import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { ImgCarouselComponent } from './img-carousel/img-carousel.component';
import { IntroArticleComponent } from './intro-article/intro-article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    ImgCarouselComponent,
    IntroArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
