import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryEnum } from '../Models/categoryEnum';
import { Movie } from '../Models/movie';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-movies-formularz',
  templateUrl: './movies-formularz.component.html',
  styleUrls: ['./movies-formularz.component.css']
})
export class MoviesFormularzComponent {
  categoryEnum = CategoryEnum;

  form: FormGroup;
  @Input() movie?: Movie;

    constructor(formBuilder : FormBuilder, private moviesService : MovieServiceService, private router : Router){
      this.form = formBuilder.group(
        {
          name: formBuilder.control('name', [Validators.required, Validators.maxLength(100)]),
          releaseYear: formBuilder.control('releaseYear', [Validators.required, Validators.pattern(/^(19[0-9][0-9]|20[0-4][0-9]|2050)$/)]) ,
          category: formBuilder.control('category', [Validators.required , Validators.pattern(/^(0|1|2)$/)], )
        }
      );
    }
    onSubmit(){
      if(this.form.valid){
        const formVal : Movie = this.form.value;
        const cate : CategoryEnum = formVal.category;
        const movie : Movie = new Movie(formVal.name, formVal.releaseYear, cate);
        console.log(movie.name);
        console.log(movie.releaseYear);
        console.log(movie.category);
        this.moviesService.movies.push(movie);
        this.router.navigateByUrl('');
      }
    }
    onCancel(){
      this.router.navigateByUrl('');
    }
}
