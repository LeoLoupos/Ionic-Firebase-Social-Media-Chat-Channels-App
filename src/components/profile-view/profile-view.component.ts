import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from "../../providers/data/data.service";
import {AuthService} from "../../providers/auth/auth.service";
import {User} from "firebase/app";
import {Profile} from "../../models/profile/profile.interface";
import {LoadingController, Loading} from "ionic-angular";

/**
 * Generated class for the ProfileViewComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-profile-view',
  templateUrl: 'profile-view.component.html'
})
export class ProfileViewComponent implements OnInit{

  private authUser: User;
  //otherWise i can access it on component
  public userProfile: Profile;
  private loader: Loading;

  @Output() existingProfile: EventEmitter<Profile>;

  constructor(private data: DataService,
              private auth: AuthService,
              private loading: LoadingController) {
    this.loader = this.loading.create({
      content: ' Loading profile...'
    });
    this.existingProfile = new EventEmitter<Profile>();
  }

  ngOnInit(): void {
    this.loader.present();

    this.auth.getAuthenticatedUser().subscribe((user: User) =>{
      this.authUser = user
      this.data.getProfile(user).subscribe(profile =>{
          //Cast when we get a Val
          this.userProfile = <Profile>profile.val();
          this.existingProfile.emit(this.userProfile);
          this.loader.dismiss();
      });
    });
  }



}
