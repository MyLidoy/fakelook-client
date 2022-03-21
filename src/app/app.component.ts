import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router: Router) {}
  
  ngOnInit():void{
   
  }
  signOutClicked(){
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    this.router.navigate(['/']);

  }
  
  title = 'fakelook-client';
}
