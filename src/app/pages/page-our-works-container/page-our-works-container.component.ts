import { Component, inject } from '@angular/core';
import { WorkListComponent } from './components/work-list/work-list.component';
import { WorksHeroComponent } from './components/works-hero/works-hero.component';
import { ProjectService } from '../../core/services/project/project.service';

import { CotationBannerComponent } from '../../shared/components/cotation-banner/cotation-banner.component';

@Component({
  selector: 'app-page-our-works-container',
  templateUrl: './page-our-works-container.component.html',
  styleUrl: './page-our-works-container.component.scss',
  imports: [
    WorksHeroComponent,
    WorkListComponent,
    CotationBannerComponent
  ]
})

export class PageOurWorksContainerComponent {

  private projectService = inject(ProjectService);

  protected readonly projects = this.projectService.getProjectsSummary();
}
