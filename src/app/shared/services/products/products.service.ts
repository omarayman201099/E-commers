import { product, ProductsRes } from './../../interfaces/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enviroment } from '../../../base/Enviroment';
import { productsint } from '../../interfaces/dataInt';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }

  getAllproducts():Observable<ProductsRes>
  {
   return this._HttpClient.get<ProductsRes>(`${Enviroment.baseUrl}api/v1/products`)
  }
  getOnePr():Observable<ProductsRes>
  {
   return this._HttpClient.get<ProductsRes>(`${Enviroment.baseUrl}api/v1/products`)
  }

  getProductId(productId:string):Observable<productsint>
  {
   return this._HttpClient.get<productsint>(`${Enviroment.baseUrl}api/v1/products/${productId}`)
  }
}
