import { Component, inject } from '@angular/core';
import { Osoba } from './osoba/Models/osoba';
import { Wzrost } from './osoba/Models/wzrost';
import { OsobyRepoService } from './osoby-repo.service';

@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",
  styles: []
})
export class AppComponent {
  title = 'Lab2';
  osoby : Osoba[] = [
    new Osoba('Jan','Kowalski',new Date(2000,12,8),Wzrost.niski),
    new Osoba('Janek','Kowalski',new Date(2000,12,8),Wzrost.sredni),
    new Osoba('Janeczek','Kowalski',new Date(2000,12,8),Wzrost.wysoki),
    new Osoba('Jaś','Kowalski',new Date(2000,12,8))
  ];
  private osobyRepo = inject(OsobyRepoService);
  get wybranaOsoba() : Osoba | undefined{
    return this.osobyRepo.wybranaOsoba;
  }
  getWybranaOsoba(): string | undefined {
    return 'Wybrano:'+ this.wybranaOsoba?.imie;
  }
}
