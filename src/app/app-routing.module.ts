import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListeLivresComponent} from './liste-livres/liste-livres.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'livres', component: ListeLivresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
