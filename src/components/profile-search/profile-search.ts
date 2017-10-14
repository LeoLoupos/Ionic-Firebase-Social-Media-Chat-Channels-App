import { Component } from '@angular/core';
import {DataService} from "../../providers/data/data.service";
import {Profile} from "../../models/profile/profile.interface";

/**
 * Generated class for the ProfileSearchComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-profile-search',
  templateUrl: 'profile-search.html'
})
export class ProfileSearchComponent {

  query: string;

  profileList: Profile[];
  constructor(private data: DataService,
              ) {

  }

  searchUser(query: string){
    const trimmedQuery = query.trim();

    if(trimmedQuery === query) {
      this.data.searchUser(query).subscribe(profiles => {
        console.log(profiles);
        this.profileList = profiles;
      })
    }
  }

}
