import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enviroment } from '../../../base/Enviroment';
import { Observable } from 'rxjs';
import { Categores } from '../../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _HttpClient:HttpClient) { }
  getCategory():Observable<Categores>
  {
    return this._HttpClient.get<Categores>(`${Enviroment.baseUrl}api/v1/categories`)
  }
}
