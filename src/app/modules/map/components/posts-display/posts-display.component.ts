import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Ipost } from 'src/app/interfaces/IPost';

@Component({
  selector: 'app-posts-display',
  templateUrl: './posts-display.component.html',
  styleUrls: ['./posts-display.component.css'],
})
export class PostsDisplayComponent implements OnInit {
  constructor() {}
  @Input() posts$!: Observable<Ipost[]>;
  @Output() postDeleteEventEmitter = new EventEmitter<string>();
  ngOnInit(): void {
  }
  deletePost(id: Number): void {
    this.postDeleteEventEmitter.emit(id.toString());
  }
}
