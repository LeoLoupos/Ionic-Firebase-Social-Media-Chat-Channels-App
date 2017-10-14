import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Profile} from "../../models/profile/profile.interface";

/**
 * Generated class for the EditprofilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  profile = {} as Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.profile = this.navParams.get('existingProfile');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
  }

  saveProfileResult(event: Boolean){
    event ? this.navCtrl.setRoot('TabsPage') : console.log("Not authenticated or saved");
  }

}
