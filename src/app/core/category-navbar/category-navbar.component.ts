import { Component, OnInit } from '@angular/core';
import { CategoryValue } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent implements OnInit{
  constructor(private categoryService:CategoriesService){}
  categoryArray:Array<CategoryValue>=[]
  ngOnInit(): void {
    this.categoryService.loadData().subscribe(val=>{
      this.categoryArray=val
    })
  }

}
