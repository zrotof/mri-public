import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ContactRequest, ContactResponse } from '../../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  submitContact(request: ContactRequest): Observable<ContactResponse> {
    console.log('[ContactService] Nouveau message de contact reçu :', request);

    return of({
      success: true,
      message: 'Votre message a bien été transmis à nos équipes. Nous vous répondrons sous 24 à 48 heures ouvrées.'
    }).pipe(delay(800));
  }
}
