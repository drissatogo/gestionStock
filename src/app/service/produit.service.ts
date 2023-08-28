import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produit: any[] = [];
  constructor() { }

  getProduit(){
    return this.produit;
  }

  addProduit(prod : any){
    this.produit.push(prod);
  }
}
