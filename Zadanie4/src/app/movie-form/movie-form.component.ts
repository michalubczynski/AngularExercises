import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { MovieResponse } from 'src/models/movie-response';
import { MovieRequest } from 'src/models/movie-request';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent {
  form!: FormGroup;
  movie?: MovieResponse = undefined;

  constructor(private formBuilder: FormBuilder, activatedRoute: ActivatedRoute, private moviesService: MoviesService, private router: Router) {
    activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id >= 0) {
        this.moviesService.getOne(id).subscribe({
          next:
            (res) => {
              this.movie = res;
              this.createForm();
            }
        })
      }
      else {
        this.createForm();
      }
    });
  }

  private createForm() {
    this.form = this.formBuilder.group({
      title: this.formBuilder.control(this.movie?.title, [Validators.required, Validators.maxLength(100)]),
      year: this.formBuilder.control(this.movie?.year, [Validators.required, Validators.min(1800), Validators.max(2030)]),
      category: this.formBuilder.control(this.movie?.category, [Validators.required, Validators.maxLength(20)]),
    });
  }

  showError(name: string): boolean {
    const control = this.form.controls[name];
    return control.invalid && control.dirty;
  }

  onSubmit(): void {
    const val:MovieRequest = this.form.value;

    console.log(val);

    if(this.movie == null){
      
      this.moviesService.Post(val).subscribe(res => {
        console.log(res);
      })
    }
    else{
      this.moviesService?.Put(this.movie.id,val).subscribe(res => {
        console.log(res);
      })
    }


    this.onCancelClick();
  }

  onCancelClick(): void {
    this.router.navigateByUrl('');
  }
}
