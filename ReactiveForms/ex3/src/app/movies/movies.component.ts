import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../Models/movie';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  private moviesService : MovieServiceService = inject(MovieServiceService);
  get movies(): Movie[] {
    return this.moviesService.movies;
  }
  onUsun(id : number){
    if (id >= 0 && id < this.movies.length) {
      this.movies.splice(id,1);
      this.moviesService.updateMovieIds();
    }
  }
  onEdit(id : number) {
    this.router.navigateByUrl('movies/'+id);
  }
  constructor( private router : Router){}
}
