import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import  { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  private requete: string;
  private API_KEY : string=environment.GOOGLE_API_KEY;
  private API_URL : string=environment.GOOGLE_API_URL;
  private perPage: string = "&per_page=10";

  constructor(private _http: HttpClient) { }

  getLivre(requete: string){
    return this._http.get(this.API_URL + requete +'&key=' + this.API_KEY ).pipe(
      map(res => res)
    );
  }
}
