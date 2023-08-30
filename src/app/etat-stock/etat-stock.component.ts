import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-etat-stock',
  templateUrl: './etat-stock.component.html',
  styleUrls: ['./etat-stock.component.scss']
})
export class EtatStockComponent implements OnInit{
  produits: any[] = [];
  router: any;
  produit: any; 
  route:any;
  

  constructor(private produitService : ProduitService,
             private gohome: Router,
             private versmodifier:Router) {}
  ngOnInit(): void {
    this.produits = this.produitService.getProduit();
    const id = this.route.snapshot.paramMap.get('id');
    
  }
 

  vershome() {
    this.gohome.navigateByUrl('gohome');
  }
  modifier(id : number): void{
    this.versmodifier.navigateByUrl('versmodifier/'+id);
  }

  supprimerProduit(produit:any): void{
    this.produitService.supprimerProduit(produit);
    this.produits = this.produitService.getProduit();
  }

  modifierProduit(produit:any): void{
    this.versmodifier.navigateByUrl('versmodifier/', produit);
    this.produitService.modifierProduit(this.produit);
    
  }

  // Cette méthode ajoute un produit à la liste des produits
  ajouterProduit(id:number,fournisseur:string,entrepot:string,date_de_reception:Date,nom: string, categorie: string, quantite: number, prix: number, image: string) {
    const nouveauProduit = {
      id,
      fournisseur,
      entrepot,
      date_de_reception,
      nom,
      categorie,
      quantite,
      prix,
      image
    };

    this.produits.push(nouveauProduit);
  }

  selectedImage: any;

  handleFileInput(event: any): void {
    // Logique pour gérer la sélection d'image
  }
}
