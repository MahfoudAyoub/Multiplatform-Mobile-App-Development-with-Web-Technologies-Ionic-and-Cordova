import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from "../pages/about/about";
import { MenuPage } from "../pages/menu/menu";
import { ContactPage } from "../pages/contact/contact";
import { DishdetailPage } from "../pages/dishdetail/dishdetail";
import { FavoritesPage } from "../pages/favorites/favorites";
import { ReservationPage } from "../pages/reservation/reservation";
import { HttpModule } from "@angular/http";
import { IonicStorageModule } from "@ionic/storage";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications } from "@ionic-native/local-notifications";
import { EmailComposer } from "@ionic-native/email-composer";
import { SocialSharing } from "@ionic-native/social-sharing";
import { Camera } from "@ionic-native/camera";
import { Network } from "@ionic-native/network";

import { DishProvider } from '../providers/dish/dish';
import { LeaderProvider } from '../providers/leader/leader';
import { PromotionProvider } from '../providers/promotion/promotion';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';
import { baseURL } from "../shared/baseurl";
import { FavoriteProvider } from '../providers/favorite/favorite';
import { CommentPage } from "../pages/comment/comment";
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    DishdetailPage,
    MenuPage,
    ContactPage,
    FavoritesPage,
    ReservationPage,
    CommentPage,
    LoginPage,
    RegisterPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    DishdetailPage,
    MenuPage,
    ContactPage,
    FavoritesPage,
    ReservationPage,
    CommentPage,
    LoginPage,
    RegisterPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: "BaseURL", useValue: baseURL },
    LocalNotifications,
    EmailComposer,
    DishProvider,
    LeaderProvider,
    PromotionProvider,
    ProcessHttpmsgProvider,
    FavoriteProvider,
    SocialSharing,
    Camera,
    Network,
  ],
})
export class AppModule {}
