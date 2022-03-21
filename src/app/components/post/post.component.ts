import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from 'src/app/interfaces/IPost';
import { LikeService } from 'src/app/services/like.service';
import { Output, EventEmitter } from '@angular/core';
import { ILike } from 'src/app/interfaces/ILike';
import { CommentService } from 'src/app/services/comment.service';
import { IComment } from 'src/app/interfaces/IComment';
// import { userInfo } from 'os';
// import { resourceLimits } from 'worker_threads';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{
  @Input() post! : Ipost;
  @Output() newItemEvent = new EventEmitter<string>(); //send to parent feed that timeout
  description: string = "";
  imageSrc: string = "";
  x_Position:number=0;
  y_Position:number=0;
  z_Position:number=0;
  srcLike="assets/like.png";
  counterLikes=0;
  allDetails:boolean;
  content!:string;
  inputContent:boolean;
 

   constructor(private likeService :LikeService,private commentService:CommentService) 

  {
     this.inputContent=false;
      this.allDetails=false; 
  }

  ngOnInit(): void {
      this.displayCounterLikes();
      
    
    
   
  }
  publishCommentClicked(){

    let token=localStorage.getItem("token");
    if(token!=null){
      
      let comment={} as IComment;
      comment.postId==this.post.id;
      comment.content=this.content;
      this.commentService.addComment(comment,token).subscribe((result)=>
      {

      },
      (error)=>
      {
        console.log(error);
      });
    }
    

  }
  CommentClicked(){
    if(this.inputContent==false)
    {
      this.inputContent=true;

    }
    else{
      this.inputContent=false;
    }
  
  }
  
  displayCounterLikes()
  {
    
    let token=localStorage.getItem("token");
    if(token!=null)
    {
      this.likeService.getAllLikseByPostUrl(this.post.id,token).subscribe
      ((result)=>
      {
        let allLikesOfPost:ILike[] =result;
        allLikesOfPost.forEach(element => {
          if(element.userId==Number(localStorage.getItem("userId")))
          {
            this.srcLike="assets/likeblue.PNG"

          }
        });

      },(error)=>
      {
          console.log(error);
      });
      this.likeService.getCounterLikes(this.post.id,token).subscribe((result)=>
      {
        console.log(result)
        this.counterLikes=result;


      },(error)=>
      {
        console.log(error);

      });
      
    }
    else//token null
    {
      console.log("error");

    }

  }








  readMoreClicked()
  {
    if(this.allDetails==false)
      this.allDetails=true;
    else
      this.allDetails=false;

  }
  likeClicked()
  {
    var token=localStorage.getItem("token");
    if(token!=null)
    {
        let like={} as ILike;
      
        if(this.srcLike=="assets/like.png") //not active
      {
        like.postId=this.post.id;
        like.isActive=true;
        this.likeService.addLikeByPost (like,token).subscribe((result)=>
        {
          this.counterLikes++;
          this.srcLike="assets/likeblue.PNG"
          console.log(result);
        },(error)=>
        {
          console.log(error);
          if(error.status==401)
          {
            console.log(error.status);
            this.newItemEvent.emit("timeOut");
            
            //pass to feed that timeout
          }
        });
        

      }
        
      else //like active
      {
        
        
        this.likeService.deleteLike(this.post.id,token).subscribe((result)=>
        {
          this.counterLikes--;
          this.srcLike="assets/like.png"

        },(error)=>
        {
          console.log(error);
          console.log(error.status);
        });
      }

    }
    else//token is null
    {

    }
    

    
      
   
  }
  

  


}
