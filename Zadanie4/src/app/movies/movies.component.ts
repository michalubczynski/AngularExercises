import { Component } from '@angular/core';
import { MovieResponse } from 'src/models/movie-response';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  movies: MovieResponse[] = [];
  _title: string="";
  constructor(private moviesService: MoviesService) {
    moviesService.get().subscribe({
      next: (res) => {
        this.movies = res;
      }
    });
  }

  onDeleteClick(movie: MovieResponse): void {
    this.moviesService.delete(movie.id).subscribe({
      next: (res) => {
        this.moviesService.get().subscribe({
          next: (res2) => {
            this.movies = res2;
          }
        })
      }
    })
  }
  onSzukaj(): void{
    console.log(this._title);
    if(this._title == ''){
      this.moviesService.get().subscribe({
        next: (res2) => {
          this.movies = res2;
        }
      })
    }
    else{
    this.moviesService.getByTitle(this._title).subscribe(res => {
      this.movies = res;
      console.log(res);
    });
  }
  }
}
