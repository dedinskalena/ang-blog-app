import { Component, OnInit } from '@angular/core';
import { Post, PostValue } from 'src/app/models/post';
 
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  feacherdPostsArray:Array<PostValue>
  latestPostArray:Array<PostValue>

  constructor(private postService:PostsService){
    
  }
ngOnInit(): void {
  this.postService.loadFeacheredPosts().subscribe(val=>{
    this.feacherdPostsArray=val
  });
  this.postService.loadLatestPost().subscribe(val=>{
    //console.log(val)
    this.latestPostArray=val
  })
}
  
}
