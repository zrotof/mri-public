import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GsapSplitTextFadeInScrollTriggerDirective } from '../../shared/directives/gsap-split-text-fade-in-scroll-trigger/gsap-split-text-fade-in-scroll-trigger.directive';

@Component({
  selector: 'app-page-privacy-policy',
  standalone: true,
  imports: [
    RouterLink,
    GsapSplitTextFadeInScrollTriggerDirective
  ],
  templateUrl: './page-privacy-policy.component.html',
  styleUrl: './page-privacy-policy.component.scss'
})
export class PagePrivacyPolicyComponent {}
