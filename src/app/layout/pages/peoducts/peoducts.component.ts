import { HomesliderComponent } from './../../additions/homeslider/homeslider.component';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../shared/services/products/products.service';
import { product } from '../../../shared/interfaces/product';
import { CategorySliderComponent } from "../../additions/category-slider/category-slider.component";
import { RouterLink } from '@angular/router';
import { SearchPipe } from "../../../shared/pipes/search.pipe";
import { FormsModule } from '@angular/forms';
import { CartService } from '../../../shared/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-peoducts',
  standalone: true,
  imports: [CategorySliderComponent,FormsModule, CategorySliderComponent, HomesliderComponent, RouterLink, SearchPipe],
  templateUrl: './peoducts.component.html',
  styleUrl: './peoducts.component.scss'
})
export class PeoductsComponent implements OnInit {
  userWord:string= ''
  isLoading:boolean=false
  product: any;


  constructor( private _ProductsService:ProductsService,private _CartService:CartService,private toastr: ToastrService){}
  ngOnInit(): void {
    if(typeof localStorage !="undefined"){
      localStorage.setItem('current page' ,'/Product')
    }
    this.getAllProducts()
  }
  productList!:product[]

  getAllProducts(){
    this.isLoading=true
    this._ProductsService.getAllproducts().subscribe({
      next: (res) => {
        this.productList = res.data
        console.log(this.productList)
        this.isLoading=false
      },
        error: (err) => {
          console.log(err)
          this.isLoading=false
          }
    })
  }


  addProductToCart(productId:string){
    this._CartService.addToCart(productId).subscribe({
      next: (res) => {
        console.log(res)
        this.toastr.success(res.message,'',{
          progressBar: true,
          positionClass: 'toast-bottom-right',
        });
        },
        error: (err) => {
          console.log(err)
          }

    })
  }


}
