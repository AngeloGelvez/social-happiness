import { Injectable } from '@angular/core';
import { EndPoints } from '../class/end-points';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  private rutaQuotesEndPoints: EndPoints = new EndPoints();

  constructor(private http: HttpClient) { }

  public getQuotesEndPoints():Observable<any> {
    return this.http.get<any>(
      this.rutaQuotesEndPoints.getQuotes,
      {
        headers: {
          "Content-type": "Application-json"
        }
      }
    );
  }
}
