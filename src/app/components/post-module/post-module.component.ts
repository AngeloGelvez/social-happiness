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
  @Input() userId!: number;

  bg_color!:string;
  icon_bg_color!:string;

  array_bg_colors: string[] = [
    "bg-blue",
    "bg-cyan",
    "bg-yellow",
    "bg-indigo",
  ];

  ngOnInit(): void {
    let numberRandom = Math.round(Math.random() * 3);

    this.bg_color = `${this.array_bg_colors[numberRandom]}-100`;
    this.icon_bg_color = `${this.array_bg_colors[numberRandom]}-400`;
  }
}
