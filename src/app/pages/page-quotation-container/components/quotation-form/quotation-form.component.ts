import { CommonModule } from '@angular/common';
import { Component, input, output, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../../../core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { QuotationRequest } from '../../../../core/models/quotation';
import { GsapSplitTextFadeInScrollTriggerDirective } from '../../../../shared/directives/gsap-split-text-fade-in-scroll-trigger/gsap-split-text-fade-in-scroll-trigger.directive';

@Component({
  selector: 'app-quotation-form',
  standalone: true,
  templateUrl: './quotation-form.component.html',
  styleUrl: './quotation-form.component.scss',
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    InputTextModule,
    SelectModule,
    TextareaModule,
    InputNumberModule,
    CheckboxModule,
    ButtonModule,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe,
    GsapSplitTextFadeInScrollTriggerDirective
  ]
})
export class QuotationFormComponent implements OnInit {

  // Inputs depuis le smart component
  isSubmitting = input<boolean>(false);
  isSuccess = input<boolean>(false);
  submitError = input<string | null>(null);
  referenceId = input<string | undefined>(undefined);

  // Outputs vers le smart component
  formSubmitted = output<QuotationRequest>();
  resetRequested = output<void>();

  quotationForm!: FormGroup;

  readonly renovationTypes: string[] = [
    'Rénovation complète clés en main',
    'Aménagement de cuisine',
    'Aménagement de salle de bain',
    'Aménagements et extension',
    'Décoration d’intérieur et agencement',
    'Électricité et domotique',
    'Peinture et revêtements muraux',
    'Plomberie et sanitaires',
    'Rénovation extérieure et toiture',
    'Sols et faux plafonds'
  ];

  readonly propertyTypes: string[] = [
    'Appartement',
    'Maison individuelle',
    'Bureau / Espace professionnel',
    'Commerce / Retail',
    'Immeuble de rapport'
  ];

  readonly timeframes: string[] = [
    'Dès que possible (< 1 mois)',
    'Dans 1 à 3 mois',
    'Dans 3 à 6 mois',
    'Simple estimation budgétaire'
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.quotationForm = this.fb.group({
      renovationType: ['', [Validators.required]],
      propertyType: ['Appartement', [Validators.required]],
      surfaceArea: [null, [Validators.min(5), Validators.max(2000)]],
      postalCode: ['', [Validators.pattern(/^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/)]],
      timeframe: ['Dans 1 à 3 mois'],
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(70)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/)]],
      company: [''],
      message: ['', [Validators.maxLength(2000)]],
      rgpdConsent: [false, [Validators.requiredTrue]]
    });
  }

  hasError(controlName: string, errorName?: string): boolean {
    const control = this.quotationForm.get(controlName);
    if (!control || !control.touched) return false;
    return errorName ? control.hasError(errorName) : control.invalid;
  }

  onSubmit(): void {
    if (this.quotationForm.invalid) {
      this.quotationForm.markAllAsTouched();
      return;
    }

    const formValue = this.quotationForm.value;
    const payload: QuotationRequest = {
      fullName: formValue.fullName.trim(),
      email: formValue.email.trim(),
      phone: formValue.phone.trim(),
      company: formValue.company?.trim() || undefined,
      renovationType: formValue.renovationType,
      propertyType: formValue.propertyType,
      surfaceArea: formValue.surfaceArea ? Number(formValue.surfaceArea) : undefined,
      postalCode: formValue.postalCode?.trim() || undefined,
      timeframe: formValue.timeframe,
      message: formValue.message?.trim() || undefined,
      rgpdConsent: formValue.rgpdConsent
    };

    this.formSubmitted.emit(payload);
  }

  onReset(): void {
    this.quotationForm.reset({
      renovationType: '',
      propertyType: 'Appartement',
      surfaceArea: null,
      postalCode: '',
      timeframe: 'Dans 1 à 3 mois',
      fullName: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      rgpdConsent: false
    });
    this.resetRequested.emit();
  }
}
