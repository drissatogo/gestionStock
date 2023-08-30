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
  vershome(): void {
    this.router.navigateByUrl('/etat');
  }
  nom: string = '';
  categorie: string = '';
  quantite: number = 0;
  prix: number = 0;
  selectedImage: any;

  constructor(private router: Router, private produitService: ProduitService) {}

  ajouterProduit(): void {
    const nouveauProduit = {
      id: this.produitService.getProduits().length + 1,
      nom: this.nom,
      categorie: this.categorie,
      quantite: this.quantite,
      prix: this.prix,
      image: this.selectedImage
    };

    this.produitService.addProduit(nouveauProduit);

    // Rediriger vers l'état de stock après avoir ajouté le produit
    this.router.navigateByUrl('/etat');
  }

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