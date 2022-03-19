import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from 'src/app/interfaces/IPost';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post! : Ipost;
  allDetails:boolean;

  constructor() 
  {
    this.allDetails=false; 
  }

  ngOnInit(): void {
    
   
  }
  readMoreClicked()
  {
    if(this.allDetails==false)
      this.allDetails=true;
    else
      this.allDetails=false;

  }
  

  


}
