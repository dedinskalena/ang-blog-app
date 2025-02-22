import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryValue } from 'src/app/models/category';
import { Post, PostValue } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit{
postArray:Array<PostValue>
categoryObj:any

  constructor( private route:ActivatedRoute,private postService:PostsService){ }

  ngOnInit(): void {
    this.route.params.subscribe(val=>{
      //console.log(val)
      this.categoryObj=val
      this.postService.loadCategoryPosts(val['id']).subscribe(posts=>{
        this.postArray=posts
      })
    })
  }

}
