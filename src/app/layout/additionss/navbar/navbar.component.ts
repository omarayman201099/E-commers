import { NavbarService } from './../../../shared/services/navbar/navbar.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { FlowbiteService } from '../../../shared/services/flowbite/flowbite.service';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent  implements OnInit {
 constructor(private flowbiteService: FlowbiteService,public _AuthService:AuthService, private _NavbarService:NavbarService) {

 }
 ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      console.log('Flowbite loaded', flowbite);
    });
    this._AuthService.userData.subscribe(()=>{
      if(this._AuthService.userData.getValue() !=null){
        this.isLog=true
       }else[
        this.isLog=false
       ]
    })

  }
  isLog:boolean=false;



}
