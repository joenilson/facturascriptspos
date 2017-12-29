import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { UserProvider } from '../providers/user/user';
import { DatabaseAccessProvider } from '../providers/database-access/database-access';
import { HeaderMenuComponent } from '../components/header-menu/header-menu';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import {LoginPage} from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HeaderMenuComponent,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    DatabaseAccessProvider,
    AuthServiceProvider
  ]
})
export class AppModule {}
