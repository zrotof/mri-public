import { Component, input } from '@angular/core';
import { AuditSection } from '../../../../core/models/project';

@Component({
  selector: 'app-audit-section',
  templateUrl: './audit-section.component.html',
  styleUrl: './audit-section.component.scss',
  imports: [],
})
export class AuditSectionComponent {
section = input<AuditSection>();
}
