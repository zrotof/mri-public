import { Component, input } from '@angular/core';
import { StructuralSection } from '../../../../core/models/project';

@Component({
  selector: 'app-structural-section',
  imports: [],
  templateUrl: './structural-section.component.html',
  styleUrl: './structural-section.component.scss'
})
export class StructuralSectionComponent {
section = input<StructuralSection>();
}
