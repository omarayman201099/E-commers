import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Enviroment } from '../../../base/Enviroment';
import { Observable } from 'rxjs';
import {  NavbarInter } from '../../interfaces/navbar/navbar';

@Injectable({
  providedIn: 'root'
})
export class NavbarService implements OnInit{

  constructor(private _HttpClient:HttpClient) { }
  ngOnInit(): void {
  }

}
