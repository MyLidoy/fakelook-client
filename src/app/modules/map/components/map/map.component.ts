import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
export class MapComponent implements OnInit,AfterViewInit {
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
  ngAfterViewInit(): void {
    this.onInitEmitter.emit();
  }
  @Input() entities$!: Observable<AcNotification>;//any
  @Output() onInitEmitter = new EventEmitter();
  selectedPost!: PostComponent;
  showDialog = false;
  Cesium = Cesium;
  ngOnInit(): void {
  }
  showFullPost(post: PostComponent): void {
    this.showDialog = true;
    this.selectedPost = post;
  }
  closeDialog(): void {
    this.showDialog = false;
  }
}
