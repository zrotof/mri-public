import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectSection } from '../../../../core/models/project';
import { WorkTypeComponent } from '../../../../shared/components/work-type/work-type.component';

@Component({
  selector: 'app-project-sidebar',
  templateUrl: './project-sidebar.component.html',
  styleUrl: './project-sidebar.component.scss',
  imports: [
    WorkTypeComponent,
    RouterLink
  ]
})

export class ProjectSidebarComponent {
  sections = input.required<ProjectSection[]>();
  renovationTypes = input.required<string[]>();
  activeSection = input.required<string>();

  navigate = output<string>();
  share = output<void>();

  onNavigate(id: string) {
    this.navigate.emit(id);
  }

  onShare() {
    this.share.emit();
  }
}
