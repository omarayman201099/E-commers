import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {
  err!:string
  register:FormGroup= new FormGroup({
    name: new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{4,}$/)]),
    rePassword: new FormControl(null, Validators.required),
    phone: new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),

  },this.checkFormMutch
)
constructor(private _AuthService:AuthService, private _Router:Router){}


  checkFormMutch(g:AbstractControl){
    if(g.get('password')?.value === g.get("rePassword")?.value){
      return null;

    } else{
      g.get('rePassword')?.setErrors({mismatch:true})
      return {resmutch:true}

    }

  }




  submitRegester(){
    if (this.register.valid){
      this._AuthService.signUp(this.register.value).subscribe({
        next: (res) => {
          console.log(res);
          this._Router.navigate(['/Log in']);

        },
        error: (err) => {

          console.log(err);
          this.err = err.error.message;
        }
      })
    }

  }


}
