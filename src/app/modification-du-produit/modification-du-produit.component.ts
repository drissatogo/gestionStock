import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-modification-du-produit',
  templateUrl: './modification-du-produit.component.html',
  styleUrls: ['./modification-du-produit.component.scss']
})
export class ModificationDuProduitComponent implements OnInit {
  id: number = 0;
  fournisseur: string = '';
  entrepot: string = '';
  date_de_reception: Date = new Date();
  nom: string = '';
  categorie: string = '';
  quantite: number = 0;
  prix: number = 0;
  selectedImage: any;
  produit: any[] = [];

  constructor(private router: Router, private produitService: ProduitService, private route : ActivatedRoute ){}
  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // const produit = this.produitService.getProduit();
    // this.id = produit.id;
    // this.fournisseur= produit.fournisseur;
    // this.entrepot= produit.entrepot;
    // this.date_de_reception=produit.date_de_reception;
    // this.nom= produit.nom;
    // this.categorie= produit.categorie;
    // this.quantite= produit.quantite;
    // this.prix= produit.prix;
    // this.selectedImage= produit.selectedImage
  }

   modifierProduit(produit:any): void{
     // Mettre à jour les données du produit dans le service
     
     this.produitService.modifierProduit(produit.id);

    this.router.navigate(['/ajoutProduit', produit]);
     // Rediriger vers la page d'affichage des produits
     this.router.navigate(['/etat-stock']);

  }
}
