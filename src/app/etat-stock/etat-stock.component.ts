import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-etat-stock',
  templateUrl: './etat-stock.component.html',
  styleUrls: ['./etat-stock.component.scss']
})
export class EtatStockComponent implements OnInit{
modifierProduit(_t41: any) {
throw new Error('Method not implemented.');
}
supprimerProduit(_t41: any) {
throw new Error('Method not implemented.');
}
  produits: any[] = [];

  constructor(private produitService : ProduitService, private gohome: Router) {}
  ngOnInit(): void {
    
    this.produits = this.produitService.getProduits();
  
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
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }
}


