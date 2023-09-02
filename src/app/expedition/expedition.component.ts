import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../service/produit.service';
import { Router } from '@angular/router';
import { Expedition } from '../expedition';

@Component({
  selector: 'app-expedition',
  templateUrl: './expedition.component.html',
  styleUrls: ['./expedition.component.scss']
})
export class ExpeditionComponent implements OnInit {

  selectedProduitId: number = 0; // Initial value
  quantite: number = 0; // Initial value
  description: string = ''; // Initial value
  produits: any[] = []; // Initialize with your product data
  expeditions = [];

  constructor(private produitService: ProduitService, private redirection:Router) { }

 
  ngOnInit(): void {
    // Load products using produitService
    this.produits = this.produitService.getProduit();
  }

  expedierProduit() {
    const selectedProduit = this.produits.find(prod => prod.id === Number(this.selectedProduitId)); // Convert to number
  
    if (selectedProduit) {
      if (this.quantite <= selectedProduit.quantite) {
        selectedProduit.quantite -= this.quantite;
        this.produitService.modifierProduit(selectedProduit);
        this.selectedProduitId = 0;
        this.quantite = 0;
        this.description = '';
        alert('Produit expédié avec succès.');
       // Supposons que vous avez un type Produit, remplacez 'any' par le type correct si nécessaire
type Produit = any;

interface Expedition {
  produit: Produit;
  quantite: number;
  description: string; // Remplacez 'string' par le type correct si nécessaire
}

// Maintenant, utilisez cette interface pour annoter 'expedition'
const expedition: Expedition = {
  produit: selectedProduit,
  quantite: this.quantite,
  description: this.description,
};

        this.expeditions.push(expedition) ;
      } else {
        alert('La quantité demandée dépasse la quantité disponible.');
      }
    } else {
      alert('Le produit n\'existe pas.'); // Corrected error message
    }
    this.redirection.navigateByUrl('expedies');
  }
  
}

