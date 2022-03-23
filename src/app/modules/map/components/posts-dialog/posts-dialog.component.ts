import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostComponent } from 'src/app/components/post/post.component';
import { Ipost } from 'src/app/interfaces/IPost';

@Component({
  selector: 'app-posts-dialog',
  templateUrl: './posts-dialog.component.html',
  styleUrls: ['./posts-dialog.component.css'],
})
export class PostsDialogComponent implements OnInit {
  @Input() posts!: PostComponent;
  @Output() closeDialogEmitter = new EventEmitter();
  constructor() {

  }

  ngOnInit(): void {}
  close(): void {
    this.closeDialogEmitter.emit();
  }
  
}
