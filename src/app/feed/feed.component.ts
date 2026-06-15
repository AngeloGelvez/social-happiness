import { Component, OnInit } from '@angular/core';
import { ProfileModuleComponent } from "../components/profile-module/profile-module.component";
import { FeedModuleComponent } from '../components/feed-module/feed-module.component';
import { DataComplementComponent } from "../components/data-complement/data-complement.component";

@Component({
  selector: 'app-feed',
  imports: [ProfileModuleComponent, FeedModuleComponent, DataComplementComponent],
  templateUrl: './feed.component.html'
})
export class FeedComponent implements OnInit{

  ngOnInit(): void {
    
  }
}
