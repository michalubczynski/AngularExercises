import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Osoba } from './osoba/Models/osoba';
import { OsobyRepoService } from './osoby-repo.service';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
