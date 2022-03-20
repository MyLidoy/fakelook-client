import { Component, OnInit } from '@angular/core';
import { Ipost } from 'src/app/interfaces/IPost';
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

  

  constructor(private postService:PostService) 
  {
    // this.x_Position=Number(undefined);
    // this.y_Position=Number(undefined);
    // this.z_Position=Number(undefined);
    this.expieredToken=false;
    this.Succeeded=false;
    this.alertPicture=false;
    this.alertX=false;
    this.alertY=false;
    this.alertZ=false;
    this.outOfTimeAlert=false;

  }

  ngOnInit(): void {
    // console.log(this.imagePath);
    // console.log(this.imgURL);
    //console.log(this.x_Position);

  }
  postClicked()

  {
    if(this.imageAndLocationNotEmpty() && validateFile(this.imageSorce) )
    {
      var token=localStorage.getItem("token");
      if(token!=null)
      {
        console.log(this.imageSorce);
        let post ={} as Ipost;
        post.x_Position=this.x_Position;
        post.y_Position=this.y_Position;
        post.z_Position=this.z_Position;
        post.imageSorce=this.imgURL;
        post.description=this.description;
        post.date=new Date(Date.now())
        console.log(post);
        this.postService.publishPost(post,token).subscribe((result)=>{
          this.Succeeded=true;

        },(error)=>{
        if(error.status==401)
        {
          console.log(error.status);
          this.outOfTimeAlert=true;
        }});

      }
      else{
        this.expieredToken=true;

      }

    
    }
    else{
      if(this.imageSorce==undefined)
      {
        this.alertPicture=true;

      }
        
      if(this.x_Position==undefined)
      {
        this.alertX=true;
      }
      if(this.y_Position==undefined)
      {
        this.alertY=true;
      }
      if(this.z_Position==undefined)
      {
        this.alertZ=true;
      }
       
    }

  }


  imageAndLocationNotEmpty()
  {
    if(this.imageSorce==undefined || this.x_Position==undefined|| this.y_Position==undefined || this.y_Position==undefined )
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
