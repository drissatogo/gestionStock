import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../service/produit.service';
import { Produit } from '../produit';

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
 

  produitId: number | any;
  
  produit! : Produit;
  versetat: any;
  constructor(private router: Router, private produitService: ProduitService, private route : ActivatedRoute){}
     
  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      const id = params.get("id") as unknown as number;
      console
      this.produit = this.produitService.getProduitById(id);
    });
  }
 
  
  onSubmit() {
    this.produitService.modifierProduit(this.produit);
    // Redirige vers la liste des produits.
    this.versetat.navigateByUrl('versetat');
  }
}
