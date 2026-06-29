import { Injectable } from '@angular/core';
import { EndPoints } from '../class/end-points';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsByPostService {

  private urlRutaGetUsers:EndPoints = new EndPoints();

  constructor(
    private http: HttpClient
  ) { }

  public getCommentsByPost(id:number):Observable<any> {
    return this.http.get<any>(
      `${this.urlRutaGetUsers.getComments}/post/${id}`,
      {
        headers: {
          "Content-Type": "Application/json"
        }
      }
    );
  }
}
