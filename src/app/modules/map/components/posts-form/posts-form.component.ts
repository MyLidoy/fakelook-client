// import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { PostComponent } from 'src/app/components/post/post.component';
// // const randomLocation = require('random-location');
// import { Ipost } from 'src/app/interfaces/IPost';
// import { LikeService } from 'src/app/services/like.service';

// @Component({
//   selector: 'app-posts-form',
//   templateUrl: './posts-form.component.html',
//   styleUrls: ['./posts-form.component.css'],
// })
// export class PostsFormComponent implements OnInit {
//   @Output() submitEmitter: EventEmitter<Ipost> = new EventEmitter();
//   post! : Ipost;
//   file: any;
//   Cesium = Cesium;
//   opost!: Ipost;

//   constructor() {}

//   ngOnInit(): void {}
//   changeFile(event: any): void {
//     this.file = event.target.files[0];
//   }
//   // submitPost(img: any): void {
//   //   this.opost={
//   //     id:0,
//   //     description:this.post.description,
//   //     imageSorce:this.file,
//   //     x_Position:32.08475922004732,
//   //     y_Position:34.783124754311046,
//   //     z_Position:34.783124754311046,
//   //     date:new Date(),
//   //     userId:0
//   //   }
//   //   this.submitEmitter.emit(this.opost);
//   //   this.post = {}
//   //   img.value = '';
//   //   this.file = undefined;
//   // }
//   // private randomLocation(): any {
//   //   const randomStart = {
//   //     latitude: 37.7768006 * Math.random(),
//   //     longitude: -122.4187928 * Math.random(),
//   //   };
//   //   const radius = 5000000000 * Math.random();
//   //   const { latitude, longitude } = randomLocation.randomCirclePoint(
//   //     randomStart,
//   //     radius
//   //   );

//   //   return Cesium.Cartesian3.fromDegrees(longitude, latitude);
//   // }
// }
