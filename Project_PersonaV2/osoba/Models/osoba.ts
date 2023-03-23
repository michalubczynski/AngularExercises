import { Wzrost } from "./wzrost";

export class Osoba{
    constructor(public imie : string,public nazwisko : string, public dataUrodzenia : Date, public wzrost? : Wzrost ){}
}