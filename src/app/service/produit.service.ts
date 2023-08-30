import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Produit } from '../produit';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
 
  private produit: any[] = [
   
  ];
  

  getProduit(){
    return this.produit;
  }

  addProduit(prod : any){
    this.produit.push(prod);
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
  
  
//  modifierProduit(produit:any): void{
//    const index = this.produit.findIndex(p => p.id === produit.id);

//   // Si l'indice est trouvé, mettez à jour le produit
//   if (index !== -1) {
//     this.produit[index] = produit;
// }
// }
 
}
