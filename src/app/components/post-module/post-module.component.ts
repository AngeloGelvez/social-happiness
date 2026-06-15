import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-module',
  imports: [CommonModule],
  templateUrl: './post-module.component.html',
})
export class PostModuleComponent implements OnInit {

  @Input() title!: string;
  @Input() body!: string;
  @Input() likes!: number;
  @Input() dislikes!: number;
  @Input() tags!: string[];
  @Input() views!: number;
  @Input() user!: { img: string, name:string, username:string };

  ngOnInit(): void {
    
  }
}
