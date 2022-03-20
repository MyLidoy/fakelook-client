import { Component, OnInit } from '@angular/core';
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
  constructor(private postsService: PostService) {}
  posts$!: Observable<Ipost[]>;
  token=localStorage.getItem("token");

  ngOnInit(): void {
    this.posts$ = this.postsService.getAllPosts();
  }
  onNewPost(form: Ipost): void {
    this.postsService.publishPost(form,this.token!);
  }
  onPostDelete(id: string): void {
    this.postsService.deletePost(id);
  }
}
