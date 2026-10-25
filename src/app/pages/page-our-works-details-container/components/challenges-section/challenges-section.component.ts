import { Component, input } from '@angular/core';
import { ChallengesSection } from '../../../../core/models/project';

import { GsapSplitTextFadeInScrollTriggerDirective } from '../../../../shared/directives/gsap-split-text-fade-in-scroll-trigger/gsap-split-text-fade-in-scroll-trigger.directive';

@Component({
  selector: 'app-challenges-section',
  templateUrl: './challenges-section.component.html',
  styleUrl: './challenges-section.component.scss',
  imports: [GsapSplitTextFadeInScrollTriggerDirective],
})

export class ChallengesSectionComponent {
  section = input<ChallengesSection>();
}
