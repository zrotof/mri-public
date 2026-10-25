import { Component, input } from '@angular/core';
import { AuditSection } from '../../../../core/models/project';

import { GsapSplitTextFadeInScrollTriggerDirective } from '../../../../shared/directives/gsap-split-text-fade-in-scroll-trigger/gsap-split-text-fade-in-scroll-trigger.directive';

@Component({
  selector: 'app-audit-section',
  templateUrl: './audit-section.component.html',
  styleUrl: './audit-section.component.scss',
  imports: [GsapSplitTextFadeInScrollTriggerDirective],
})
export class AuditSectionComponent {
section = input<AuditSection>();
}
