import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
 @Input() product? : Product;
 @Input() czyZerowanie? : boolean;

 zwinRozwinButton : string = "zwin";
 ukryte : boolean = true;
 liczbaSztukWKoszyku : number = 0;

 @Output() wyslijDoKosza : EventEmitter<number> = new EventEmitter<number>();

 onDodajDoKosza()  {
  this.liczbaSztukWKoszyku +=1;
  this.wyslijDoKosza.emit(this.product?.cena);
 }

 onZeruj(){
  this.liczbaSztukWKoszyku=0;
 }

 ukryjPokaz(){
  if(this.ukryte == false){
    this.ukryte = true;
    this.zwinRozwinButton = "zwin";
  }
  else {
    this.ukryte = false;
    this.zwinRozwinButton = "rozwin";
  }
 }

}
