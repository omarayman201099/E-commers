
export interface  email {
  email:string
}
export interface  code {
  verfay:string
}
export interface  restNewPassword extends email {
  newPassword:string
}
  export interface address{
    details:string
    phone:string
    city:string
  }

export interface Data extends loginData,email {
  name:string;
  rePassword:string;
  phone:string;
}

export interface loginData extends email{

  password:string;
}


