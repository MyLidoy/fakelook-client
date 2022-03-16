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

  constructor(private PostService:PostService) { }

  ngOnInit(): void {
    this.getPostsList();
  }
  
  getPostsList(){
    this.PostService.getAllPosts().subscribe((result) => {
      this.allPosts=result;
    })
  }

}
