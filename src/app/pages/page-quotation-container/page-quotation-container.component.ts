import { Component } from '@angular/core';
import { QuotationHeroBannerComponent } from './components/quotation-hero-banner/quotation-hero-banner.component';
import { RoadMapProcessComponent } from './components/road-map-process/road-map-process.component';

@Component({
  selector: 'app-page-quotation-container',
  templateUrl: './page-quotation-container.component.html',
  styleUrl: './page-quotation-container.component.scss',
  imports: [
    QuotationHeroBannerComponent,
    RoadMapProcessComponent
  ]
})
export class PageQuotationContainerComponent {

}
