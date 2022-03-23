import { Component, EventEmitter, OnInit, Output, Query } from '@angular/core';
import { Router } from '@angular/router';
import { QueryRequest } from '../../../../interfaces/queryRequest';

@Component({
  selector: 'app-posts-menu',
  templateUrl: './posts-menu.component.html',
  styleUrls: ['./posts-menu.component.css'],
})
export class PostsMenuComponent implements OnInit {
  @Output() onSend = new EventEmitter<QueryRequest>();
  @Output() onCancel = new EventEmitter<any>();
  request: QueryRequest= new QueryRequest();
  fromDate:Date = new Date();
  untilDate:Date=new Date();
  tags:string="";


  constructor(private router: Router) { }


  ngOnInit(): void {

  }



  postImgClicked() {
    this.router.navigate(['/', 'add-post-component']);
  }
  friendsImgClicked() {

  }
  Send() {
    if(this.tags!="")
    {
      let tagsArray=this.tags.split("#");
      let index = tagsArray.indexOf("");
      if (index > -1) {
          tagsArray.splice(index, 1);
      }
      this.request.tags=tagsArray;
    }else{
      this.request.tags=[];
    }
     this.request.fromDate=this.fromDate;
     this.request.toDate=this.untilDate;
     this.onSend.emit(this.request);
  }
  cancel(){
     this.onCancel.emit();
  }

}
