import { Injectable } from '@angular/core';
import { EndPoints } from '../class/end-points';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  tagsUrlEndPoint: EndPoints = new EndPoints();

  constructor(private http: HttpClient) { }

  public getTags():Observable<any> {
    return this.http.get<any>(
      this.tagsUrlEndPoint.getTags,
      {
        headers: {
          "Content-type": "Application-json"
        }
      }
    );
  }
}
