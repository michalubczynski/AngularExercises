import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OsobaComponent } from './osoba/osoba.component';
import { WytluszczenieDirective } from './wytluszczenie.directive';

@NgModule({
  declarations: [
    AppComponent,
    OsobaComponent,
    WytluszczenieDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
