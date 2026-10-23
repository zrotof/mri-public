import { Component, input, output } from '@angular/core';
import { ProjectSection } from '../../../../core/models/project';
import { WorkTypeComponent } from '../../../../shared/components/work-type/work-type.component';

@Component({
  selector: 'app-project-sidebar',
  templateUrl: './project-sidebar.component.html',
  styleUrl: './project-sidebar.component.scss',
  imports: [
    WorkTypeComponent
  ]
})

export class ProjectSidebarComponent {
  sections = input.required<ProjectSection[]>();
  renovationTypes = input.required<string[]>();
  activeSection = input.required<string>();

  navigate = output<string>();

  onNavigate(id: string) {
    this.navigate.emit(id);
  }
}
