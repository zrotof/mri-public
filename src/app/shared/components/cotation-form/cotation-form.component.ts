import { Component, ViewEncapsulation } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-cotation-form',
  templateUrl: './cotation-form.component.html',
  styleUrl: './cotation-form.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    InputTextModule,
    SelectModule,
    TextareaModule
  ]
})

export class CotationFormComponent {

  protected readonly renovationTypes = [
    "Aménagement de cuisine",
    "Aménagement de salle de bain",
    "Aménagements et extension",
    "Décoration d'intérieur et agencement",
    "Électricité",
    "Peinture",
    "Plomberie",
    "Rénovation complète",
    "Rénovation extérieur",
    "Sols et plafonds"
  ]

}
