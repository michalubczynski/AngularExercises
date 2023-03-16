export class Product{
    nazwa : string;
    cena : number;
    dataUtworzenia : Date;
    czyPromocja : boolean;
    constructor(nazwa : string, cena : number, dataUtworzenia : Date, czyPromocja : boolean){
        this.nazwa = nazwa;
        this.cena = cena;
        this.dataUtworzenia = dataUtworzenia;
        this.czyPromocja = czyPromocja;
    }
}