import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from './product/product';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  title = 'projectShopping';
  product1 = new Product("Chleb", 2, new Date(2024,0,0),false);
  product2 = new Product("Chleb2", 2, new Date(2024,0,0),true);
  product3 = new Product("Chle3", 2, new Date(2024,0,0),false);
  product4 = new Product("Ch4eb", 2, new Date(2024,0,0),true);
  product5 = new Product("5hleb", 2, new Date(2024,0,0),false);
  stanKoszyka : number = 0;
  czyZerowac : boolean = false;
  przyciskKomunikat :string = "Ukryj produkty";
  ukryte : boolean = false;
  PrzeslijCeneDoKosza(number: number) {
    this.stanKoszyka += number;
   }
   ukryjPokaz(){
    if(this.ukryte == false){
      this.ukryte = true;
      this.przyciskKomunikat = "Pokaz produkty";
    }
    else {
      this.ukryte = false;
      this.przyciskKomunikat = "Ukryj produkty";
    }
   }
}
