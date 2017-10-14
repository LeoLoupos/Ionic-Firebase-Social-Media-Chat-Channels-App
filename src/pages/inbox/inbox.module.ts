import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxPage } from './inbox';
import {SearchUserPageModule} from "../searchuser/searchuser.module";

@NgModule({
  declarations: [
    InboxPage,
  ],
  imports: [
    IonicPageModule.forChild(InboxPage),
    SearchUserPageModule
  ],
})
export class InboxPageModule {}
