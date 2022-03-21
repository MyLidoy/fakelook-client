import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILike } from '../interfaces/ILike';
import { Ipost } from '../interfaces/IPost';


@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private http: HttpClient)
  {

  }
  
  addLikeByPost(like:ILike,token: string): Observable<ILike> {
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json','Authorization': `Bearer ${token}`})
    };
    return this.http.post<ILike>(environment.addlikeUrl, like, httpOptions);
  }

  deleteLike(postId:number,token: string):Observable<ILike>{
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json','Authorization': `Bearer ${token}`})
    };
    return this.http.delete<ILike>(environment.revokeLikeUrl+'?postId='+postId,httpOptions);
  }

  getCounterLikes(postId:number,token:string): Observable<number> {
    

    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json','Authorization': `Bearer ${token}`}),
    };
    return this.http.get<number>(environment.countLikesUrl+'?postId='+postId, httpOptions);
  }
  getAllLikseByPostUrl(postId:number,token:string):Observable<ILike[]>{
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json','Authorization': `Bearer ${token}`}),
    };
    return this.http.get<ILike[]>(environment.getAllLikseByPostUrl+'/'+postId, httpOptions);

  }

}
