import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../service/produit.service';
import { Router } from '@angular/router';

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

  constructor(private produitService: ProduitService, private redirection:Router) { }

  onExpedition(){
    this.redirection.navigateByUrl('expedition')
  }
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
      } else {
        alert('La quantité demandée dépasse la quantité disponible.');
      }
    } else {
      alert('Le produit n\'existe pas.'); // Corrected error message
    }
  }
}

