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
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';

const routes:Routes=[
  {path:'dashboard',component:DashboardComponent},
  {path:'reception',component:ReceptionComponent},
  {path:'etat',component:EtatStockComponent},
  {path:'ajoutProduit',component:AjoutDeProduitComponent},
  {path:'gohome',component:DashboardComponent},
  {path:'login',component:PageLoginComponent},
  {path:'inscrire',component:PageInscriptionComponent},
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
    PageLoginComponent,
    PageInscriptionComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

