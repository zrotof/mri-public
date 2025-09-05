import { Component } from '@angular/core';
import { WorkListComponent } from './components/work-list/work-list.component';

@Component({
  selector: 'app-page-our-works-container',
  templateUrl: './page-our-works-container.component.html',
  styleUrl: './page-our-works-container.component.scss',
  imports: [
    WorkListComponent
  ]
})

export class PageOurWorksContainerComponent {

}
