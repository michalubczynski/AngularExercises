import { Component,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-koszyk',
  templateUrl: './koszyk.component.html',
  styleUrls: ['./koszyk.component.css']
})
export class KoszykComponent {
@Input() dodanawartosc? : number;
@Input() czyZerowanie? : boolean;

}
