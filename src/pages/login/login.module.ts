import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {ComponentsModule} from "../../components/components.module";
import {EditProfilePage} from "../editprofile/edit-profile";
import {EditProfilePageModule} from "../editprofile/edit-profile.module";


@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    ComponentsModule,
    EditProfilePageModule
  ],
  exports:[
    LoginPage
  ]
})
export class LoginPageModule {}
