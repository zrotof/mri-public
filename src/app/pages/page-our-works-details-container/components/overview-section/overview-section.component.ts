import { Component, input } from '@angular/core';
import { OverviewSection } from '../../../../core/models/project';

@Component({
  selector: 'app-overview-section',
  templateUrl: './overview-section.component.html',
  styleUrl: './overview-section.component.scss',
})

export class OverviewSectionComponent {
  section = input<OverviewSection>();
}
