import { Injectable } from '@angular/core';
import { EndPoints } from '../class/end-points';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  private rutaPostUserEndPoints: EndPoints = new EndPoints();

  constructor(private http: HttpClient) { }

  public postUser(userData: User):Observable<any> {

    return this.http.post<any>(
      `${this.rutaPostUserEndPoints.getUser}/add`,
      JSON.stringify(userData),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

  }
}
