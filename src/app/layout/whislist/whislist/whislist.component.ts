import { Whislist } from './../../../shared/interfaces/whislist/whislist';
import { Component, OnInit } from '@angular/core';
import { WhislistService } from '../../../shared/services/whislist/whislist.service';
import { data } from '../../../shared/interfaces/whislist/whislist';
import { product } from '../../../shared/interfaces/product';
import { CartService } from '../../../shared/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-whislist',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './whislist.component.html',
  styleUrl: './whislist.component.scss'
})
export class WhislistComponent implements OnInit {
  constructor(private _WhislistService: WhislistService, private _CartService: CartService, private toastr: ToastrService) { }

  ngOnInit(): void {
    if(typeof localStorage !="undefined"){
      localStorage.setItem('current page' ,'/whishlist')

    }
    this.getLogedUser()
    this._WhislistService.getLogedUser().subscribe({
      next: (res) => {
        console.log(res.data,'whish list');
        const newData=res.data.map((item:any)=>item._id)
        console.log(newData,'newdata');
        this.whislist=newData
        },

    })
  }
  whislist:string[]=[]
  data!: data[]
  userWord: string = ''


  addProductToCart(productId: string) {
    this._CartService.addToCart(productId).subscribe({
      next: (res) => {
        console.log(res)
        this.toastr.success(res.message, '', {
          progressBar: true,
          positionClass: 'toast-bottom-right',

        });
      },
      error: (err) => {
        console.log(err)
      }

    })
  }
  productList!: product[]

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


  getLogedUser(){
    this._WhislistService.getLogedUser().subscribe({
      next: (res) => {
        console.log(res)
        this.productList=res.data
      },
    })
  }
  removeItem(id:string){
    this._WhislistService.removeItem(id).subscribe({
      next: (res) => {
        console.log(res)
        this.whislist=res.data

          const newProducts= this.productList.filter((item:any)=>this.whislist.includes(item._id))
          this.productList=newProducts
        },
    })
  }




}
