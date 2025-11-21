import { Component, inject } from '@angular/core';
import { WorkListComponent } from './components/work-list/work-list.component';
import { WorksHeroComponent } from './components/works-hero/works-hero.component';
import { ProjectService } from '../../core/services/project/project.service';

@Component({
  selector: 'app-page-our-works-container',
  templateUrl: './page-our-works-container.component.html',
  styleUrl: './page-our-works-container.component.scss',
  imports: [
    WorksHeroComponent,
    WorkListComponent
  ]
})

export class PageOurWorksContainerComponent {

  private projectService = inject(ProjectService);

  protected readonly projects = this.projectService.getProjectsSummary();
}
