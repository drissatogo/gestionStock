export class Produit {
    public id: number;
    public fournisseur: string;
    public entrepot:string;
    public date_de_reception:Date;
    public nom: string;
    public categorie:string;
    public quantite: number;
    public prix:number;
 constructor(
    id: number,
    fournisseur: string,
    entrepot:string,
    date_de_reception:Date,
    nom: string,
    categorie:string,
    quantite: number,
    prix:number,
 )   {
    this.id=id;
    this.fournisseur=fournisseur;
    this.entrepot=entrepot;
    this.date_de_reception=date_de_reception;
    this.nom=nom;
    this.categorie=categorie;
    this.quantite=quantite;
    this.prix=prix;
 }
}
