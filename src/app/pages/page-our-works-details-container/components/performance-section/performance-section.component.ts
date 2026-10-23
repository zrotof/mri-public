import { Component, input } from '@angular/core';
import { PerformanceSection } from '../../../../core/models/project';

@Component({
  selector: 'app-performance-section',
  imports: [],
  templateUrl: './performance-section.component.html',
  styleUrl: './performance-section.component.scss'
})
export class PerformanceSectionComponent {
  section = input<PerformanceSection>();
}
