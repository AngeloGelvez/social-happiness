import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPoints } from '../Class/end-points';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private rutaAuthenticatedEndpoint:EndPoints = new EndPoints();

  constructor(private http: HttpClient) { }

  public getAuthenticated(token:string):Observable<any> {
    return this.http.get<any>(
      this.rutaAuthenticatedEndpoint.getAuthenticated,
      {
        headers: {
          "Content-Type": "Application/json",
          "Authorization": `Bearer ${token}`
        }
      }
    );
  }
}
