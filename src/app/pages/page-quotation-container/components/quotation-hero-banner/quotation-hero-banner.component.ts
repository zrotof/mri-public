import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-quotation-hero-banner',
  templateUrl: './quotation-hero-banner.component.html',
  styleUrl: './quotation-hero-banner.component.scss',
  imports: [
    NgOptimizedImage,
    InputTextModule,
    SelectModule,
    TextareaModule
  ]
})

export class QuotationHeroBannerComponent {}
