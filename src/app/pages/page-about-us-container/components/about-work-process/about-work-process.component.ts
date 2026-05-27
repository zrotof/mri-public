import { Component } from '@angular/core';

@Component({
  selector: 'app-about-work-process',
  templateUrl: './about-work-process.component.html',
  styleUrl: './about-work-process.component.scss',
  imports: []
})

export class AboutWorkProcessComponent {

  protected readonly steps = [
    {
      id: '1',
      title: 'La découverte',
      description: "Visite sur site, écoute de votre projet et analyse des contraintes techniques de votre espace.",
      position: 'top'
    },
    {
      id: '4',
      title: 'Le chantier',
      description: 'Pilotage quotidien des travaux, photos d’avancement et ajustements en temps réel.',
      position: 'bottom'
    },
    {
      id: '2',
      title: 'Étude & Devis',
      description: 'Proposition budgétaire claire, périmètre des travaux précis et engagement sur les délais.',
      position: 'top'
    },
    {
      id: '5',
      title: 'La livraison',
      description: 'Nettoyage complet, validation finale des finitions et remise des clés d’un intérieur prêt à vivre.',
      position: 'bottom'
    },
    {
      id: '3',
      title: 'La préparation',
      description: 'Sélection des matériaux, plans techniques et planification rigoureuse pour tout anticiper.',
      position: 'top'
    }
];
}
