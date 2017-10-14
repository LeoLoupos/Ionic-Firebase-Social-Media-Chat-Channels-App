import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Profile} from "../../models/profile/profile.interface";
import {DataService} from "../../providers/data/data.service";
import {AuthService} from "../../providers/auth/auth.service";
import {Subscription} from "rxjs/Subscription";
import {User} from "firebase/app";


@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent implements OnDestroy,OnInit{

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;

  @Output() saveProfileResult: EventEmitter<Boolean>

  @Input() profile : Profile;

  constructor(private data: DataService,
              private auth: AuthService) {
    this.saveProfileResult =  new EventEmitter<Boolean>();

    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) =>{
        this.authenticatedUser = user;
    });
  }

  async saveProfile(){
    if(this.authenticatedUser) {
      this.profile.email = this.authenticatedUser.email;
      const result = await this.data.saveProfile(this.authenticatedUser,this.profile);
      this.saveProfileResult.emit(result);
    }
  }


  ngOnInit(): void{
    if(!this.profile){
      this.profile = {} as Profile;
    }

  }

  ngOnDestroy(): void{
    this.authenticatedUser$.unsubscribe();

  }


}
