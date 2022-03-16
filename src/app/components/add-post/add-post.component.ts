import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  x_Position!:Number;
  y_Position!:Number;
  z_Position!:Number;
  imageSorce!:string;
  description!:string;

  constructor() 
  {

   }

  ngOnInit(): void {

  }
  postClicked()
  {

  }

}
