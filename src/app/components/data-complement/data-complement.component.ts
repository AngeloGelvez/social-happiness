import { Component, OnInit } from '@angular/core';
import { TagComponent } from "../tag/tag.component";
import { TagsService } from '../../../service/tags.service';
import { QuotesCardModuleComponent } from "../quotes-card-module/quotes-card-module.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-data-complement',
  imports: [TagComponent, QuotesCardModuleComponent, RouterLink],
  templateUrl: './data-complement.component.html',
})
export class DataComplementComponent implements OnInit {

  listTags!: Array<{
    name:string,
    slug:string,
    url:string
  }>;

  loaderTags:boolean = true;

  userName:string = "Usuario";

  constructor(
    private tagGetService: TagsService,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getTags();
    },1000);

    let { firstName } = JSON.parse(localStorage.getItem("user") || "");
    this.userName = firstName;
  }

  public getTags(): void {
    this.tagGetService.getTags().subscribe({
      next: (res) => {
        this.listTags = res.slice(160);
        //console.log(this.listTags);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.loaderTags = false;
      }
    });
  }
}
