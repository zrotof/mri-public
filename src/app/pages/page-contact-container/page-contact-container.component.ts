import { Component } from '@angular/core';
import { FormContactDataComponent } from './components/form-contact-data/form-contact-data.component';
import { ContactHeroComponent } from './components/contact-hero/contact-hero.component';
import { RoadMapProcessComponent } from '../../shared/components/road-map-process/road-map-process.component';
import { CotationBannerComponent } from '../../shared/components/cotation-banner/cotation-banner.component';

@Component({
  selector: 'app-page-contact-container',
  standalone: true,
  templateUrl: './page-contact-container.component.html',
  styleUrl: './page-contact-container.component.scss',
  imports: [
    ContactHeroComponent,
    FormContactDataComponent,
    CotationBannerComponent,
    RoadMapProcessComponent
  ]
})

export class PageContactContainerComponent {

}
