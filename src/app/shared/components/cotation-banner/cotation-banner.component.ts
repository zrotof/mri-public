import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GsapSplitTextFadeInScrollTriggerDirective } from '../../directives/gsap-split-text-fade-in-scroll-trigger/gsap-split-text-fade-in-scroll-trigger.directive';

@Component({
  selector: 'app-cotation-banner',
  templateUrl: './cotation-banner.component.html',
  styleUrl: './cotation-banner.component.scss',
  imports: [
    NgOptimizedImage,
    RouterLink,
    GsapSplitTextFadeInScrollTriggerDirective
  ]
})
export class CotationBannerComponent {}
