import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../../core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

export interface ReassuranceItem {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-reassurance-banner',
  standalone: true,
  templateUrl: './reassurance-banner.component.html',
  styleUrl: './reassurance-banner.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ]
})
export class ReassuranceBannerComponent {
  @Input() items: ReassuranceItem[] = [
    {
      icon: 'farFileLines',
      title: 'Étude & devis sous 48h',
      description: 'Visite sur site et chiffrage détaillé poste par poste en 48h. Transparent, précis et sans mauvaise surprise.'
    },
    {
      icon: 'farHandshake',
      title: 'Interlocuteur unique dédié',
      description: 'Un chef de projet dédié coordonne tous les corps d’état et pilote votre chantier de A à Z en toute sérénité.'
    },
    {
      icon: 'farCalendarCheck',
      title: 'Planning & délais maîtrisés',
      description: 'Un calendrier clair et contractuel fixé dès le départ. Nous nous engageons fermement sur la date de livraison.'
    },
    {
      icon: 'farGem',
      title: 'Finitions d’exception',
      description: 'Travail dans les règles de l’art, matériaux nobles et finitions soignées pour valoriser durablement votre bien.'
    }
  ];
}
