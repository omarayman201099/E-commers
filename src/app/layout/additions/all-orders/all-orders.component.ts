
import { Allorders, CartItem } from './../../../shared/interfaces/allorders/allorders';
import { Router } from '@angular/router';
import { Component, OnInit, PLATFORM_ID } from '@angular/core';
import { AllordersService } from '../../../shared/services/allorders/allorders.service';
import { OrderService } from '../../../shared/services/order/order.service';
import { AuthService } from '../../../shared/services/auth/auth.service';


@Component({
  selector: 'app-all-orders',
  standalone: true,
  imports: [],
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.scss'
})
export class AllOrdersComponent implements OnInit {
  constructor(private router: Router,private _OrderService:OrderService,private _AuthService:AuthService) { }
  allOrders:Allorders[]=[]
  ngOnInit(): void {


    this._OrderService.getOrderId(this._AuthService.userData.getValue().id).subscribe({
      next: (res) => {
        console.log(res);
        this.allOrders=res
      }
    })
  }





}
