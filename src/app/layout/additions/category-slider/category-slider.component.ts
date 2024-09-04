import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/services/category/category.service';
import { Categores, Category } from '../../../shared/interfaces/category';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-category-slider',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './category-slider.component.html',
  styleUrl: './category-slider.component.scss'
})
export class CategorySliderComponent implements OnInit {

  isLoading:boolean=false
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 7
      }
    },
    nav: true

  }

  constructor (private _CategoryService:CategoryService){}
  categoryList!:Category []
  ngOnInit(): void {
this.getAllCategores()
  }

  getAllCategores(){
    this.isLoading=true
    this._CategoryService.getCategory().subscribe({
      next: (res) => {
        this.categoryList= res.data
        console.log(this.categoryList)
        this.isLoading=false
        },
        error: (err) => {
          console.log(err)
          this.isLoading=false
          }
    })
  }
}
