import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produit: any[] = [];
  

  getProduit(){
    return this.produit;
  }

  addProduit(prod : any){
    this.produit.push(prod);
  }
  

  supprimerProduit(produit: any): void {
    const index = this.produit.indexOf(produit);
    if (index !== -1) {
      this.produit.splice(index, 1);
    }
  }
 
 modifierProduit(produit:any): void{
   const index = this.produit.findIndex(p => p.id === produit.id);

  // Si l'indice est trouvé, mettez à jour le produit
  if (index !== -1) {
    this.produit[index] = produit;
}
}
 
}
