import { Component, HostBinding, Input } from '@angular/core';
import { OsobyRepoService } from '../osoby-repo.service';
import { Osoba } from './Models/osoba';
import { Wzrost } from './Models/wzrost';

@Component({
  selector: '[app-osoba]',
  templateUrl: './osoba.component.html',
  styleUrls: ['./osoba.component.css']
})
export class OsobaComponent {
@Input('app-osoba') osoba? : Osoba;
//
private _lp : number = 0;
//setter
@Input() set lp (val : number){
  this._lp = val;
  this.bgColor = val % 2 == 0 ? 'red' : 'pink';
}
//getter
get lp() : number{
 return this._lp;
}

@HostBinding('style.background-color') bgColor = 'pink';
constructor(private serviceOsobaRepo : OsobyRepoService){}

get czyWybrana(): boolean {
  return this.osoba != null && this.osoba == this.serviceOsobaRepo.wybranaOsoba;
}
onWybrano(){
  this.serviceOsobaRepo.wybranaOsoba=this.osoba;
}
pobierzLp(): string{
  return `${this._lp}.`;
}
 wzrost = Wzrost;
}
