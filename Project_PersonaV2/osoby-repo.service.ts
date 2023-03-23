import { Injectable } from '@angular/core';
import { Osoba } from './osoba/Models/osoba';

@Injectable({
  providedIn: 'root'
})
export class OsobyRepoService {
wybranaOsoba? : Osoba;
}
