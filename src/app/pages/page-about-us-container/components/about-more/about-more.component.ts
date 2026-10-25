import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { GsapSplitTextFadeInScrollTriggerDirective } from '../../../../shared/directives/gsap-split-text-fade-in-scroll-trigger/gsap-split-text-fade-in-scroll-trigger.directive';

@Component({
  selector: 'app-about-more',
  templateUrl: './about-more.component.html',
  styleUrl: './about-more.component.scss',
  imports: [
    NgOptimizedImage,
    GsapSplitTextFadeInScrollTriggerDirective
  ]
})

export class AboutMoreComponent {

}
