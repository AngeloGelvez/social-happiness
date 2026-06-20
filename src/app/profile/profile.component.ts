import { Component, OnInit } from '@angular/core';
import { User } from '../../class/user';
import { ProfileModuleComponent } from "../components/profile-module/profile-module.component";
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [RouterLink, CommonModule],
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit{

  userLocalStorage!: User;

  ngOnInit(): void {
    let getUserLocalStorage = localStorage.getItem("user") || "";
    let parseData = JSON.parse(getUserLocalStorage);
    this.userLocalStorage = new User(parseData);

    console.log(this.userLocalStorage);
  }
}
