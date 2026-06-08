import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPoints } from '../Class/end-points';
import { Observable } from 'rxjs';
import { LoginModel } from '../Class/login-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private rutaLoginEndPoint: EndPoints = new EndPoints();

  constructor(private http: HttpClient) { }

  public userLogin(body:LoginModel):Observable<any> {
    //console.log(this.rutaLoginEndPoint.getLogin, JSON.stringify(body));
    return this.http.post<any>(
      this.rutaLoginEndPoint.getLogin,
      JSON.stringify(body),
      {
        headers: {
          "Content-Type": "Application/json"
        }
      }
    );
  }
}
