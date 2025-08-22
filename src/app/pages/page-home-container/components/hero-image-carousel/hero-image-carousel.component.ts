import { Component, ElementRef, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../../../core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero-image-carousel',
  templateUrl: './hero-image-carousel.component.html',
  styleUrl: './hero-image-carousel.component.scss',
  imports: [
    NgOptimizedImage,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ],
})
export class HeroImageCarouselComponent {

  @ViewChild('carouselContainer', { static: true }) carouselContainer!: ElementRef;

  // Tableau de vos images à afficher
  // Pour une boucle infinie, les 3 premières images sont dupliquées
  images = [
    {
      name: "images/home/hero-carousel/maison.jpg",
      alt: ""
    },
    {
      name: "images/home/hero-carousel/maison-4.jpg",
      alt: ""
    },
    {
      name: "images/home/hero-carousel/maison-5.webp",
      alt: ""
    },
    {
      name: "images/home/hero-carousel/maison-2.jpg",
      alt: ""
    },
    {
      name: "images/home/hero-carousel/maison-3.webp",
      alt: ""
    },
    {
      name: "images/home/hero-carousel/maison-6.jpg",
      alt: ""
    }
  ];

  isPaused = false;
  private animationTimeout!: any;

  constructor() { }

  ngOnInit(): void {
    this.startAnimation();
  }

  ngOnDestroy(): void {
    this.stopAnimation();
  }

  startAnimation(): void {
    this.isPaused = false;
    this.carouselContainer.nativeElement.style.animationPlayState = 'running';
  }

  stopAnimation(): void {
    this.isPaused = true;
    clearTimeout(this.animationTimeout);
    this.carouselContainer.nativeElement.style.animationPlayState = 'paused';
  }

  // Défilement manuel
  move(direction: 'left' | 'right'): void {
    this.stopAnimation();
    const container = this.carouselContainer.nativeElement;
    const scrollAmount = container.children[0].offsetWidth + 16; // Largeur image + gap

    if (direction === 'left') {
      container.scrollLeft += scrollAmount;
    } else {
      container.scrollLeft -= scrollAmount;
    }

    // Reprend l'animation après un court délai
    this.animationTimeout = setTimeout(() => {
      this.startAnimation();
    }, 5000); // 5 secondes pour laisser à l'utilisateur le temps de voir
  }
}
