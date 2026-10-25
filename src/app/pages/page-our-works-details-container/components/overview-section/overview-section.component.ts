import { Component, input } from '@angular/core';
import { OverviewSection } from '../../../../core/models/project';
import { GsapSplitTextFadeInScrollTriggerDirective } from '../../../../shared/directives/gsap-split-text-fade-in-scroll-trigger/gsap-split-text-fade-in-scroll-trigger.directive';

@Component({
  selector: 'app-overview-section',
  templateUrl: './overview-section.component.html',
  styleUrl: './overview-section.component.scss',
  imports: [GsapSplitTextFadeInScrollTriggerDirective]
})

export class OverviewSectionComponent {
  section = input<OverviewSection>();
}
