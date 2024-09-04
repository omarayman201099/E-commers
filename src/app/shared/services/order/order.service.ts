import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enviroment } from '../../../base/Enviroment';
import { address } from '../../interfaces/data';
import { Observable } from 'rxjs';
import { Allorders } from '../../interfaces/allorders/allorders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _HttpClient:HttpClient) { }
  userTokenHeader ={
    token:localStorage.getItem('userToken')||''
  }

  getOrder(cartId:string,data:address):Observable<any>
  {
  return  this._HttpClient.post(`${Enviroment.baseUrl}api/v1/orders/checkout-session/${cartId}?url=${Enviroment.baseUrlWebsite}`,{
      shippingAddress:data
    },{
      headers: this.userTokenHeader
    })
  }
  getOrderId(id:string):Observable<any>
  {
  return  this._HttpClient.get<any>(`${Enviroment.baseUrl}api/v1/orders/user/${id}`)
  }
}
