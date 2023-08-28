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

  constructor(private produitService : ProduitService, private gohome: Router) {}
  ngOnInit(): void {
    this.produits = this.produitService.getProduit();
  }

  vershome() {
    this.gohome.navigateByUrl('gohome');
  }

  // Cette méthode ajoute un produit à la liste des produits
  ajouterProduit(nom: string, categorie: string, quantite: number, prix: number, image: string) {
    const nouveauProduit = {
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
