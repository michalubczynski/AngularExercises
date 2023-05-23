import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieFormComponent } from './movie-form/movie-form.component';

const routes: Routes = [
    {
        path: 'movies', children: [
            { path: '', component: MoviesComponent },
            { path: 'add', component: MovieFormComponent },
            { path: ':id/edit', component: MovieFormComponent }
        ]
    },
    { path: '', redirectTo: 'movies', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }