import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post, PostValue } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit{
postData:any
similarPostArray:Array<PostValue>
  constructor(private route:ActivatedRoute,private postService:PostsService){}

  ngOnInit(): void {
    
    this.route.params.subscribe(val=>{
      this.postService.countViews(val['id'])

      this.postService.loadOnePost(val['id']).subscribe(post=>{
        //console.log(post)
        this.postData=post;
        this.loadSimiralPost(this.postData.category.categoryId)
      })
    })
  }
  loadSimiralPost(catId){
    this.postService.loadSimilar(catId).subscribe(val=>{
      this.similarPostArray=val
     //console.log(this.similarPostArray)
    })
  }


}
