import { Component } from '@angular/core';
import { Osoba } from './osoba/osoba';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'angularLaboratory';
  version : number = 1;
  osoba1 = new Osoba("Piotr","Piotrowski",new Date(2000,12,20),"Piotrowice")
  osoba2 = new Osoba("Maciej","Maciejski",new Date(2000,12,20),"Maciejowice")
  wybranaOsoba? : Osoba;
onNewVersion() : void {
  this.version =  Math.floor(this.version) + 1;
}
onNewPatch() : void{
  this.version += 0.1;
}
onWybierz(osoba: Osoba) : void {
  this.wybranaOsoba = osoba;
}
}
