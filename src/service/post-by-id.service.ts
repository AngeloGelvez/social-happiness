import { Injectable } from '@angular/core';
import { EndPoints } from '../class/end-points';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostByIdService {

  private urlRutaGetUsers:EndPoints = new EndPoints();

  constructor(
    private http: HttpClient
  ) { }

  public getPostById(id:number):Observable<any> {
    return this.http.get<any>(
      `${this.urlRutaGetUsers.getPost}/${id}`,
      {
        headers: {
          "Content-Type": "Application/json"
        }
      }
    );
  }
}
