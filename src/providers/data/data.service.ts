import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";
import {User} from "firebase/app";
import {Profile} from "../../models/profile/profile.interface";
import "rxjs/add/operator/take"

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataService {

  profileObject: FirebaseObjectObservable<Profile>;

  profileList: FirebaseListObservable<Profile>;

  constructor(private database: AngularFireDatabase) {
  }

  searchUser(firstName: string){
      const query = this.database.list('/profile',{
        query :{
          orderByChild: 'firstName',
          equalTo: firstName
        }
      })
      return query.take(1);
  }

  async saveProfile(user: User,profile: Profile){
    this.profileObject = this.database.object(`/profile/${user.uid}`);

      try{
        await this.profileObject.set(profile);
        return true;
      }catch (e){
        console.log
        return false;
      }
  }

  getProfile(user: User){
    this.profileObject = this.database.object(`/profile/${user.uid}`,{preserveSnapshot: true});

    return this.profileObject.take(1);
  }

}


