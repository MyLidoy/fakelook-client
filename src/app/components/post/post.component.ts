import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Ipost } from 'src/app/interfaces/IPost';
import { IUser } from 'src/app/interfaces/IUser';
import { LikeService } from 'src/app/services/like.service';
import { Output, EventEmitter } from '@angular/core';
import { ILike } from 'src/app/interfaces/ILike';
import { CommentService } from 'src/app/services/comment.service';
import { IComment } from 'src/app/interfaces/IComment';
//import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

// import {MatAutocompleteModule} from '@angular/material/autocomplete';





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
  userTags:boolean;
  contentstArray:string[] =[]
  separatorKeysCodes: number[] = [ENTER, COMMA];
  nameCtrl = new FormControl();
  filteredNames: Observable<string[]>;
  names: string[] = [];
  allUsersName: string[] = [];
  allUsers: IUser[]=[];
  allCommentOfPost: IComment[]=[];
  allLikesOfPost:ILike[]=[];

  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;  

   constructor(private likeService :LikeService,private commentService:CommentService,private userService:UserService,private router:Router) 

  {
     this.inputContent=false;
      this.allDetails=false; 
      this.userTags=false;
      this.filteredNames = this.nameCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allUsersName.slice())),
      );
  }

  ngOnInit(): void {
      this.displayCounterLikes();
      
      
    
    
   
  }
  userTagsClicked(){
    if(this.userTags==false)
    {
      let token=localStorage.getItem("token");
       if(token!=null)
       {
         this.userService.getAllUsers(token).subscribe((result)=>
         {
           this.userTags=true;
           this.allUsers=result;
           this.allUsers.forEach(element=>
            {
              this.allUsersName.push(element.name);
            })

         },(error)=>
         {
          if(error.status==401)
            {
              this.router.navigate(['/']);
            }
            

         });
       }
       
    }
    else
    {
      this.userTags=false;

    }
   

  }
  publishCommentClicked(){

    let token=localStorage.getItem("token");
    if(token!=null){
      
      let comment={} as IComment;
      comment.postId=this.post.id;
      comment.content=this.content;
      
      this.commentService.addComment(comment,token).subscribe((result)=>
      {
        

      },
      (error)=>
      {
        if(error.status==401)
        {
          this.router.navigate(['/']);
        }
      });
    }
    else{

    }
    this.content="";

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
        this.post.likes=result;
        let allLikesOfPost:ILike[] =result;
        allLikesOfPost.forEach(element => {
          if(element.userId==Number(localStorage.getItem("userId")))
          {
            this.srcLike="assets/likeblue.PNG"

          }
        });

      },(error)=>
      {
        if(error.status==401)
        {
          this.router.navigate(['/']);
        }
      });
      this.likeService.getCounterLikes(this.post.id,token).subscribe((result)=>
      {
        
        this.counterLikes=result;


      },(error)=>
      {
        if(error.status==401)
        {
          this.router.navigate(['/']);
        }

      });
      
    }
    else//token null
    {
      

    }

  }

  readMoreClicked()
  {
    if(this.allDetails==false)
    {
      var token=localStorage.getItem("token");
      if(token!=null)
      {
        
        this.commentService.getAllCommentseByPostUrl(this.post.id,token).subscribe(
          (result)=>
          {
            this.post.comments=result;
            this.allCommentOfPost=result;
            this.contentstArray=[];
            result.forEach(element => {
            this.contentstArray.push(element.content);
              
            });
            
            this.allDetails=true;

          },
          (error)=>
          {
            if(error.status==401)
            {
              this.router.navigate(['/']);
            }

          });

      }
       


    }
     
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
          
        },(error)=>
        {
          console.log(error);
          if(error.status==401)
          {
            
            this.newItemEvent.emit("timeOut");
            if(error.status==401)
            {
              this.router.navigate(['/']);
            }
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
          if(error.status==401)
          {
            this.router.navigate(['/']);
          }
        });
      }

    }
    else//token is null
    {

    }
    
   
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.names.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.nameCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.names.indexOf(fruit);

    if (index >= 0) {
      this.names.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    ;
    this.names.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.nameCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allUsersName.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }
  

  


}
