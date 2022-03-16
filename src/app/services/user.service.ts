import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IHttpResponse } from '../interfaces/IHttpResponse';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) 
  {

  }
  login(user:IUser):Observable<IHttpResponse>{
    return this.http.post<IHttpResponse>(environment.loginUrl,user);
  }
  signUp(user:IUser):Observable<IHttpResponse>{
    return this.http.post<IHttpResponse>(environment.signUpUrl,user);
  }
  
}
