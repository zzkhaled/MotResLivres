import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeLivresComponent } from './liste-livres/liste-livres.component';
import { LivreService } from './livre.service'
import { HttpClientModule } from '@angular/common/http'; 
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListeLivresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LivreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
