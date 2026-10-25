import { Component, input } from '@angular/core';
import { BeforeAfterSection } from '../../../../core/models/project';
import { NgOptimizedImage } from '@angular/common';

import { GsapSplitTextFadeInScrollTriggerDirective } from '../../../../shared/directives/gsap-split-text-fade-in-scroll-trigger/gsap-split-text-fade-in-scroll-trigger.directive';

@Component({
  selector: 'app-before-after-section',
  templateUrl: './before-after-section.component.html',
  styleUrl: './before-after-section.component.scss',
  imports: [
    NgOptimizedImage,
    GsapSplitTextFadeInScrollTriggerDirective
  ],
})

export class BeforeAfterSectionComponent {
section = input<BeforeAfterSection>();
}
