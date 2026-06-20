import { Component, OnInit } from '@angular/core';
import { User } from '../../../class/user';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-module',
  imports: [RouterLink],
  templateUrl: './profile-module.component.html',
})
export class ProfileModuleComponent implements OnInit{

  userActive:User = new User();
  
  ngOnInit(): void {
    let user = localStorage.getItem("user");
    if(user) {
      this.userActive = JSON.parse(user);
      //console.log(user);
    }else {
      console.log("No exite ningun usuario, no se puede renderizar");
    }
  }
}
