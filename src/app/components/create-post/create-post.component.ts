import { Component, OnInit } from '@angular/core';
import { User } from '../../../class/user';

@Component({
  selector: 'app-create-post',
  imports: [],
  templateUrl: './create-post.component.html',
})
export class CreatePostComponent implements OnInit{

  currentUser!: User;

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('user') || "");
    this.currentUser = new User(user);
    //console.log(user, this.currentUser);
  }
}
