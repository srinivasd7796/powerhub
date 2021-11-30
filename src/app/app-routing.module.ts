import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { ReadymadeComponent } from './catagory/readymade/readymade.component';
import { SpareComponent } from './catagory/spare/spare.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { SellonpowerhubComponent } from './sellonpowerhub/sellonpowerhub.component';
import { InsideindiaComponent } from './shipto/insideindia/insideindia.component';
import { OthercountriesComponent } from './shipto/othercountries/othercountries.component';
import { ShiptoComponent } from './shipto/shipto.component';
import { SignupComponent } from './signup/signup.component';
import { TradeshowsComponent } from './tradeshows/tradeshows.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'orders',component:OrdersComponent},
  {path:'cart',component:CartComponent},
  {path:'catagory',component:CatagoryComponent,children:[
    {path:'spare',component:SpareComponent},
    {path:'readymade',component:ReadymadeComponent}
  ]},
  {path:'tradeshows',component:TradeshowsComponent},
  {path:'sellonpowerhub',component:SellonpowerhubComponent},
  {path:'help',component:HelpComponent},
  {path:'shipto',component:ShiptoComponent,children:[
    {path:'insideindia',component:InsideindiaComponent},
    {path:'othercountries',component:OthercountriesComponent}
  ]},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
