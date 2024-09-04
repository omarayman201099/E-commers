import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enviroment } from '../../../base/Enviroment';
import { Observable } from 'rxjs';
import { Allorders } from '../../interfaces/allorders/allorders';

@Injectable({
  providedIn: 'root'
})
export class AllordersService {

  constructor(private _HttpClient:HttpClient) { }
  
  grtAllOrders():Observable<Allorders>
  {
    return this._HttpClient.get<Allorders>(`${Enviroment.baseUrl}api/v1/orders/`)
  }
}
