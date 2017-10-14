import {Component, EventEmitter, Output} from '@angular/core';
import {NavController} from "ionic-angular";
import {AngularFireAuth} from "angularfire2/auth";
import {Account} from "../../models/account/account.interface";
import {LoginResponse} from "../../models/login/login-response.interface";
import {TabsPage} from "../../pages/tabs/tabs";
import {RegisterPage} from "../../pages/register/register";
import {AuthService} from "../../providers/auth/auth.service";

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  account = {} as Account;
  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private navCtrl: NavController,
              private auth : AuthService) {
      this.loginStatus = new EventEmitter<LoginResponse>();
  }

  async login(){
    const loginResponse = await this.auth.signInWithEmailandPassword(this.account);
    this.loginStatus.emit(loginResponse);

  }


  navigateToRegister(){
   this.navCtrl.push(RegisterPage);
  }

}
