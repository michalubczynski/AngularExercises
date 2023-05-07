import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { MoviesEdytujComponent } from './movies-edytuj/movies-edytuj.component';
import { MoviesFormularzComponent } from './movies-formularz/movies-formularz.component';
import { MoviesComponent } from './movies/movies.component';
import { SerialsComponent } from './serials/serials.component';

const routes: Routes = [
  {
    path: 'movies', children: 
    [
      {path: '', component: MoviesComponent},
      {path: 'new', component:MoviesFormularzComponent},
      {path: ':id', component: MoviesEdytujComponent}
    ]
  },
  {
    path: 'serials', children: 
    [
      {path: '', component: SerialsComponent}
    ]
  },
  {
    path: 'games', children: 
    [
      {path: '', component: GamesComponent}
    ]
  },
  {
    path: '', redirectTo: 'movies', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
