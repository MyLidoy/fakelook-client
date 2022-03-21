import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IComment } from '../interfaces/IComment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) 
  { 

  }
  addComment(comment:IComment,token:string): Observable<IComment> {
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json','Authorization': `Bearer ${token}`})
    };
    return this.http.post<IComment>(environment.addCommentUrl, comment, httpOptions);
  }
  deleteComment(commentId:number,token: string):Observable<IComment>{
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json','Authorization': `Bearer ${token}`})
    };
    return this.http.delete<IComment>(environment.deleteCommentUrl+'?id='+commentId,httpOptions);
  }

}
