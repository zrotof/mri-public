import { Component, ViewEncapsulation } from '@angular/core';
import { Carousel, CarouselModule } from 'primeng/carousel';
import { GsapSplitTextFadeInScrollTriggerDirective } from '../../../../shared/directives/gsap-split-text-fade-in-scroll-trigger/gsap-split-text-fade-in-scroll-trigger.directive';

export interface SupplierBrand {
  name: string;
  category: string;
  image: string;
}

@Component({
  selector: 'app-home-supplier-carousel',
  templateUrl: './home-supplier-carousel.component.html',
  styleUrl: './home-supplier-carousel.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    CarouselModule,
    GsapSplitTextFadeInScrollTriggerDirective
  ]
})
export class HomeSupplierCarouselComponent {

  protected readonly responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 5,
      numScroll: 1
    },
    {
      breakpoint: '1100px',
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '540px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '380px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  protected readonly suppliers: SupplierBrand[] = [
    {
      name: 'Legrand',
      category: 'Électricité & Domotique',
      image: 'images/home/suppliers/logo-legrand.svg'
    },
    {
      name: 'Schneider Electric',
      category: 'Tableaux & Gestion d\'Énergie',
      image: 'images/home/suppliers/logo-schneider.svg'
    },
    {
      name: 'Bosch Professional',
      category: 'Outillage Électroportatif Pro',
      image: 'images/home/suppliers/logo-bosch.svg'
    },
    {
      name: 'Makita',
      category: 'Outillage Pro de Chantier',
      image: 'images/home/suppliers/logo-makita.svg'
    },
    {
      name: 'Grohe',
      category: 'Robinetterie & Sanitaires',
      image: 'images/home/suppliers/logo-grohe.svg'
    },
    {
      name: 'Geberit',
      category: 'Bâti-supports & Évacuation',
      image: 'images/home/suppliers/logo-geberit.svg'
    },
    {
      name: 'Saint-Gobain',
      category: 'Matériaux de Construction',
      image: 'images/home/suppliers/logo-saint-gobain.svg'
    },
    {
      name: 'Placo',
      category: 'Cloisons & Plafonds',
      image: 'images/home/suppliers/logo-placo.svg'
    },
    {
      name: 'Tollens',
      category: 'Peintures & Finitions',
      image: 'images/home/suppliers/logo-tollens.svg'
    },
    {
      name: 'Sika',
      category: 'Étanchéité & Mortiers',
      image: 'images/home/suppliers/logo-sika.svg'
    },
    {
      name: 'Porcelanosa',
      category: 'Carrelages & Céramiques',
      image: 'images/home/suppliers/logo-porcelanosa.svg'
    },
    {
      name: 'Knauf',
      category: 'Isolation Thermique & Phonique',
      image: 'images/home/suppliers/logo-knauf.svg'
    }
  ];

  constructor() {
    Carousel.prototype.onTouchMove = () => { };
  }
}
