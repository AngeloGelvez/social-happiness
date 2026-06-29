import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-module',
  imports: [CommonModule, RouterLink],
  templateUrl: './post-module.component.html',
})
export class PostModuleComponent implements OnInit {

  @Input() id!: number;
  @Input() title!: string;
  @Input() body!: string;
  @Input() likes!: number;
  @Input() dislikes!: number;
  @Input() tags!: string[];
  @Input() views!: number;
  @Input() userId!: number;
  @Input() user!: { img: string, name:string, username:string };

  ngOnInit(): void {
    
  }
}
