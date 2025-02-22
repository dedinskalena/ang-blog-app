import { Component, Input, OnInit } from '@angular/core';
import { Post, PostValue } from 'src/app/models/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit{
@Input() postData:PostValue

ngOnInit(): void {
  //console.log(this.postData)
}

}
