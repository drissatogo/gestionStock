import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-expedition',
  templateUrl: './liste-expedition.component.html',
  styleUrls: ['./liste-expedition.component.scss']
})
export class ListeExpeditionComponent {
  constructor(private router: Router) {}

  faireExpedition() {
    // Rediriger vers le composant "ExpeditionComponent"
    this.router.navigateByUrl('expedition');
}
}
