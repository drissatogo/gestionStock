import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private apiUrl = 'http://localhost:4200/';
  produit: any[] = [];
  
  constructor(private http: HttpClient) {}

  getProduit(){
    return this.produit;
  }

  addProduit(prod : any){
    this.produit.push(prod);
  }
  getProduitById(id?:any){
    return this.produit.find(el=>{
      el.id = id;
    })
  }

  supprimerProduit(produit: any): void {
    const index = this.produit.indexOf(produit);
    if (index !== -1) {
      this.produit.splice(index, 1);
    }
  }
  modifierProduit(produit: any): Observable<any> {
    const url = `${this.apiUrl}/modifier-produit/${produit.id}`;
    return this.http.put(url, produit);
  }

//  modifierProduit(produit:any): void{
//    const index = this.produit.findIndex(p => p.id === produit.id);

//   // Si l'indice est trouvé, mettez à jour le produit
//   if (index !== -1) {
//     this.produit[index] = produit;
// }
// }
 
}
