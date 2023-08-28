import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProduitService } from '../service/produit.service';


@NgModule({
  imports: [
    // ...
    FormsModule
  ],
  // ...
})
export class AppModule { }
@Component({
  selector: 'app-ajout-de-produit',
  templateUrl: './ajout-de-produit.component.html',
  styleUrls: ['./ajout-de-produit.component.scss']
})
export class AjoutDeProduitComponent {
  
  nom: string = '';
  categorie: string = '';
  quantite: number = 0;
  prix: number = 0;
  selectedImage: any;
  constructor(private router: Router, private produitService : ProduitService) {}
  // Méthode pour ajouter un produit à la liste
  ajouterProduit(): void {
    const nouveauProduit = {
      nom:this.nom,
      categorie:this.categorie,
      quantite:this.quantite,
      prix:this.prix,
      iconeSuppression: '<i class="fa-solid fa-trash"></i>',
      iconeModification: '<i class="fa-solid fa-pen-to-square"></i>'
    };
  
    // Ajouter le nouveauProduit à la liste des produits
    this.produitService.addProduit(nouveauProduit);

  }
  
  // constructor(private router:Router){}
  vershome(){
    this.router.navigateByUrl('gohome')
  }
  // selectedImage: any;

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
