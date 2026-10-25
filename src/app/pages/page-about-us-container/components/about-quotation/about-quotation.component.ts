import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GsapSplitTextFadeInScrollTriggerDirective } from '../../../../shared/directives/gsap-split-text-fade-in-scroll-trigger/gsap-split-text-fade-in-scroll-trigger.directive';

@Component({
  selector: 'app-about-quotation',
  standalone: true,
  imports: [
    RouterLink,
    GsapSplitTextFadeInScrollTriggerDirective
  ],
  templateUrl: './about-quotation.component.html',
  styleUrl: './about-quotation.component.scss'
})
export class AboutQuotationComponent {}
