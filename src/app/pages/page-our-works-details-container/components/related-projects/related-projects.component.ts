import { Component, computed, inject, input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../../../core/services/project/project.service';

@Component({
  selector: 'app-related-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './related-projects.component.html',
  styleUrl: './related-projects.component.scss'
})
export class RelatedProjectsComponent {
  private projectService = inject(ProjectService);

  currentSlug = input.required<string>();

  readonly allProjects = this.projectService.getProjectsSummary();

  readonly relatedProjects = computed(() => {
    const slug = this.currentSlug();
    const list = this.allProjects();
    return list.filter(p => p.slug !== slug);
  });
}
