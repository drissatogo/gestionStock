import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EtatStockComponent } from './etat-stock/etat-stock.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
