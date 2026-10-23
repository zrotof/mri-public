import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../../../core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

@Component({
  selector: 'app-quotation-reassurance',
  standalone: true,
  templateUrl: './quotation-reassurance.component.html',
  styleUrl: './quotation-reassurance.component.scss',
  imports: [
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ]
})
export class QuotationReassuranceComponent {

  readonly reassurancePoints = [
    {
      icon: 'faShieldHalved',
      title: 'Garantie Décennale & RC Pro',
      description: 'Tous nos chantiers de rénovation et d’agrandissement sont couverts par notre assurance décennale française pour une totale sérénité.'
    },
    {
      icon: 'faClock',
      title: 'Chiffrage détaillé sous 48h',
      description: 'Devis clair, transparent et sans frais cachés, lot par lot (matériaux, main d’œuvre et planning précis).'
    },
    {
      icon: 'faUserTie',
      title: 'Interlocuteur Unique Dédié',
      description: 'Un conducteur de travaux expérimenté vous accompagne de la phase de conception 3D jusqu’à la livraison finale.'
    },
    {
      icon: 'faAward',
      title: 'Artisans Qualifiés & RGE',
      description: 'Nos compagnons et partenaires certifiés garantissent des finitions haut de gamme et le respect des normes énergétiques (DPE).'
    }
  ];
}
