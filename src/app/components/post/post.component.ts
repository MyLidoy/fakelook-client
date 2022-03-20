import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from 'src/app/interfaces/IPost';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{
  @Input() post! : Ipost;
  description: string = "";
  imageSrc: string = "";
  x_Position:number=0;
  y_Position:number=0;
  z_Position:number=0;
  constructor() { 
    
  }
}
