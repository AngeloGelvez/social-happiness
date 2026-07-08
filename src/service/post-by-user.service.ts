import { Injectable } from '@angular/core';
import { EndPoints } from '../class/end-points';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostByUserService {

  private rutaEndpoint:EndPoints = new EndPoints();

  constructor(private http: HttpClient) { }

  public getPostByUserId(userId: number):Observable<any> {
    return this.http.get<any>(
      `${this.rutaEndpoint.getUser}/${userId}/posts`,
      {
        headers: {
          "Content-Type": "Application/json"
        }
      }
    );
  }
}
