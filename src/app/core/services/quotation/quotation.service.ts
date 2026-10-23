import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { QuotationRequest, QuotationResponse } from '../../models/quotation';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  submitQuotation(request: QuotationRequest): Observable<QuotationResponse> {
    // Simulation d'un appel API avec délai réaliste
    // Préparé pour un branchement direct vers un backend ou service email (EmailJS / Resend / Webhook CRM)
    console.log('[QuotationService] Nouvelle demande de devis reçue :', request);

    const generatedReference = 'DEV-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);

    return of({
      success: true,
      message: 'Votre demande de devis a été enregistrée avec succès. Un chargé d’affaires MRI vous contactera sous 48h.',
      referenceId: generatedReference
    }).pipe(delay(900));
  }
}
