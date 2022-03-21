import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostComponent } from './components/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FeedComponent } from './components/feed/feed.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { MapComponent } from './modules/map/components/map/map.component';
import { AcMapComponent, AngularCesiumWidgetsModule, AcHtmlDescComponent, AcLayerComponent } from 'angular-cesium';
import { AngularCesiumModule } from 'angular-cesium';
import { PostsMenuComponent } from './modules/map/components/posts-menu/posts-menu.component';
// import { PostsFormComponent } from './modules/map/components/posts-form/posts-form.component';
import { PostsDisplayComponent } from './modules/map/components/posts-display/posts-display.component';
import { PostsDialogComponent } from './modules/map/components/posts-dialog/posts-dialog.component';
import { PostService } from './services/post.service';

import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    LoginComponent,
    SignUpComponent,
    FeedComponent,
    AddPostComponent,
    MapComponent,
    PostsMenuComponent,
    // PostsFormComponent,
    PostsDisplayComponent,
    PostsDialogComponent,
    ForgotPasswordComponent,
    SignOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AngularCesiumWidgetsModule,
    AngularCesiumModule.forRoot()
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
