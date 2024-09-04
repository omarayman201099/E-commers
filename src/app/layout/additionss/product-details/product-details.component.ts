import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../shared/services/products/products.service';
import { product } from '../../../shared/interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../shared/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
;
images: any;
constructor(private _ProductsService:ProductsService, private _ActivatedRoute:ActivatedRoute, private _CartService:CartService, private toastr:ToastrService,){}
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    }
  },
  nav: true
}

src!:product
product!:product

isLoading:boolean=false
ngOnInit(): void {
  this.getProductId()
}
getProductId(){
  let id:string=''
  this.isLoading=true
  this._ActivatedRoute.params.subscribe({

    next:p=>{
      id=p['id']
      console.log(['id']);
      this.isLoading=false
    }
  })
  this._ProductsService.getProductId(id).subscribe({

    next :res =>{
      this.product=res.data
      console.log(res.data)
      this.src=this.images


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
