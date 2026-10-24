import { computed, Injectable, signal, WritableSignal } from '@angular/core';
import { PROJECTS } from '../../../shared/constants/projects.constant';
import { Project } from '../../models/project';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  private projectsSignal = signal<Project[]>(PROJECTS);

  // SUMMARY (liste légère)
  getProjectsSummary(isTop?: boolean) {
    return computed(() =>
      this.projectsSignal()
        .filter(p => isTop ? p.isTop : true)
        .map(p => ({
          id: p.id,
          slug: p.slug,
          title: p.title,
          location: p.location,
          coverImage: p.coverImage ?? p.featuredImages?.[0] ?? '',
          featuredImages: p.featuredImages,
          shortDescription: p.shortDescription,
          renovationTypes: p.renovationTypes
        }))
    );
  }

  // DETAIL complet
  getProjectBySlug(slug: string) {
    return computed(() =>
      this.projectsSignal().find(p => p.slug === slug)
    );
  }
}
