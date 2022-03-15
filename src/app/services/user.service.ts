import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) 
  {

  }
  login(user:IUser):Observable<IUser>{
    return this.http.post<IUser>(environment.loginUrl,user);
    


  }
}
