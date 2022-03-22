import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { FeedComponent } from './components/feed/feed.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MapComponent } from './modules/map/components/map/map.component';

const routes: Routes = [
  { path: 'sign-up.component',component: SignUpComponent },
  { path: '', component:  LoginComponent },
  {path: 'feed-component', component:  FeedComponent},
  {path: 'add-post-component', component:  AddPostComponent},
  {path: 'map-component', component: MapComponent },
  {path: 'forgot-password.component', component:  ForgotPasswordComponent},
  {path: 'sign-out.component', component:  SignOutComponent},
  {path: 'home-component', component:  HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
