import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../../../core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  delayNotice?: string;
}

@Component({
  selector: 'app-road-map-process',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ],
  templateUrl: './road-map-process.component.html',
  styleUrl: './road-map-process.component.scss'
})
export class RoadMapProcessComponent {

  readonly steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Prise de contact & Cadrage',
      subtitle: 'Partage de votre vision',
      description: 'Vous nous soumettez votre demande en ligne ou par téléphone. Un chargé d’affaires dédié analyse vos besoins et vos attentes.',
      icon: 'faComments',
      delayNotice: 'Réponse sous 24h'
    },
    {
      number: '02',
      title: 'Visite technique sur site',
      subtitle: 'Diagnostic gratuit et sans engagement',
      description: 'Nous nous déplaçons chez vous pour évaluer la faisabilité technique, relever les cotes et anticiper les contraintes du bâtiment.',
      icon: 'faCompassDrafting',
      delayNotice: 'Gratuit sur rendez-vous'
    },
    {
      number: '03',
      title: 'Devis détaillé & Étude 3D',
      subtitle: 'Transparence totale lot par lot',
      description: 'Remise d’un chiffrage exhaustif et ferme (fournitures, main d’œuvre et calendrier prévisionnel), sans aucune mauvaise surprise.',
      icon: 'faFileInvoiceDollar',
      delayNotice: 'Remis sous 48h'
    },
    {
      number: '04',
      title: 'Réalisation & Suivi de chantier',
      subtitle: 'Coordination de tous les corps d’état',
      description: 'Votre conducteur de travaux pilote les artisans (plomberie, électricité, maçonnerie, menuiserie, peinture) et vous tient informé à chaque étape.',
      icon: 'faHelmetSafety',
      delayNotice: 'Point d’étape hebdomadaire'
    },
    {
      number: '05',
      title: 'Réception & Garanties Décennales',
      subtitle: 'Livraison clé en main',
      description: 'Procès-verbal de réception des travaux, nettoyage complet des lieux et activation immédiate de vos garanties biennales et décennales.',
      icon: 'faKey',
      delayNotice: 'Garantie 10 ans'
    }
  ];
}
