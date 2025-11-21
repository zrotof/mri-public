import { Injectable } from '@angular/core';
import { Project, PROJECTS } from '../../../shared/constants/projects.constant';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  getProjectsSummary(isTop ?: boolean)  {

    const projects = isTop ? PROJECTS.filter((p: Project) => p.isTop === isTop ) : PROJECTS;
    
    return projects.map((p: Project) => {
      return {
        id: p.id,
        coverImage: p.coverImage,
        title: p.title,
        description: p.description,
        renovationTypes: p.renovationTypes
      }
    })
  }

  getProjectById(id: number) : Project {
    return PROJECTS.find((p: Project) => p.id === id) as Project;
  }
}
