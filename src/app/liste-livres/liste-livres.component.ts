import { Component, OnInit } from '@angular/core';
import { LivreService } from '../livre.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-liste-livres',
  templateUrl: './liste-livres.component.html',
  styleUrls: ['./liste-livres.component.css']
})
export class ListeLivresComponent implements OnInit {
  livres: any[];
  livreTrouve: boolean= false;

  handleSucess(data){
    this.livreTrouve= true;
    this.livres=data.items;
    console.log(data.items);
  }

  handleError(error){
    console.log(error);
  }

  constructor(private _livresService: LivreService,
  private route: ActivatedRoute,
  private location: Location){ }

  searchLivre(requete: string){
    return this._livresService.getLivre(requete).subscribe(
      data => this.handleSucess(data),
      error => this.handleError(error),
      () => console.log("Requete completée !!")

    )
  }

  ngOnInit() {

  }

  goBack(): void {
    this.location.back();
  }
}
