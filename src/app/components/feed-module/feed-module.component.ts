import { Component, OnInit } from '@angular/core';
import { Post } from '../../../class/post';
import { PostsService } from '../../../service/posts.service';
import { PostModuleComponent } from "../post-module/post-module.component";
import { UserByIdService } from '../../../service/user-by-id.service';
import { User } from '../../../class/user';

@Component({
  selector: 'app-feed-module',
  imports: [PostModuleComponent],
  templateUrl: './feed-module.component.html',
})
export class FeedModuleComponent implements OnInit {

  postList!: Array<Post>;
  postListWithUser: Array<Post> = [];

  loader:boolean = true;
  loaderMorePost:boolean = false;

  userByPost!:User;

  screenY = window.screen.availHeight;

  skipNumber:number = 0;

  constructor(
    private getPostService: PostsService,
    private getUserByIdService: UserByIdService
  ) {}

  ngOnInit(): void {
    this.getPosts(4,this.skipNumber);
  }

  public getPosts(limitNumber:number, skipNumber:number):void {
    this.getPostService.getPost(limitNumber, skipNumber).subscribe({
      next: res => {
        this.postList = res.posts;
        this.addUserToPost();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  public getUserById(postModel: Post): void {
    this.getUserByIdService.getUserById(postModel.userId).subscribe({
      next: (res) => {
        this.userByPost = new User(res);
        postModel.userModel = { img: this.userByPost.image , name: `${this.userByPost.firstName} ${this.userByPost.lastName}` , username: this.userByPost.username };
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  public addUserToPost():void {
    this.postList.forEach(( el ) => {
      this.getUserById(el);
    });

    this.postListWithUser = [...this.postListWithUser, ...this.postList];
    
    setTimeout(() => {
      this.loader = false;
      this.loaderMorePost = false;
    }, 1000);
  }

  public onWindowScroll(eventScroll: Event) {
    //console.log(eventScroll);
    const scrollY = window.scrollY;
    let screeny = window.screen.availHeight;
    //console.log('Global Window Scroll Y:', scrollY);
    //console.log(window.screen.availHeight);
    console.log(scrollY, screeny);
    if(scrollY > this.screenY) {
      this.loaderMorePost = true;
      this.skipNumber += 4;
      this.getPosts(4,this.skipNumber);

      this.screenY += screeny;
      console.log(this.screenY, scrollY);
    }
  }
}
