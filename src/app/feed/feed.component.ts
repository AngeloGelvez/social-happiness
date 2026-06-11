import { Component, OnInit } from '@angular/core';
import { ProfileModuleComponent } from "../components/profile-module/profile-module.component";
import { FeedModuleComponent } from '../components/feed-module/feed-module.component';

@Component({
  selector: 'app-feed',
  imports: [ProfileModuleComponent, FeedModuleComponent],
  templateUrl: './feed.component.html'
})
export class FeedComponent implements OnInit{

  ngOnInit(): void {
    
  }
}
