import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { FeedComponent } from './components/feed/feed.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MapComponent } from './modules/map/components/map/map.component';

const routes: Routes = [
  { path: 'sign-up.component', component: SignUpComponent },
  { path: 'login-component', component:  LoginComponent },
  {path: 'feed-component', component:  FeedComponent},
  {path: 'add-post-component', component:  AddPostComponent},
  {path: 'map-component', component: MapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
