import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostComponent } from 'src/app/components/post/post.component';
import { Ipost } from 'src/app/interfaces/IPost';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts-menu',
  templateUrl: './posts-menu.component.html',
  styleUrls: ['./posts-menu.component.css'],
})
export class PostsMenuComponent implements OnInit {
  // token=localStorage.getItem("token");
  // posts$!: Observable<Ipost[]>;

  constructor(private router :Router) {}
  
  

  ngOnInit(): void {
    // this.posts$ = this.postsService.getAllPosts(this.token as string );
  }
  // onNewPost(form: Ipost): void {
  //   this.postsService.publishPost(form,this.token!);
  // }
  // onPostDelete(id: string): void {
  //   this.postsService.deletePost(id);
  //}


  postImgClicked(){
    this.router.navigate(['/', 'add-post-component']);
  }
  friendsImgClicked(){

  }
}
