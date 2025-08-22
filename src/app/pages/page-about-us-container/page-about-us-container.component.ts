import { Component } from '@angular/core';
import { AboutHeroBannerComponent } from './components/about-hero-banner/about-hero-banner.component';
import { AboutOurServicesComponent } from './components/about-our-services/about-our-services.component';
import { AboutQuotationComponent } from './components/about-quotation/about-quotation.component';
import { AboutOurTeamsComponent } from './components/about-our-teams/about-our-teams.component';

@Component({
  selector: 'app-page-about-us-container',
  templateUrl: './page-about-us-container.component.html',
  styleUrl: './page-about-us-container.component.scss',
  imports: [
    AboutHeroBannerComponent,
    AboutOurServicesComponent,
    AboutQuotationComponent,
    AboutOurTeamsComponent
  ]
})

export class PageAboutUsContainerComponent {

}
