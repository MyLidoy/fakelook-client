import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ipost } from '../interfaces/IPost';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(token:string): Observable<Ipost[]> {
    

    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json','Authorization': `Bearer ${token}`}),
    };
    return this.http.get<Ipost[]>(environment.postsUrl, httpOptions);
  }

  publishPost(post:Ipost,token: string): Observable<Ipost> {
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json','Authorization': `Bearer ${token}`})
    };
    return this.http.post<Ipost>(environment.publishPostUrl, post, httpOptions);
  }

}
