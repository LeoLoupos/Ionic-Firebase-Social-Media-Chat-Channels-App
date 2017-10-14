import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Profile} from "../../models/profile/profile.interface";
import {DataService} from "../../providers/data/data.service";

/**
 * Generated class for the SearchuserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchuser',
  templateUrl: 'searchuser.html',
})
export class SearchUserPage {


  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchuserPage');
  }


}
