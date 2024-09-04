
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enviroment } from '../../../base/Enviroment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Cartres } from '../../interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }
  userTokenHeader ={
    token:localStorage.getItem('userToken')||''
  }
  addToCart(productId:string):Observable<any>
  {
   return this._HttpClient.post(`${Enviroment.baseUrl}api/v1/cart`,{productId:productId},{
      headers:this.userTokenHeader
    })
  }
  logedCart():Observable<Cartres>
  {
   return this._HttpClient.get<Cartres>(`${Enviroment.baseUrl}api/v1/cart`,{
      headers:this.userTokenHeader
    })
  }
  updateCart(productsId:string ,count:string):Observable<Cartres>
  {
   return this._HttpClient.put<Cartres>(`${Enviroment.baseUrl}api/v1/cart/${productsId}`,{count:count },{
      headers:this.userTokenHeader
    })
  }
  removeProductFromCart(productsId:string):Observable<Cartres>
  {
   return this._HttpClient.delete<Cartres>(`${Enviroment.baseUrl}api/v1/cart/${productsId}`,{
      headers:this.userTokenHeader
    })
  }



}
