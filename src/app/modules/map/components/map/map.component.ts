import { Component, OnInit } from '@angular/core';
import {
  AcNotification,
  ViewerConfiguration,
  ActionType,
} from 'angular-cesium';
import { Observable } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { PostComponent } from 'src/app/components/post/post.component';
import { Ipost } from 'src/app/interfaces/IPost';
import { PostService } from 'src/app/services/post.service';
import { PostConverter } from 'src/app/converters/post-converter';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [ViewerConfiguration],
})
export class MapComponent implements OnInit {
  constructor(
    private viewerConf: ViewerConfiguration,
    private postService: PostService
  ) {
    viewerConf.viewerOptions = {
      selectionIndicator: false,
      timeline: false,
      infoBox: false,
      fullscreenButton: false,
      baseLayerPicker: false,
      animation: false,
      homeButton: false,
      geocoder: false,
      navigationHelpButton: false,
      navigationInstructionsInitiallyVisible: false,
      useDefaultRenderLoop: true,
    };
  }
  entities$!: Observable<AcNotification>;//any
  selectedPost!: PostComponent;
  showDialog = false;
  Cesium = Cesium;
  ngOnInit(): void {
    this.entities$ = this.postService.getAllPosts(localStorage.getItem("token")!).pipe(
      map((posts:any[]) => {
        return posts.map((post) => ({
          id: post.id,
          actionType: ActionType.ADD_UPDATE,
          entity: PostConverter.convertIpostToCesiumEntity(post),
        }));
      }),
      mergeMap((entity) => entity) //any
    );
  }
  showFullPost(post: PostComponent): void {
    this.showDialog = true;
    this.selectedPost = post;
  }
  closeDialog(): void {
    this.showDialog = false;
  }
}
