import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../interfaces/IPost';



import { PostService } from 'src/app/services/post.service';
import { validateFile } from 'src/app/utils/validations';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  x_Position!:number;
  y_Position!:number;
  z_Position!:number;
  imageSorce!:string;
  description!:string;
  imagePath!:string;
  imgURL: any;
  message!: string;
  expieredToken:boolean;
  Succeeded:boolean;
  alertPicture:boolean;
  alertX:boolean;
  alertY:boolean;
  alertZ:boolean;
  outOfTimeAlert:boolean;
  allBodyComponent:boolean;

  

  constructor(private postService:PostService) 
  {
    this.allBodyComponent=true;
    this.expieredToken=false;
    this.Succeeded=false;
    this.alertPicture=false;
    this.alertX=false;
    this.alertY=false;
    this.alertZ=false;
    this.outOfTimeAlert=false;

  }

  ngOnInit(): void {
    
    
    

  }
  postClicked()

  {
    if(this.imageNotEmpty())
    {
      var token=localStorage.getItem("token");
      if(token!=null)
      {
          let post ={} as Ipost;
        
          navigator.geolocation.getCurrentPosition((data) => {
          post.x_Position = data.coords.longitude;
          post.y_Position = data.coords.latitude;
          post.z_Position =0;
          post.imageSorce=this.imgURL;
          var userToken="";
          userToken=localStorage.getItem("token") || '';
          post.description=this.description;
          post.date=new Date(Date.now())
          console.log(post);
          this.postService.publishPost(post,userToken).subscribe((result)=>{
          this.Succeeded=true;

          },(error)=>{
            console.log(error);
            if(error.status==401)
            {
              this.outOfTimeAlert=true;
              this.allBodyComponent=false;
            }});
        });

      }
      else{
        this.outOfTimeAlert=true;

      }

    
    }
    else{
      if(this.imageSorce==undefined)
      {
        this.alertPicture=true;

      }
        
      // if(this.x_Position==undefined)
      // {
      //   this.alertX=true;
      // }
      // if(this.y_Position==undefined)
      // {
      //   this.alertY=true;
      // }
      // if(this.z_Position==undefined)
      // {
      //   this.alertZ=true;
      // }
       
    }

  }


  imageNotEmpty()
  {
    if(this.imageSorce==undefined )
      return false;
    else 
      return true;
  }

  preview(files:any) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
      this.imageSorce=this.imgURL////!
     
    }
  }

  hideAlertX(){
    this.alertX=false;
  }
  hideAlertY(){
    this.alertY=false;
  }
  hideAlertZ(){
    this.alertZ=false;
  }
  hideAlertPicture(){
    this.alertPicture=false;
  }

   
 

}
