import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { TradeshowsComponent } from './tradeshows/tradeshows.component';
import { SellonpowerhubComponent } from './sellonpowerhub/sellonpowerhub.component';
import { HelpComponent } from './help/help.component';
import { ShiptoComponent } from './shipto/shipto.component';
import { SpareComponent } from './catagory/spare/spare.component';
import { ReadymadeComponent } from './catagory/readymade/readymade.component';
import { InsideindiaComponent } from './shipto/insideindia/insideindia.component';
import { OthercountriesComponent } from './shipto/othercountries/othercountries.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    OrdersComponent,
    CartComponent,
    CatagoryComponent,
    TradeshowsComponent,
    SellonpowerhubComponent,
    HelpComponent,
    ShiptoComponent,
    SpareComponent,
    ReadymadeComponent,
    InsideindiaComponent,
    OthercountriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
