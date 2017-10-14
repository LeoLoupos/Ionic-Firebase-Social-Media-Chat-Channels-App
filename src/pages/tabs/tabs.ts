import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {InboxPage} from "../inbox/inbox";
import {ChannelsPage} from "../channels/channels";
import {ProfilePage} from "../profile/profile";

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root: any;
  tab2Root: any;
  tab3Root: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1Root = InboxPage;
    this.tab2Root = ChannelsPage;
    this.tab3Root = ProfilePage;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
