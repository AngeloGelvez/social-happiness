import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../../../service/quotes.service';

@Component({
  selector: 'app-quotes-card-module',
  imports: [],
  templateUrl: './quotes-card-module.component.html',
})
export class QuotesCardModuleComponent implements OnInit {

  mensaje:string = "";
  autor:string = "";

  constructor(
    private getQuotesService: QuotesService
  ) {}

  ngOnInit(): void {
    this.getQuotes();
  }

  public getQuotes():void {
    this.getQuotesService.getQuotesEndPoints().subscribe({
      next: (res) => {
        console.log(res);
        this.mensaje = res.quote;
        this.autor = res.author;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
