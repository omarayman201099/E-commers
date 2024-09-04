import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  err!:string
  logIn:FormGroup= new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{4,}$/)]),

  }
)
constructor(private _AuthService:AuthService, private _Router:Router){}





  submitLogin(){
    if (this.logIn.valid){
      this._AuthService.signin(this.logIn.value).subscribe({
        next: (res) => {
    
          console.log(res);
          localStorage.setItem("userToken",res.token)
          this. _AuthService.decodeUserData()
          this._Router.navigate(['/Home']);
        },
        error: (err) => {
    
          console.log(err);
          this.err = err.error.message;
        }
      })
    }

  }


}


