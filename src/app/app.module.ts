import { PlayPage } from './../pages/play/play';
import { ModePage } from './../pages/mode/mode';
import { AvatarPage } from './../pages/avatar/avatar';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MenuPage } from '../pages/menu/menu';
import { PlayTopicPage } from '../pages/play-topic/play-topic'; 
import { StudyPage } from './../pages/study/study';
import { RulesPage } from '../pages/rules/rules';
import { ProfilePage } from '../pages/profile/profile';
import { SelectTopicPage } from '../pages/study/select-topic/select-topic';
import { StudyProcessPage } from '../pages/study/study-process/study-process';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MenuPage,
    PlayTopicPage,
    StudyPage,
    RulesPage,
    ProfilePage,
    AvatarPage,
    ModePage,
    PlayPage,
    SelectTopicPage,
    StudyProcessPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MenuPage,
    PlayTopicPage,
    StudyPage,
    RulesPage,
    ProfilePage,
    AvatarPage,
    ModePage,
    PlayPage,
    SelectTopicPage,
    StudyProcessPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
