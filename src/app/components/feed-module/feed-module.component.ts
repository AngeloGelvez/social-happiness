import { Component, OnInit } from '@angular/core';
import { Post } from '../../../class/post';
import { PostsService } from '../../../service/posts.service';
import { PostModuleComponent } from "../post-module/post-module.component";

@Component({
  selector: 'app-feed-module',
  imports: [PostModuleComponent],
  templateUrl: './feed-module.component.html',
})
export class FeedModuleComponent implements OnInit {

  postList!: Array<Post>;
  loader:boolean = true;

  constructor(
    private getPostService: PostsService
  ) {}

  ngOnInit(): void {
    setTimeout( () => {
      this.getPosts();
    }, 1500);
  }

  public getPosts():void {
    this.getPostService.getPost().subscribe({
      next: res => {
        this.postList = res.posts;
        console.log(this.postList);
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        this.loader = false;
      }
    });
  }
}
