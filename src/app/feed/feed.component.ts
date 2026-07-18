import { Component, OnInit } from '@angular/core';
import { ProfileModuleComponent } from "../components/profile-module/profile-module.component";
import { DataComplementComponent } from "../components/data-complement/data-complement.component";
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-feed',
  imports: [ProfileModuleComponent, DataComplementComponent, RouterOutlet],
  templateUrl: './feed.component.html'
})
export class FeedComponent implements OnInit {

  routeActive!: string;

  constructor(
    private activedRoute: Router,
  ) {}

  ngOnInit(): void {
    this.routeActive = this.activedRoute.url;
  }
}
