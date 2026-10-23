import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cotation-banner',
  templateUrl: './cotation-banner.component.html',
  styleUrl: './cotation-banner.component.scss',
  imports: [
    NgOptimizedImage,
    RouterLink
  ]
})
export class CotationBannerComponent {}
