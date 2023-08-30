import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits: any[] = []; // Tableau de produits

  constructor() { }

  // Récupérer la liste des produits
  getProduits(): any[] {
    return this.produits;
  }

  // Ajouter un produit à la liste
  addProduit(prod: any) {
    this.produits.push(prod);
  }

  // Mettre à jour un produit dans la liste
  updateProduit(selectedProduit: any) {
    const index = this.produits.findIndex(prod => prod.id === selectedProduit.id);
    if (index !== -1) {
      this.produits[index] = selectedProduit;
    }
  }
}