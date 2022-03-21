import { Component, OnInit } from '@angular/core';
import { Ipost } from 'src/app/interfaces/IPost';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  allPosts:Ipost[]=[];
  outOfTimeAlert=false;

  constructor(private PostService:PostService) { }

  ngOnInit(): void {
    this.getPostsList();
  }
  
  getPostsList(){
    var token=localStorage.getItem("token");
  
    if(token!=null)
    {
      
      this.PostService.getAllPosts(token).subscribe(
      (result) => {this.allPosts=result;},
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
  likeTimeOut(value:string)//get from child post
  {
    this.outOfTimeAlert=true;
  }

}
