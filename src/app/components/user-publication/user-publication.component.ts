import { Component, OnInit } from '@angular/core';
import { PostByUserService } from '../../../service/post-by-user.service';
import { User } from '../../../class/user';
import { RouterLink } from "@angular/router";
import { Post } from '../../../class/post';

@Component({
  selector: 'app-user-publication',
  imports: [RouterLink],
  templateUrl: './user-publication.component.html',
})
export class UserPublicationComponent implements OnInit{

  userActive!:User;

  myPost!:Array<Post>;

  res!:any;

  ngOnInit(): void {
    let user = localStorage.getItem("user");
    if(user) {
      this.userActive = new User(JSON.parse(user));
      console.log(this.userActive);
      this.getUserPublication(this.userActive.getid);
    }else {
      console.log("No exite ningun usuario, no se puede renderizar");
    }
  }

  constructor(
    private userPublicationService: PostByUserService
  ) {}

  public getUserPublication(userId: number) {
    this.userPublicationService.getPostByUserId(userId).subscribe({
      next: value => {
        console.log(value);
        this.res = value;
        this.myPost = value.posts;
      },
      error: err => {
        console.log(err);
      },
    });
  }
}
