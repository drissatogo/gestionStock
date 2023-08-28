import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReceptionComponent } from './reception/reception.component';
import { Routes, RouterModule } from '@angular/router';
import { EtatStockComponent } from './etat-stock/etat-stock.component';
import { AjoutDeProduitComponent } from './ajout-de-produit/ajout-de-produit.component';
import { ExpeditionComponent } from './expedition/expedition.component';

const routes:Routes=[
  // {path:'dashboard',component:DashboardComponent},
  // {path:'reception',component:ReceptionComponent},
  // {path:'etat',component:EtatStockComponent},
  // {path:'ajoutProduit',component:AjoutDeProduitComponent},
  // {path:'gohome',component:DashboardComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReceptionComponent,
    EtatStockComponent,
    AjoutDeProduitComponent,
    ExpeditionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

