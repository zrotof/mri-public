import { Component, computed, inject, input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../../../core/services/project/project.service';

import { GsapSplitTextFadeInScrollTriggerDirective } from '../../../../shared/directives/gsap-split-text-fade-in-scroll-trigger/gsap-split-text-fade-in-scroll-trigger.directive';

@Component({
  selector: 'app-related-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage, GsapSplitTextFadeInScrollTriggerDirective],
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
