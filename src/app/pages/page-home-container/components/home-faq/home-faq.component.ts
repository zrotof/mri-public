import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../../../core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { GsapSplitTextFadeInScrollTriggerDirective } from '../../../../shared/directives/gsap-split-text-fade-in-scroll-trigger/gsap-split-text-fade-in-scroll-trigger.directive';

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

@Component({
  selector: 'app-home-faq',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe,
    GsapSplitTextFadeInScrollTriggerDirective
  ],
  templateUrl: './home-faq.component.html',
  styleUrl: './home-faq.component.scss'
})
export class HomeFaqComponent {
  // Premier élément ouvert par défaut
  readonly activeIndex = signal<number | null>(0);

  readonly faqs: FaqItem[] = [
    {
      question: "Comment se déroule l’établissement d’un devis chez Ma Rénovation Immobilière ?",
      answer: "Après votre première prise de contact, nous organisons une visite technique gratuite sur place pour relever les cotes, analyser la faisabilité structurelle et cerner vos attentes esthétiques. Sous 48 heures ouvrées, nous vous remettons un devis exhaustif et chiffré lot par lot (fournitures, main-d’œuvre et calendrier)."
    },
    {
      question: "Le devis et la première visite technique sont-ils gratuits et sans engagement ?",
      answer: "Absolument. La visite sur les lieux de votre futur chantier, le diagnostic technique et l’établissement de votre estimation personnalisée sont 100% gratuits et ne vous engagent en aucune manière."
    },
    {
      question: "Quels corps d’état prenez-vous en charge pour une rénovation ?",
      answer: "Nous sommes une entreprise Tous Corps d’État (TCE). Nous coordonnons l'ensemble des corps de métier : démolition, maçonnerie, plomberie, électricité aux normes NF C 15-100, menuiserie intérieure/extérieure, plâtrerie, pose de carrelage, parquets en bois massif, peinture et finitions décoratives."
    },
    {
      question: "Vos travaux sont-ils couverts par une garantie décennale ?",
      answer: "Oui, la totalité de nos interventions est couverte par notre assurance Responsabilité Civile Professionnelle et notre Garantie Décennale (SMABTP / AXA). Cette couverture prend effet dès la signature du procès-verbal de réception pour une durée de 10 ans."
    },
    {
      question: "Comment garantissez-vous le respect du budget et des délais convenus ?",
      answer: "Chaque projet fait l’objet d’un engagement contractuel sur le prix ferme : aucun surcoût imprévu n’est facturé sans validation écrite préalable. Un planning prévisionnel d’intervention est établi avant le coup d'envoi et un conducteur de travaux dédié vous tient informé chaque semaine."
    },
    {
      question: "Dans quelles zones géographiques intervenez-vous en Île-de-France ?",
      answer: "Notre agence est basée à Saint-Germain-en-Laye et nous intervenons sur l’ensemble des Yvelines (78), à Paris intra-muros, ainsi que dans les Hauts-de-Seine (92) et le Val-d'Oise (95)."
    }
  ];

  toggleItem(index: number): void {
    if (this.activeIndex() === index) {
      this.activeIndex.set(null);
    } else {
      this.activeIndex.set(index);
    }
  }
}
