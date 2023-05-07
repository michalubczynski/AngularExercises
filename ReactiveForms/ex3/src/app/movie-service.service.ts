import { Injectable } from '@angular/core';
import { CategoryEnum } from './Models/categoryEnum';
import { Movie } from './Models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  updateMovie(movie: Movie | undefined) {
    if (movie) {
      const index = this.movies.findIndex(m => m.id === movie.id);
      if (index !== -1) {
        this.movies[index] = movie;
      }
    }
  }
  getMovieById(id: string | null): Movie | undefined {
    if (id) {
      return this.movies.find(movie => movie.id.toString() === id);
    }
    return undefined;
  }
  category = CategoryEnum;
  movies: Movie[] = [
    new Movie("Szkalna", 1999, this.category.Thriller),
    new Movie("Karotz", 2002, this.category.Thriller),
    new Movie("Popli", 2005, this.category.Thriller),
    new Movie("Luka", 2008, this.category.Horror),
    new Movie("Byto", 1999, this.category.Horror),
    new Movie("Tuwim", 1999, this.category.Fantasy)
  ]
  public updateMovieIds(){
    for (let i = 0; i < this.movies.length; i++) {
      this.movies[i].id = i;
    }
    Movie.licznik = this.movies.length;
  }
  constructor() { }
}
