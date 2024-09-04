import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enviroment } from '../../../base/Enviroment';
import { Observable } from 'rxjs';
import { Brands, DataBarand } from '../../../shred/interfaces/brands';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {


  constructor(private _HttpClient:HttpClient) { }

  getAllbrands():Observable<Brands>
  {
   return this._HttpClient.get<Brands>(`${Enviroment.baseUrl}api/v1/brands`)
  }




}
