import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Osoba } from './osoba';
@Component({
  selector: 'app-osoba',
  templateUrl: './osoba.component.html',
  styleUrls: ['./osoba.component.css']
})
export class OsobaComponent {
  @Input('osobaComponentPobierz') osoba? : Osoba;
  @Output() emiterOsob : EventEmitter<Osoba> = new EventEmitter<Osoba>();
  @Input() czyWybrana : boolean = false;
  onWybierz() : void {
    this.emiterOsob.emit(this.osoba);
  }
}
