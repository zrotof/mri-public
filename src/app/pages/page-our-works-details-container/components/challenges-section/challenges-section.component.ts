import { Component, input } from '@angular/core';
import { ChallengesSection } from '../../../../core/models/project';

@Component({
  selector: 'app-challenges-section',
  templateUrl: './challenges-section.component.html',
  styleUrl: './challenges-section.component.scss',
  imports: [],
})

export class ChallengesSectionComponent {
  section = input<ChallengesSection>();
}
