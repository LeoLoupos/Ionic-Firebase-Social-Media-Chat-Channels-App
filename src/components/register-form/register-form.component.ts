import {Component, EventEmitter, Output} from '@angular/core';
import {Account} from "../../models/account/account.interface";
import {AuthService} from "../../providers/auth/auth.service";
import {LoginResponse} from "../../models/login/login-response.interface";
/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {

  account = {} as Account;
  @Output()registerStatus: EventEmitter<LoginResponse>;

  constructor(private auth: AuthService,
             ) {
      this.registerStatus = new EventEmitter<LoginResponse>();
  }

  //Returns a promise so async
  async register(){

    try {
      const result = await
        this.auth.createUserWithEmailAndPassword(this.account);
        this.registerStatus.emit(result);
        console.log(result)
    }catch(e){
        console.error(e);
        this.registerStatus.emit(e);

    }
  }
}
