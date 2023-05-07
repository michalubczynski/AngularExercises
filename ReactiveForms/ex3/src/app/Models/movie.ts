import { CategoryEnum } from "./categoryEnum";

export class Movie{
    public id : number;
    private _category : CategoryEnum
    public static licznik =0;

    constructor (public name : String, public releaseYear : Number, category : CategoryEnum ){
        this.id = Movie.licznik++;
        this._category = category;
    }
    public get category(): CategoryEnum {
        return this._category;
    }
    public get categoryAsString(): String {
        if(this._category == 2){
            return "Thriller";
        }
        else if(this._category == 1){
            return "Horror";
        }
        else if(this._category == 0){
            return "Fantasy";
        }
        else return "Error";
    }
    public set category(value: CategoryEnum) {
        this._category = value;
    }
}