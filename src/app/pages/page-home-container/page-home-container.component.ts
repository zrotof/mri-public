import { Component } from '@angular/core';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { HomeSupplierCarouselComponent } from './components/home-supplier-carousel/home-supplier-carousel.component';
import { HomeAboutUsComponent } from './components/home-about-us/home-about-us.component';
import { HomeCustomerTestimoniesComponent } from './components/home-customer-testimonies/home-customer-testimonies.component';
import { CotationBannerComponent } from '../../shared/components/cotation-banner/cotation-banner.component';
import { HomeLatestWorksComponent } from './components/home-latest-works/home-latest-works.component';
import { HomeFaqComponent } from './components/home-faq/home-faq.component';

@Component({
  selector: 'app-page-home-container',
  templateUrl: './page-home-container.component.html',
  styleUrl: './page-home-container.component.scss',
  imports: [
    HeroBannerComponent,
    HomeLatestWorksComponent,
    HomeSupplierCarouselComponent,
    HomeAboutUsComponent,
    CotationBannerComponent,
    HomeCustomerTestimoniesComponent,
    HomeFaqComponent
  ]
})

export class PageHomeContainerComponent {

}
