import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Post } from '../../../class/post';
import { PostsService } from '../../../service/posts.service';
import { PostModuleComponent } from "../post-module/post-module.component";
import { UserByIdService } from '../../../service/user-by-id.service';
import { User } from '../../../class/user';
import { FormsModule } from '@angular/forms';
import { SearchPostService } from '../../../service/search-post.service';

@Component({
  selector: 'app-feed-module',
  imports: [PostModuleComponent, FormsModule],
  templateUrl: './feed-module.component.html',
})
export class FeedModuleComponent implements OnInit {

  postList!: Array<Post>;
  postListWithUser: Array<Post> = [];

  userByPost!: User;

  // Variables de control que debes tener en tu componente:
  loader: boolean = false;
  loaderMorePost: boolean = false;
  skipNumber: number = 0;
  hasMorePosts: boolean = true;

  public isSearching: boolean = false;
  public searchFeedTerm: string = '';

  constructor(
    private getPostService: PostsService,
    private getUserByIdService: UserByIdService,
    private getPostSearchService: SearchPostService
  ) { }

  ngOnInit(): void {
    this.getPosts(4, this.skipNumber);
  }

  public searchInput() {
    this.isSearching = !this.isSearching;
    this.searchFeedTerm = "";
    this.skipNumber = 0;
    
    this.postListWithUser = [];

    if(this.isSearching === false) {
      this.getPosts(4, this.skipNumber);
    }
  }

  public searchPost() {
    //console.log(this.searchFeedTerm);
    this.postListWithUser = [];
    this.getSearchPosts(this.searchFeedTerm, this.skipNumber);
  }

  public getSearchPosts(search: string, skipNumber: number): void {
    this.getPostSearchService.getSearchPost(search, skipNumber).subscribe({
      next: res => {
        //console.log(res);
        this.postList = res.posts;
        this.addUserToPost();
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        this.loaderMorePost = false;
      }
    });
  }

  public getPosts(limitNumber: number, skipNumber: number): void {
    this.getPostService.getPost(limitNumber, skipNumber).subscribe({
      next: res => {
        this.postList = res.posts;
        this.addUserToPost();
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        this.loaderMorePost = false;
      }
    });
  }

  public getUserById(postModel: Post): void {
    this.getUserByIdService.getUserById(postModel.userId).subscribe({
      next: (res) => {
        this.userByPost = new User(res);
        postModel.userModel = { img: this.userByPost.getimage, name: `${this.userByPost.getfirstName} ${this.userByPost.getlastName}`, username: this.userByPost.getusername };
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  public addUserToPost(): void {
    this.postList.forEach((el) => {
      this.getUserById(el);
    });

    this.postListWithUser = [...this.postListWithUser, ...this.postList];
    console.log(this.postListWithUser);

    setTimeout(() => {
      this.loader = true;
      this.loaderMorePost = false;
    }, 1000);
  }

  public onWindowScroll() {
    // 1. COMPUERTA DE BLOQUEO: Si ya está cargando datos o no hay más posts, salimos de la función.
    if (this.loaderMorePost || !this.hasMorePosts || this.postListWithUser) {
      return;
    }

    // 2. MÁTEMATICA ESTÁNDAR DE SCROLL:
    const alturaTotalDocumento = document.documentElement.scrollHeight;
    const alturaPantallaVisual = window.innerHeight;
    const scrollActual = window.scrollY;

    // Umbral de disparo: 300 píxeles antes de llegar al fondo absoluto
    const umbral = 300;

    if ((alturaPantallaVisual + scrollActual) >= (alturaTotalDocumento - umbral)) {
      this.loaderMorePost = true;
      this.skipNumber += 4;

      if(this.searchFeedTerm.length > 0) {
        this.getSearchPosts(this.searchFeedTerm, this.skipNumber);
      }else {
        this.getPosts(4, this.skipNumber);
      }
    }
  }
}
