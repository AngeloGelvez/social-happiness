import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Post } from '../../../class/post';
import { PostModuleComponent } from "../post-module/post-module.component";
import { UserByIdService } from '../../../service/user-by-id.service';
import { User } from '../../../class/user';
import { PostsByTagService } from '../../../service/posts-by-tag.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feed-tag-module',
  imports: [PostModuleComponent, RouterLink, CommonModule],
  templateUrl: './feed-tag-module.component.html',
})
export class FeedTagModuleComponent implements OnInit, OnDestroy {

  private subParams!: Subscription;

  postLitEmpty: boolean = false;

  postList!: Array<Post>;
  postListWithUser: Array<Post> = [];

  userByPost!: User;

  tagName!: string;

  // Variables de control que debes tener en tu componente:
  loader: boolean = false;
  loaderMorePost: boolean = false;
  skipNumber: number = 0;
  hasMorePosts: boolean = true;

  constructor(
    private getPostByTag: PostsByTagService,
    private getUserByIdService: UserByIdService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Escucha cambios en los parámetros de la URL (/ruta/:id)
    this.subParams = this.activatedRoute.paramMap.subscribe(params => {
      this.tagName = this.activatedRoute.snapshot.params["name"];
      this.getPosts(this.tagName, 4, this.skipNumber);
    });
  }

  ngOnDestroy(): void {
    this.subParams.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("cambios");
    console.log(changes);
  }

  public getPosts(nombreTag: string, limitNumber: number, skipNumber: number): void {
    this.getPostByTag.getTagsByTag(nombreTag, limitNumber, skipNumber).subscribe({
      next: res => {
        //console.log(res);
        if (res.total == 0) {
          this.postLitEmpty = true;
          this.loader = true;
          this.loaderMorePost = false;
        } else {
          this.postList = res.posts;
          this.addUserToPost();
        }
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

    setTimeout(() => {
      this.loader = true;
      this.loaderMorePost = false;
    }, 1000);
  }

  public onWindowScroll() {
    // 1. COMPUERTA DE BLOQUEO: Si ya está cargando datos o no hay más posts, salimos de la función.
    if (this.loaderMorePost || !this.hasMorePosts || !this.postLitEmpty) {
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

      this.getPosts(this.tagName, 4, this.skipNumber);
    }
  }
}
