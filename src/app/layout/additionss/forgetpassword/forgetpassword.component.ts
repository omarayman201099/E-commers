import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss'
})
export class ForgetpasswordComponent {
  err!: string
  emailFormFlag: boolean = true
  emailCodeFlag: boolean = false
  newPasswordFlag: boolean = false

  constructor(private _AuthService: AuthService, private _Router:Router) { }
  emailForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email])
  })
  codeForm: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{4,}$/)])
  })

  newPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{8,}$/)])
  })





  submitEmailForms() {
    if (this.emailForm.valid) {

    }

    if (this.emailForm.valid) {
      this._AuthService.Forgetpassword(this.emailForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.emailFormFlag = false
          this.emailCodeFlag = true
        },
        error: (err) => {
          console.log(err);

          this.err = err.error.message;

        }
      })
    }

  }
  submitCodeForms() {
    if (this.codeForm.valid) {
    }

    if (this.codeForm.valid) {
      this._AuthService.verfaiyCode(this.codeForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.emailCodeFlag=false
          this.newPasswordFlag = true

        },
        error: (err) => {
          console.log(err);
          this.err = err.error.message;

        }
      })
    }

  }
  newPasswordForms() {
    if (this.newPasswordForm.valid) {

    }
    if (this.newPasswordForm.valid) {
      this._AuthService.restNewPassword(this.newPasswordForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.emailCodeFlag=false
          this.newPasswordFlag = true
          localStorage.setItem('userToken',res.token)
          this._AuthService.decodeUserData()
          this._Router.navigate(['/Home'])

        },
        error: (err) => {
          console.log(err);

          this.err = err.error.message;

        }
      })
    }

  }

}
