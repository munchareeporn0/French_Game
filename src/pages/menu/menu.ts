import { ProfilePage } from './../profile/profile';
import { RulesPage } from './../rules/rules';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlayTopicPage } from '../play-topic/play-topic';
import { StudyPage } from '../study/study';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
 

export class MenuPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  goToPlayTopicPage(){
    this.navCtrl.push(PlayTopicPage);
  }

  goToStudyPage(){
    this.navCtrl.push(StudyPage);
  }

  goToRulesPage(){
    this.navCtrl.push(RulesPage);
  }

  goToProfilePage(){
    this.navCtrl.push(ProfilePage)
  }


}
