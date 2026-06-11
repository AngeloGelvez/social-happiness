import { Component, OnInit } from '@angular/core';
import { User } from '../../../class/user';

@Component({
  selector: 'app-profile-module',
  imports: [],
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
