import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OrderService } from '../../../shared/services/order/order.service';

@Component({
  selector: 'app-shipping-address',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './shipping-address.component.html',
  styleUrl: './shipping-address.component.scss'
})
export class ShippingAddressComponent {
  shippingAddress:FormGroup = new FormGroup({
    details: new FormControl(null,Validators.required),
    phone: new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)] ),
    city: new FormControl(null,Validators.required),
  })

    constructor(private _OrderService:OrderService, private _ActivatedRoute:ActivatedRoute){}

  shippingAddressForm()
  {
    if (this.shippingAddress.valid){
      this._ActivatedRoute.paramMap.subscribe({
        next: p =>{


          this._OrderService.getOrder(p.get('cartId')!,this.shippingAddress.value).subscribe({
            next: (res) => {

              window.open(res.session.url,'_self')

            }
          })
        }
      })

    }
    console.log(this.shippingAddress.value);
  }
}
