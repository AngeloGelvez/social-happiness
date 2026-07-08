import { Component, OnInit } from '@angular/core';
import { User } from '../../../class/user';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-profile-module',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './profile-module.component.html',
})
export class ProfileModuleComponent implements OnInit{

  userActive!:User
  
  ngOnInit(): void {
    let user = localStorage.getItem("user");
    if(user) {
      this.userActive = new User(JSON.parse(user));
      console.log(this.userActive);
    }else {
      console.log("No exite ningun usuario, no se puede renderizar");
    }
  }
}
