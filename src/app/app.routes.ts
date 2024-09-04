import { Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
import { CartComponent } from './layout/pages/cart/cart.component';
import { PeoductsComponent } from './layout/pages/peoducts/peoducts.component';
import { BrandsComponent } from './layout/pages/brands/brands.component';
import { CategoriesComponent } from './layout/pages/categories/categories.component';
import { LoginComponent } from './layout/pages/login/login.component';
import { RegisterComponent } from './layout/pages/register/register.component';
import { NotfoundComponent } from './layout/additionss/notfound/notfound.component';
import { authGuard } from './shared/guards/auth.guard';
import { ForgetpasswordComponent } from './layout/additionss/forgetpassword/forgetpassword.component';
import { ProductDetailsComponent } from './layout/additionss/product-details/product-details.component';
import { ShippingAddressComponent } from './layout/additions/shipping-address/shipping-address.component';
import { WhislistComponent } from './layout/whislist/whislist/whislist.component';
import { AllOrdersComponent } from './layout/additions/all-orders/all-orders.component';

export const routes: Routes = [
  { path: '', redirectTo:"Home", pathMatch:"full" },
  {path:"Home",component:HomeComponent,canActivate:[authGuard]},
  {path:"Cart",component:CartComponent ,canActivate:[authGuard]},
  {path:"Product",component:PeoductsComponent ,canActivate:[authGuard]},
  {path:"Brands",component:BrandsComponent ,canActivate:[authGuard]},
  {path:"Categories",component:CategoriesComponent ,canActivate:[authGuard]},
  {path:"shhippaingAddress/:cartId",component:ShippingAddressComponent ,canActivate:[authGuard]},
  {path:"whishlist",component:WhislistComponent ,canActivate:[authGuard]},
  {path:"allorders",component:AllOrdersComponent ,canActivate:[authGuard]},
  {path:"Log in",component:LoginComponent},
  {path:"Register",component:RegisterComponent},
  {path:"forgetpassword",component:ForgetpasswordComponent},
  {path:"productdetails/:id",component:ProductDetailsComponent,canActivate:[authGuard]},
  {path:"**",component:NotfoundComponent},
];
