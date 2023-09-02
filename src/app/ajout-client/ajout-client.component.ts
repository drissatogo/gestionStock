import { Component, NgModule, OnInit } from '@angular/core';
import { EmailValidator, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common'; 
import { ClientService } from '../client.service';
import { Client } from '../client';

@NgModule({
  imports: [
    // ...
    FormsModule
  ],
  // ...
})
export class AppModule { }
@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.scss']
})
export class AjoutClientComponent implements OnInit {
  constructor(private router:Router,private location: Location, private clientService: ClientService){}
  pourAnnulerAjoutClient(): void {
        //  pour revenir à la page précédente
        this.location.back();

  }

  id:number=0;
  nom:string='';
  prenom:string='';
  telephone:string='';
  email:string=''
  redirection: any;
  clients: any;
  client: any;
  ajouterClient(): void {
    const nouveauClient = new Client(this.id, this.nom, this.prenom, this.telephone, this.email);
    this.clientService.addClient(nouveauClient);
  
    // Réinitialisez les champs du formulaire après l'ajout
    this.id = 0;
    this.nom = '';
    this.prenom = '';
    this.telephone = '';
    this.email = '';
  }
  ngOnInit(): void {
    this.clients = this.clientService.getClient();
  }

  modifierClient(): void {
    const clientModifie = new Client(this.id, this.nom, this.prenom, this.telephone, this.email);
    this.clientService.modifierClient(clientModifie);
  
    // Réinitialisez les champs du formulaire après la modification
    this.id = 0;
    this.nom = '';
    this.prenom = '';
    this.telephone = '';
    this.email = '';
  } 

  supprimerClient(client: Client): void {
    this.clientService.supprimerClient(client);
    // ajouter une confirmation ici si nécessaire.
  }
  
  
}
