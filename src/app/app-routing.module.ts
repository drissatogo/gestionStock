import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EtatStockComponent } from './etat-stock/etat-stock.component';
import { AjoutClientComponent } from './ajout-client/ajout-client.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }, 
  { 
    path: 'Accueil',
   component: DashboardComponent
},

  { 
    path: 'Stock', 
    component: EtatStockComponent 
},

{
  path:'addcustom',
  component:AjoutClientComponent
},
{ path: 'ajout-client', component: AjoutClientComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
