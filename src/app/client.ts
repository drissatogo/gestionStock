export class Client {
    id: number;
    nom: string;
    prenom: string;
    telephone: string;
    email: string;
  
    constructor(id: number, nom: string, prenom: string, telephone: string, email: string) {
      this.id = id;
      this.nom = nom;
      this.prenom = prenom;
      this.telephone = telephone;
      this.email = email;
    }
  }
  
