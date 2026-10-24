import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GsapSplitTextFadeInScrollTriggerDirective } from '../../shared/directives/gsap-split-text-fade-in-scroll-trigger/gsap-split-text-fade-in-scroll-trigger.directive';

@Component({
  selector: 'app-page-legal-notice',
  standalone: true,
  imports: [
    RouterLink,
    GsapSplitTextFadeInScrollTriggerDirective
  ],
  templateUrl: './page-legal-notice.component.html',
  styleUrl: './page-legal-notice.component.scss'
})
export class PageLegalNoticeComponent {}
