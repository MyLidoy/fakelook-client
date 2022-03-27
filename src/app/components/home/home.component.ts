import { Component, Input, OnInit } from '@angular/core';
import { QueryRequest } from 'src/app/interfaces/queryRequest';
import { PostService } from 'src/app/services/post.service';
import { Ipost } from 'src/app/interfaces/IPost';
import { BehaviorSubject, map, mergeMap, pairwise } from 'rxjs';
import { PostConverter } from 'src/app/converters/post-converter';
import { ActionType } from 'angular-cesium';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  map:boolean=true;
  Posts:Ipost[]=[]
  postSubject = new BehaviorSubject<Ipost[]>([]);
  outOfTimeAlert=false;
  constructor(private postService:PostService) { }
  

  ngOnInit(): void {
    this.getPostsList();
  }
  getEntites(){
  return this.postSubject.asObservable().pipe(
    pairwise(),
    map((posts) => {
      const combine = posts[0].concat(posts[1])
      return combine.map((post) => ({
        id: post.id.toString(),
        actionType: this.getActionType(post,posts[1]),
        entity: PostConverter.convertIpostToCesiumEntity(post),
      }));
    }),
    mergeMap((entity) => entity)
  );
  }
  getActionType(post:Ipost,newPosts:Ipost[]):ActionType{
    let action;
    newPosts.find(p=>p.id === post.id)?action = ActionType.ADD_UPDATE:action =ActionType.DELETE;
    return action;
  }
  changeView(){
    this.map = !this.map;
  }
  getPostsList(){
      var token=localStorage.getItem("token");
    
      if(token!=null)
      {
        
        this.postService.getAllPosts(token).subscribe(
        (result) => {
          this.Posts=result;
          this.postSubject.next(result)
        },
        (error)=>{
          if(error.status==401)
          {
            this.outOfTimeAlert=true;
          }});
       
  
      }
      else{
        this.outOfTimeAlert=true;
  
      }
      
    }
  
  filter(query:QueryRequest){
    let token=localStorage.getItem("token");
    if(token!=null){

        this.postService.getAllPostsByFilter(token,query).subscribe((result)=>
      {
        
        this.Posts=result;
        this.postSubject.next(result)
      },
      (error)=>
      {
        console.log(error);

      });
    }
    
    
  }

  emitVal(){
    this.postSubject.next(this.postSubject.getValue())
  }
}
// this.entities$ = this.postService.getAllPostsByFilter(token,query).pipe(
//   map((posts:any[]) => {
//     this.Posts=posts;
//     return posts.map((post) => ({
//       id: post.id,
//       actionType: ActionType.ADD_UPDATE,
//       entity: PostConverter.convertIpostToCesiumEntity(post),
//     }));
//   }),
//   mergeMap((entity) => entity) //any
// );;