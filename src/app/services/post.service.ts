import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ipost } from '../interfaces/IPost';
import { IUserTagPost } from '../interfaces/IUserTagPost';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  deletePost(id: string) {
    throw new Error('Method not implemented.');
  }
  publishPost(post:Ipost,token: string,UserTags?:IUserTagPost): Observable<Ipost> {
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json','Authorization': `Bearer ${token}`})
    };
    return this.http.post<Ipost>(environment.publishPostUrl, post, httpOptions);
  }

  private subs: Subscription[] = [];
  private postsSubject: Subject<Ipost[]> = new Subject();
  getPostsWithDeleted() {
    this.subs.push(
      this.http
        .get<Ipost[]>(environment.postsUrl)
        .subscribe((res: any) => this.postsSubject.next(res))
    );
    return this.postsSubject.asObservable();
  }

  constructor(private http: HttpClient) { }

  getAllPosts(token:string): Observable<Ipost[]> {
    

    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json','Authorization': `Bearer ${token}`}),
    };
    return this.http.get<Ipost[]>(environment.postsUrl, httpOptions);
  }

  

}
