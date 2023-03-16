 export class Osoba {
    imie : string 
    nazwisko : string;
    dataUrodzenia : Date;
    miasto : string;
    constructor(imie: string, nazwisko : string, dataUrodzenia: Date, miasto : string){
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.dataUrodzenia = dataUrodzenia;
        this.miasto = miasto;
    }
}