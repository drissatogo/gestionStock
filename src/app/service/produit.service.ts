import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Produit } from '../produit';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {

 
  private produit: any[] = [ ];
  private lastProduitId: number = 0;
  private saveProduitToLocal() {
    localStorage.setItem('produit', JSON.stringify(this.produit));
  }

  private loadProduitFromLocal() {
    const storedProduit = localStorage.getItem('produit');
    if (storedProduit) {
      this.produit = JSON.parse(storedProduit);
    }
  }
  

  getProduit(){
    return this.produit;
    this.loadProduitFromLocal();
  }
 

  addProduit(produit : any){
    this.lastProduitId = Number(this.lastProduitId) + 1;
    produit.id = this.lastProduitId;
    this.produit.push(produit);
    this.saveProduitToLocal();
  }
 
  

  supprimerProduit(produit: any): void {
    const confirmation = window.confirm("Êtes-vous sûr de vouloir supprimer ce produit ?");

  if (confirmation) {
    const index = this.produit.indexOf(produit);
    if (index !== -1) {
      this.produit.splice(index, 1);
      // Vous pouvez également afficher un message ou effectuer d'autres actions après la suppression.
    }
  } else {
    // L'utilisateur a annulé la suppression, vous pouvez effectuer des actions appropriées ici.
  }
  }
  getProduitById(ProduitId: number): Produit {
    return this.produit.find(produit => produit.id == ProduitId);
  }
  modifierProduit(nouveauProduit: any) {
    const index = this.produit.findIndex(ancienProduit => ancienProduit.id === nouveauProduit.id);
    if (index !== -1) {
      this.produit[index] = nouveauProduit;
    }
  }
  
 
}
