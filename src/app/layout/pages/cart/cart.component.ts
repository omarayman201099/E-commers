import {  Data } from './../../../shared/interfaces/cart';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../shared/services/cart/cart.service';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../shared/services/auth/auth.service';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements  OnInit {
numOfCartItems: any;
mydata:any
  constructor(private _CartService:CartService, private _AuthService:AuthService){}
data!: Data

  ngOnInit(): void {
    if(typeof localStorage !="undefined"){
      localStorage.setItem('current page' ,'/Cart')
    }
    this.getAllCart()
  }


  getAllCart(){
this._CartService.logedCart().subscribe({
  next : res =>{
    console.log(res)
    this.data = res.data
    this.mydata=res.numOfCartItems
  }
})
  }
  updateProductCount(productId:string , count:number){
    console.log(count);

    if(count <=0){
      this.delete(productId)
    }
    else{
      this._CartService.updateCart(productId , count.toString()).subscribe({
        next : res =>{
          console.log(res)
          this.data = res.data
        }
      })
    }

  }
  delete(productId:string){
    this._CartService.removeProductFromCart(productId).subscribe({

      next : res =>{
        this._AuthService.countcart.next(res.numOfCartItems)
        localStorage.setItem('cartcount',this._AuthService.countcart.getValue().toString())
        console.log(res)
        this.data = res.data
      }
    })
  }

}
