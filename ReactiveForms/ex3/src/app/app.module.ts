import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { SerialsComponent } from './serials/serials.component';
import { GamesComponent } from './games/games.component';
import { MoviesFormularzComponent } from './movies-formularz/movies-formularz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesEdytujComponent } from './movies-edytuj/movies-edytuj.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    SerialsComponent,
    GamesComponent,
    MoviesFormularzComponent,
    MoviesEdytujComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
