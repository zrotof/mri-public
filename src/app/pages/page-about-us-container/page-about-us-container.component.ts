import { Component } from '@angular/core';
import { AboutHeroBannerComponent } from './components/about-hero-banner/about-hero-banner.component';
import { AboutOurServicesComponent } from './components/about-our-services/about-our-services.component';
import { AboutQuotationComponent } from './components/about-quotation/about-quotation.component';
import { AboutOurTeamsComponent } from './components/about-our-teams/about-our-teams.component';
import { AboutMoreComponent } from "./components/about-more/about-more.component";
import { AboutWorkProcessComponent } from "./components/about-work-process/about-work-process.component";

@Component({
  selector: 'app-page-about-us-container',
  templateUrl: './page-about-us-container.component.html',
  styleUrl: './page-about-us-container.component.scss',
  imports: [
    AboutHeroBannerComponent,
    AboutOurServicesComponent,
    AboutQuotationComponent,
    AboutWorkProcessComponent,
    AboutOurTeamsComponent,
    AboutMoreComponent,
]
})

export class PageAboutUsContainerComponent {}
