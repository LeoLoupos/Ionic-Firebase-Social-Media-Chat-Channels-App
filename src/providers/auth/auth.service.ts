import { Injectable } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {LoginResponse} from "../../models/login/login-response.interface";
import {Account} from "../../models/account/account.interface";

@Injectable()
export class AuthService {

  constructor(private auth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  getAuthenticatedUser(){
    //email , uid etc....
    return this.auth.authState;
  }


  async createUserWithEmailAndPassword(account : Account){
    try{
      return<LoginResponse> {
        result: await this.auth.auth.createUserWithEmailAndPassword(account.email,account.password)
      };
    }catch(e){
      return <LoginResponse> {
        error: e
      };
    }
  }

  async signInWithEmailandPassword (account: Account){
    try{

        return<LoginResponse> {
          result: await this.auth.auth.signInWithEmailAndPassword(account.email,account.password)
        };
    }catch(e){
        return <LoginResponse> {
          error: e
        };
    }

  }
}
