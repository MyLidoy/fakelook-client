import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITag } from '../interfaces/ITag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) { }

  addTag(tag:ITag,token: string): Observable<ITag> {
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json','Authorization': `Bearer ${token}`})
    };
    return this.http.post<ITag>(environment.addTagUrl, tag, httpOptions);
  }
}
