import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from "../pages/about/about";
import { MenuPage } from "../pages/menu/menu";
import { ContactPage } from "../pages/contact/contact";
import { DishdetailPage } from "../pages/dishdetail/dishdetail";
import { HttpModule } from "@angular/http";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DishProvider } from '../providers/dish/dish';
import { LeaderProvider } from '../providers/leader/leader';
import { PromotionProvider } from '../providers/promotion/promotion';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';
import { baseURL } from "../shared/baseurl";
import { FavoriteProvider } from '../providers/favorite/favorite';

@NgModule({
  declarations: [MyApp, HomePage, AboutPage,DishdetailPage, MenuPage, ContactPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), HttpModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, AboutPage,DishdetailPage, MenuPage, ContactPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: 'BaseURL', useValue: baseURL },
    DishProvider,
    LeaderProvider,
    PromotionProvider,
    ProcessHttpmsgProvider,
    FavoriteProvider,
  ],
})
export class AppModule {}
