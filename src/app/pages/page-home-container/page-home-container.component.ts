import { Component } from '@angular/core';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { HeroImageCarouselComponent } from './components/hero-image-carousel/hero-image-carousel.component';
import { HomeSupplierCarouselComponent } from './components/home-supplier-carousel/home-supplier-carousel.component';
import { HomeAboutUsComponent } from './components/home-about-us/home-about-us.component';
import { HomeLatestWorksComponent } from './components/home-latest-works/home-latest-works.component';
import { HomeCustomerTestimoniesComponent } from './components/home-customer-testimonies/home-customer-testimonies.component';

@Component({
  selector: 'app-page-home-container',
  templateUrl: './page-home-container.component.html',
  styleUrl: './page-home-container.component.scss',
  imports: [
    HeroBannerComponent,
    HeroImageCarouselComponent,
    //HomeSupplierCarouselComponent,
    HomeAboutUsComponent,
    HomeLatestWorksComponent,
    HomeCustomerTestimoniesComponent
  ]
})

export class PageHomeContainerComponent {

}
