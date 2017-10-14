import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchUserPage } from './searchuser';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    SearchUserPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchUserPage),
    ComponentsModule
  ],
})
export class SearchUserPageModule {}
