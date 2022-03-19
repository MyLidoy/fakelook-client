import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { FeedComponent } from './components/feed/feed.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'sign-up.component',component: SignUpComponent },
  { path: 'login-component', component:  LoginComponent },
  {path: 'feed-component', component:  FeedComponent},
  {path: 'add-post-component', component:  AddPostComponent},
  {path: 'forgot-password.component', component:  ForgotPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
