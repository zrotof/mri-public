import { Component, inject, OnInit, signal } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { QuotationHeroBannerComponent } from './components/quotation-hero-banner/quotation-hero-banner.component';
import { QuotationFormComponent } from './components/quotation-form/quotation-form.component';
import { QuotationCounterpartComponent } from './components/quotation-counterpart/quotation-counterpart.component';
import { RoadMapProcessComponent } from '../../shared/components/road-map-process/road-map-process.component';

import { QuotationService } from '../../core/services/quotation/quotation.service';
import { QuotationRequest, QuotationResponse } from '../../core/models/quotation';
import { GtmService } from '../../core/services/gtm';

@Component({
  selector: 'app-page-quotation-container',
  standalone: true,
  templateUrl: './page-quotation-container.component.html',
  styleUrl: './page-quotation-container.component.scss',
  imports: [
    CommonModule,
    QuotationHeroBannerComponent,
    QuotationFormComponent,
    QuotationCounterpartComponent,
    RoadMapProcessComponent
  ]
})
export class PageQuotationContainerComponent implements OnInit {
  private gtmService = inject(GtmService);

  // État géré par le composant conteneur (Smart Component)
  isSubmitting = signal<boolean>(false);
  isSuccess = signal<boolean>(false);
  submitError = signal<string | null>(null);
  referenceId = signal<string | undefined>(undefined);

  constructor(
    private quotationService: QuotationService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Devis Gratuit Rénovation Immobilière - Ma Rénovation Immobilière');
    this.metaService.updateTag({
      name: 'description',
      content: 'Demandez votre devis gratuit et sans engagement pour vos travaux de rénovation et d’aménagement en Île-de-France. Réponse détaillée sous 48h.'
    });
  }

  handleQuotationSubmit(request: QuotationRequest): void {
    this.isSubmitting.set(true);
    this.submitError.set(null);

    this.quotationService.submitQuotation(request).subscribe({
      next: (response: QuotationResponse) => {
        this.isSubmitting.set(false);
        this.isSuccess.set(true);
        this.referenceId.set(response.referenceId);

        // Tracking GTM / GA4 de conversion Lead Gen
        this.gtmService.pushEvent('generate_lead', {
          event_category: 'Quotation',
          event_label: request.renovationType,
          renovation_type: request.renovationType,
          property_type: request.propertyType,
          surface_area: request.surfaceArea,
          postal_code: request.postalCode,
          reference_id: response.referenceId
        });

        // Scroll doux vers le bloc de confirmation si dans le navigateur
        if (typeof window !== 'undefined') {
          const formAnchor = document.getElementById('quotation-main-section');
          if (formAnchor) {
            formAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      },
      error: (err) => {
        this.isSubmitting.set(false);
        this.submitError.set(
          err?.message || 'Une erreur inattendue est survenue lors de l’envoi. Veuillez réessayer ou nous appeler directement.'
        );
      }
    });
  }

  handleResetRequested(): void {
    this.isSuccess.set(false);
    this.submitError.set(null);
    this.referenceId.set(undefined);
  }
}
