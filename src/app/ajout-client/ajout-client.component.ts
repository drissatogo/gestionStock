import { Component, NgModule } from '@angular/core';
import { EmailValidator, FormsModule } from '@angular/forms';

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
export class AjoutClientComponent {
  id:number=0;
  nom:string='';
  prenom:string='';
  telephone:string='';
  email:string=''
  redirection: any;
  clients: any;
  client: any;
  ajouterClient(): void {
  
    const notreClient = {
    nom:this.nom,
    prenom:this.prenom,
    telephone:this.telephone,
    email:this.email
    };
    this.client.addProduit(notreClient);
  }

  
}
