import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {ChannelsPage} from "../pages/channels/channels";
import {InboxPage} from "../pages/inbox/inbox";

import {LoginPageModule} from "../pages/login/login.module";
import {RegisterPageModule} from "../pages/register/register.module";
import {AngularFireModule} from "angularfire2";
import {FIREBASE_CONFIG} from "./firebase.credentials";
import {ProfilePageModule} from "../pages/profile/profile.module";
import {AuthService} from '../providers/auth/auth.service';
import {AngularFireAuthModule} from "angularfire2/auth";
import { DataService} from '../providers/data/data.service';
import {AngularFireDatabaseModule} from "angularfire2/database";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    MyApp,
    ChannelsPage,
    InboxPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    RegisterPageModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    ProfilePageModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChannelsPage,
    InboxPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    DataService
  ]
})
export class AppModule {}
