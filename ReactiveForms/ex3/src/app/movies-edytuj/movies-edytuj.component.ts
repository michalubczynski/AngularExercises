import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryEnum } from '../Models/categoryEnum';
import { Movie } from '../Models/movie';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-movies-edytuj',
  templateUrl: './movies-edytuj.component.html',
  styleUrls: ['./movies-edytuj.component.css']
})
export class MoviesEdytujComponent implements OnInit {
  categoryEnum = CategoryEnum;

  movie?: Movie;
  
  constructor(private route: ActivatedRoute, private movieService: MovieServiceService , private router : Router) { }
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.movie = this.movieService.getMovieById(id);
  }
  onSubmit() {
    this.movieService.updateMovie(this.movie);
    this.router.navigateByUrl('/movies');
  }
  
  onCancel() {
    this.router.navigate(['/movies']);
  }
}

