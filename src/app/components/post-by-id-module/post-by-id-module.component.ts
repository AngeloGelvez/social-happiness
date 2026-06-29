import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostByIdService } from '../../../service/post-by-id.service';
import { Post } from '../../../class/post';
import { User } from '../../../class/user';
import { UserByIdService } from '../../../service/user-by-id.service';
import { CommentsByPostService } from '../../../service/comments-by-post.service';

@Component({
  selector: 'app-post-by-id-module',
  imports: [RouterLink],
  templateUrl: './post-by-id-module.component.html',
})
export class PostByIdModuleComponent {

  postById!: Post;
  userByPost!: User;
  commetsObj: {comments:any, limit: number, skip: number, total: number} = {comments: [], limit: 0, skip: 0, total: 0};

  constructor(
    private getPostByIdService: PostByIdService,
    private getUserByIdService: UserByIdService,
    private getCommentsByPostService: CommentsByPostService,
    private activedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    let numberId = this.activedRoute.snapshot.params["id"];

    this.getPostById(numberId);
  }

  public getPostById(id:number) {
    this.getPostByIdService.getPostById(id).subscribe({
      next: (res) => {
        let post = res;
        //console.log(res);
        this.getUserById(post);
        this.getCommentsByPost(post.id);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        
      },
    });
  }

  public getUserById(postModel: Post): void {
    this.getUserByIdService.getUserById(postModel.userId).subscribe({
      next: (res) => {
        this.userByPost = new User(res);
        postModel.userModel = { img: this.userByPost.getimage, name: `${this.userByPost.getfirstName} ${this.userByPost.getlastName}`, username: this.userByPost.getusername };

        this.postById = postModel;
        console.log(this.postById);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  public getCommentsByPost(postId: number) {
    this.getCommentsByPostService.getCommentsByPost(postId).subscribe({
      next: (res) => {
        console.log(res);
        this.commetsObj = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
