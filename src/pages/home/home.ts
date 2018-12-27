import { DataProvider } from './../../providers/data/data';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http:HttpClient, private dataProvider:DataProvider) {

  }
  ionViewWILLEnter(){
    this.dataProvider.getData().then(data => {
      console.log(data);
    })
  }


}
