import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
 private client :any[]= [];
 private lastClientId: number = 0;
  private saveClientToLocal() {
    localStorage.setItem('client', JSON.stringify(this.client));
  }
  constructor() { }

  getClient(){
    return this.client;
  }
  addClient(client:any){
    this.lastClientId = Number(this.lastClientId) + 1;
    client.id = this.lastClientId;
    this.client.push(client);
    this.saveClientToLocal();
  }

  getClientById(ClientId: number) {
    return this.client.find(client => client.id == ClientId);
  }

  supprimerClient(client: any): void {
    const confirmation = window.confirm("Êtes-vous sûr de vouloir supprimer  ?");

  if (confirmation) {
    const index = this.client.indexOf(client);
    if (index !== -1) {
      this.client.splice(index, 1);
      // Vous pouvez également afficher un message ou effectuer d'autres actions après la suppression.
    }
  } else {
    // L'utilisateur a annulé la suppression, vous pouvez effectuer des actions appropriées ici.
  }
  }

  modifierProduit(nouveauClient: any) {
    const index = this.client.findIndex(ancienClient => ancienClient.id === nouveauClient.id);
    if (index !== -1) {
      this.client[index] = nouveauClient;
    }
  }
  
}
