import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPoints } from '../class/end-points';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private rutaPostEndPoint:EndPoints = new EndPoints();

  constructor(private http: HttpClient) { }

  public getPost(limitNumber:number, skipNumber:number):Observable<any> {
    return this.http.get<any>(
      `${this.rutaPostEndPoint.getPost}?limit=${limitNumber}&skip=${skipNumber}`,
      {
        headers: {
          "Content-Type": "Application/json"
        }
      }
    );
  }
}
