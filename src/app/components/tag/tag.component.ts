import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag',
  imports: [CommonModule],
  templateUrl: './tag.component.html',
})
export class TagComponent implements OnInit {
  @Input() name!:string;
  @Input() slug!:string;
  @Input() url!:string;

  bg_color!:string;
  colors: string[] = [
    "bg-green",
    "bg-blue",
    "bg-yellow",
    "bg-red",
    "bg-pink",
    "bg-cyan",
  ] 

  ngOnInit(): void {
    let numberRanodm = Math.round(Math.random() * 4);

    this.bg_color = this.colors[numberRanodm];
  }
}
