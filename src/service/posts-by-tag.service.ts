import { Injectable } from '@angular/core';
import { EndPoints } from '../class/end-points';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsByTagService {

  tagsUrlEndPoint: EndPoints = new EndPoints();

  constructor(private http: HttpClient) { }

  public getTagsByTag(nombreTag: string, limitNumber:number, skipNumber:number):Observable<any> {
    return this.http.get<any>(
      `${this.tagsUrlEndPoint.getPost}/tag/${nombreTag}?limit=${limitNumber}&skip=${skipNumber}`,
      {
        headers: {
          "Content-type": "Application-json"
        }
      }
    );
  }
}
