import { HomesliderComponent } from './../../additions/homeslider/homeslider.component';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../shared/services/products/products.service';
import { product } from '../../../shared/interfaces/product';
import { CategorySliderComponent } from "../../additions/category-slider/category-slider.component";
import { RouterLink } from '@angular/router';
import { SearchPipe } from "../../../shared/pipes/search.pipe";
import { FormsModule } from '@angular/forms';
import { CartService } from '../../../shared/services/cart/cart.service';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { WhislistService } from '../../../shared/services/whislist/whislist.service';
import { AuthService } from '../../../shared/services/auth/auth.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategorySliderComponent,FormsModule, CategorySliderComponent, HomesliderComponent, RouterLink, SearchPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

userWord:string= ''
isLoading:boolean=false
product: any;
  constructor(private _ProductsService:ProductsService,private _CartService:CartService,private toastr: ToastrService,private _WhislistService:WhislistService , private _AuthService:AuthService){}
  whislist: string[] = []
  productList!:product[]
  ngOnInit(): void {
    if(typeof localStorage !="undefined"){
      localStorage.setItem('current page' ,'/Home')

    }
    this.getAllProducts()
    this._WhislistService.getLogedUser().subscribe({
      next: (res) => {
        console.log(res.data,'whish list');
        const newData=res.data.map((item:any)=>item._id)
        console.log(newData,'newdata');
        this.whislist=newData
        },

    })
  }
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
        this._AuthService.countcart.next(res.numOfCartItems)
        localStorage.setItem('cartcount',this._AuthService.countcart.getValue().toString())
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
  
  addProductToWhoslist(id:string):void{
    this._WhislistService.addToWhislist(id).subscribe({
      next: (res) => {

        console.log(res)
        this.whislist=res.data
        this.toastr.success(res.message,'',{
          progressBar: true,
          positionClass: 'toast-bottom-right',
        });
      }


    })
  }
  removeItem(id:string):void{
    this._WhislistService.removeItem(id).subscribe({
      next: (res) => {
        this.whislist=res.data
        console.log(res)
        this.toastr.success(res.message,'',{
          progressBar: true,
          positionClass: 'toast-bottom-right',
        });
      }


    })
  }



}
