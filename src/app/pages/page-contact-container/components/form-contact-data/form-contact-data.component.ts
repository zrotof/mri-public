import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

import { ConvertStringLabelToFontawesomeIconPipe } from '../../../../core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { ContactService } from '../../../../core/services/contact/contact.service';
import { GtmService } from '../../../../core/services/gtm';

@Component({
  selector: 'app-form-contact-data',
  standalone: true,
  templateUrl: './form-contact-data.component.html',
  styleUrl: './form-contact-data.component.scss',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    InputTextModule,
    TextareaModule,
    CheckboxModule,
    ButtonModule,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ]
})
export class FormContactDataComponent {
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);
  private gtmService = inject(GtmService);

  isSubmitting = signal<boolean>(false);
  isSuccess = signal<boolean>(false);
  submitError = signal<string | null>(null);

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.pattern(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    rgpdConsent: [false, [Validators.requiredTrue]]
  });

  hasError(controlName: string, errorName?: string): boolean {
    const control = this.contactForm.get(controlName);
    if (!control || !control.touched) return false;
    return errorName ? control.hasError(errorName) : control.invalid;
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.submitError.set(null);

    const formValue = this.contactForm.value;

    this.contactService.submitContact(formValue).subscribe({
      next: (res) => {
        this.isSubmitting.set(false);
        this.isSuccess.set(true);

        // Tracking GTM de l'envoi de formulaire de contact
        this.gtmService.pushEvent('contact_submit', {
          event_category: 'Contact',
          event_label: 'Message Envoyé'
        });
      },
      error: (err) => {
        this.isSubmitting.set(false);
        this.submitError.set(
          err?.message || 'Une erreur est survenue lors de l’envoi. Veuillez réessayer ou nous contacter par téléphone.'
        );
      }
    });
  }

  onReset(): void {
    this.contactForm.reset({
      name: '',
      email: '',
      phone: '',
      message: '',
      rgpdConsent: false
    });
    this.isSuccess.set(false);
    this.submitError.set(null);
  }
}
