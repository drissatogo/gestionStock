import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private redirection:Router){}
  onDashboard(){
this.redirection.navigateByUrl('dashboard');
  }
  onReception(){
    this.redirection.navigateByUrl('reception');
}
// onEtat(){
//   this.redirection.navigateByUrl('etat');
// }
}
