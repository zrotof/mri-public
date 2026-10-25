import { Component, input } from '@angular/core';
import { StructuralSection } from '../../../../core/models/project';

import { GsapSplitTextFadeInScrollTriggerDirective } from '../../../../shared/directives/gsap-split-text-fade-in-scroll-trigger/gsap-split-text-fade-in-scroll-trigger.directive';

@Component({
  selector: 'app-structural-section',
  imports: [GsapSplitTextFadeInScrollTriggerDirective],
  templateUrl: './structural-section.component.html',
  styleUrl: './structural-section.component.scss'
})
export class StructuralSectionComponent {
section = input<StructuralSection>();
}
