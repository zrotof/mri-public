import { NgOptimizedImage } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { Carousel, CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-home-supplier-carousel',
  templateUrl: './home-supplier-carousel.component.html',
  styleUrl: './home-supplier-carousel.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgOptimizedImage,
    CarouselModule
  ]
})

export class HomeSupplierCarouselComponent {

  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
    }
  ]

  images = [
    "images/home/suppliers/Logo-legrand-fournisseur-ma-renovation-immobiliere.png",
    "images/home/suppliers/Logo-legrand-fournisseur-ma-renovation-immobiliere.png",
    "images/home/suppliers/Logo-legrand-fournisseur-ma-renovation-immobiliere.png",
    "images/home/suppliers/Logo-legrand-fournisseur-ma-renovation-immobiliere.png",
    "images/home/suppliers/Logo-legrand-fournisseur-ma-renovation-immobiliere.png",
    "images/home/suppliers/Logo-legrand-fournisseur-ma-renovation-immobiliere.png",
    "images/home/suppliers/Logo-legrand-fournisseur-ma-renovation-immobiliere.png",
    "images/home/suppliers/Logo-legrand-fournisseur-ma-renovation-immobiliere.png"
  ]

  constructor() {
    Carousel.prototype.onTouchMove = () => { };
  }
}
