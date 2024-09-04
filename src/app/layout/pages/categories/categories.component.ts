import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/services/category/category.service';
import {  Category } from '../../../shared/interfaces/category';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit{
  categoryList!: Category[]
  constructor(private _CategoryService:CategoryService,private toastr: ToastrService){}
  ngOnInit(): void {
    if(typeof localStorage !="undefined"){
      localStorage.setItem('current page' ,'/Categories')
    }
   this.getAllCategory()


  }
  getAllCategory(){
    this._CategoryService.getCategory().subscribe({
      next : res =>{
        this.categoryList=res.data
        console.log(this.categoryList);

      }
    })
  }
  showSuccess() {
    this.toastr.success(`${this.name } is open `,`Look at the section below `);
  }

  name:string=''
  sulg:string=''
}


