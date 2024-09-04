import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enviroment } from '../../../base/Enviroment';
import { Observable } from 'rxjs';
import { Whislist } from '../../interfaces/whislist/whislist';

@Injectable({
  providedIn: 'root'
})
export class WhislistService {
  userTokenHeader={
    headers: {
      token:localStorage.getItem('userToken')||''
  }
  }
  constructor(private _HttpClient:HttpClient) { }


  addToWhislist(productId:string):Observable<any>
  {
    return this._HttpClient.post(`${Enviroment.baseUrl}api/v1/wishlist`,{productId:productId},{
      headers:this.userTokenHeader.headers
    }
 )
  }

  getLogedUser():Observable<Whislist>
  {
    return this._HttpClient.get<Whislist>(`${Enviroment.baseUrl}api/v1/wishlist`,{
      headers:this.userTokenHeader.headers
    }
 )
  }
  removeItem(id:string):Observable<any>
  {
    return this._HttpClient.delete(`${Enviroment.baseUrl}api/v1/wishlist/${id}`,{
      headers:this.userTokenHeader.headers
    }
 )
  }


}







