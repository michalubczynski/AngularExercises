import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { KoszykComponent } from './koszyk/koszyk.component';
import { NaglowekComponent } from './naglowek/naglowek.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    KoszykComponent,
    NaglowekComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
