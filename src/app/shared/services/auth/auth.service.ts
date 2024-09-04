
import {  code, Data, email, loginData, restNewPassword,  } from './../../interfaces/data';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Enviroment } from '../../../base/Enviroment';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";
import {  Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  countcart!:BehaviorSubject<number>;

  userData:BehaviorSubject<any> = new BehaviorSubject(null)
  constructor(private _HttpClient:HttpClient , private _Router:Router,@Inject(PLATFORM_ID)id:object) {
    if(isPlatformBrowser(id)){
      if(localStorage.getItem('userToken')){
        this.decodeUserData()

      }
    }

    if (typeof localStorage != 'undefined') {
      this.countcart=new BehaviorSubject(Number(localStorage.getItem('cartcount')));}
  }

  signUp(forms:Data):Observable<any>
  {
    return this._HttpClient.post(`${Enviroment.baseUrl}api/v1/auth/signup`,forms)

  }
  signin(forms:loginData):Observable<any>
  {
    return this._HttpClient.post(`${Enviroment.baseUrl}api/v1/auth/signin`,forms)

  }
  decodeUserData(){
    const token = JSON.stringify(localStorage.getItem("userToken"));
    const decoded = jwtDecode(token);
    this.userData.next(decoded)
    console.log(this.userData.getValue().ida);

  }

  logOut(){
    localStorage.removeItem("userToken");
    this.userData.next(null)
    this._Router.navigate(['/Log in'])
  }

  Forgetpassword(data:email):Observable<any>
  {
    return this._HttpClient.post(`${Enviroment.baseUrl}api/v1/auth/forgotPasswords`, data);
  }
  verfaiyCode(data:code):Observable<any>
  {
    return this._HttpClient.post(`${Enviroment.baseUrl}api/v1/auth/verifyResetCode`, data);
  }
  restNewPassword(data:restNewPassword):Observable<any>
  {
    return this._HttpClient.put(`${Enviroment.baseUrl}api/v1/auth/resetPassword`, data);
  }






}
