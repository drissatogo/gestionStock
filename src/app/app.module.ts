import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReceptionComponent } from './reception/reception.component';
import { Routes, RouterModule } from '@angular/router';
import { EtatStockComponent } from './etat-stock/etat-stock.component';
import { AjoutDeProduitComponent } from './ajout-de-produit/ajout-de-produit.component';
import { ExpeditionComponent } from './expedition/expedition.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ModificationDuProduitComponent } from './modification-du-produit/modification-du-produit.component';
import { AjoutClientComponent } from './ajout-client/ajout-client.component';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { ClientService } from './client.service';
import { ListeExpeditionComponent } from './liste-expedition/liste-expedition.component';

const routes:Routes=[
  {path:'dashboard',component:DashboardComponent},
  {path:'reception',component:AjoutDeProduitComponent},
  {path:'etat',component:EtatStockComponent},
  {path:'ajoutProduit',component:AjoutDeProduitComponent},
  {path:'gohome',component:DashboardComponent},
  {path:'versmodifier/:id',component:ModificationDuProduitComponent},
  {path:'versetat', component:EtatStockComponent},
  {path:'stock', component:EtatStockComponent},
  {path:'expedition',component:ExpeditionComponent},
  {path:'client', component:ListeClientComponent},
  {path:'addcustom', component:AjoutClientComponent},
  {path:'expedies', component:ListeExpeditionComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReceptionComponent,
    EtatStockComponent,
    AjoutDeProduitComponent,
    ExpeditionComponent,
    AccueilComponent,
    ModificationDuProduitComponent,
    AjoutClientComponent,
    ListeClientComponent,
    ListeExpeditionComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [
    
      ClientService // Ajoutez le service ici
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

