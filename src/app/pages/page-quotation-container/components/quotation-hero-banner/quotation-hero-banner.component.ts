import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../../../core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

@Component({
  selector: 'app-quotation-hero-banner',
  standalone: true,
  templateUrl: './quotation-hero-banner.component.html',
  styleUrl: './quotation-hero-banner.component.scss',
  imports: [
    NgOptimizedImage,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ]
})
export class QuotationHeroBannerComponent {}
