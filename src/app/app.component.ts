import { Component } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gestionStock';
  constructor(private redirection:Router){}
  onDashboard(){
this.redirection.navigateByUrl('dashboard');
  }
  onReception(){
    this.redirection.navigateByUrl('reception');
}
onEtatStock(){
  this.redirection.navigateByUrl('etat')
}
}

