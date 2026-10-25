import { Component, input } from '@angular/core';
import { PerformanceSection } from '../../../../core/models/project';

import { GsapSplitTextFadeInScrollTriggerDirective } from '../../../../shared/directives/gsap-split-text-fade-in-scroll-trigger/gsap-split-text-fade-in-scroll-trigger.directive';

@Component({
  selector: 'app-performance-section',
  imports: [GsapSplitTextFadeInScrollTriggerDirective],
  templateUrl: './performance-section.component.html',
  styleUrl: './performance-section.component.scss'
})
export class PerformanceSectionComponent {
  section = input<PerformanceSection>();
}
