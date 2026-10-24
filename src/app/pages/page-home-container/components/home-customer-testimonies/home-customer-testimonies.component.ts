import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../../../core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home-customer-testimonies',
  templateUrl: './home-customer-testimonies.component.html',
  styleUrl: './home-customer-testimonies.component.scss',
  imports: [
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe,
    NgOptimizedImage
  ]
})
export class HomeCustomerTestimoniesComponent {

  testimonials = [
    {
      image: "images/home/hero-carousel/maison.jpg",
      title: "Transformation réussie de notre appartement",
      message: "Grâce à MA RÉNOVATION IMMOBILIÈRE, notre vieil appartement a été transformé en un espace moderne et sécurisé. La rénovation de la plomberie et de l'électricité a été menée avec un grand professionnalisme, et l'équipe a su résoudre tous les imprévus. Nous sommes très satisfaits du résultat et de la fluidité de la communication.",
      clientName: "Madame Dubois",
      clientCompany: null,
      isCompany: false
    },
    {
      image: "images/home/hero-carousel/maison-4.jpg",
      title: "Une extension qui a changé notre quotidien",
      message: "L'agrandissement de notre maison a été un projet complexe, mais l'équipe de MA RÉNOVATION IMMOBILIÈRE a su relever le défi avec brio. Le respect des délais et le souci du détail ont été impressionnants. Notre nouvelle aile s'intègre parfaitement à la maison, et nous avons désormais l'espace dont nous rêvions.",
      clientName: "Monsieur et Madame Lacroix",
      clientCompany: null,
      isCompany: false
    },
    {
      image: "images/home/hero-carousel/maison-5.webp",
      title: "Des espaces de vie à la fois beaux et fonctionnels",
      message: "Nous sommes ravis de notre nouvelle cuisine et de notre salle de bains. Les conseils de MA RÉNOVATION IMMOBILIÈRE ont été précieux pour optimiser chaque recoin. Le résultat est non seulement magnifique, mais aussi parfaitement adapté à notre mode de vie. Une équipe à l'écoute et très compétente.",
      clientName: "Monsieur et Madame Lefèvre",
      clientCompany: null,
      isCompany: false
    },
    {
      image: "images/home/hero-carousel/maison-2.jpg",
      title: "Un chantier mené avec rigueur et efficacité",
      message: "Nous avions besoin de rénover la toiture de notre bâtiment commercial pour garantir sa durabilité. L'équipe a fait preuve d'une grande rigueur. La rapidité des travaux et la qualité des finitions sont impeccables. Nous recommandons vivement leurs services.",
      clientName: "Jérôme Martel",
      clientCompany: "Boulangerie 'Le Pain Quotidien'",
      isCompany: true
    },
    {
      image: "images/home/hero-carousel/maison-3.webp",
      title: "Modernisation de nos bureaux en un temps record",
      message: "La rénovation de nos sols et murs était cruciale pour moderniser nos bureaux sans impacter notre activité. MA RÉNOVATION IMMOBILIÈRE a réalisé un travail remarquable, en respectant nos contraintes de temps. Le résultat est élégant et a redonné un coup de jeune à nos locaux.",
      clientName: "Sophie Bernard",
      clientCompany: "Agence de communication 'Créa & Co'",
      isCompany: true
    }
  ];

  currentTestimonyIndex = 0;
  currentTestimony = this.testimonials[this.currentTestimonyIndex];
  animDirection: 'next' | 'prev' | null = null;

  // Swipe / Drag gesture state
  touchStartX = 0;
  touchStartY = 0;
  dragOffset = 0;
  isDragging = false;
  private isHorizontalSwipe = false;

  goToTestimony(index: number): void {
    if (index === this.currentTestimonyIndex) return;
    this.animDirection = index > this.currentTestimonyIndex ? 'next' : 'prev';
    this.currentTestimonyIndex = index;
    this.currentTestimony = this.testimonials[this.currentTestimonyIndex];
  }

  onPrevOrNextTestimony(navigationWay: number): void {
    this.animDirection = navigationWay === 1 ? 'next' : 'prev';
    if (this.currentTestimonyIndex === 0 && navigationWay === -1) {
      this.currentTestimonyIndex = this.testimonials.length - 1;
    } else if (this.currentTestimonyIndex === this.testimonials.length - 1 && navigationWay === 1) {
      this.currentTestimonyIndex = 0;
    } else {
      this.currentTestimonyIndex += navigationWay;
    }
    this.currentTestimony = this.testimonials[this.currentTestimonyIndex];
  }

  onAnimationEnd(): void {
    this.animDirection = null;
  }

  // Touch event handlers (Mobile / Tablet)
  onTouchStart(e: TouchEvent): void {
    if (e.touches.length !== 1) return;
    this.touchStartX = e.touches[0].clientX;
    this.touchStartY = e.touches[0].clientY;
    this.dragOffset = 0;
    this.isDragging = true;
    this.isHorizontalSwipe = false;
  }

  onTouchMove(e: TouchEvent): void {
    if (!this.isDragging || e.touches.length !== 1) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const deltaX = currentX - this.touchStartX;
    const deltaY = currentY - this.touchStartY;

    if (!this.isHorizontalSwipe) {
      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 8) {
        // Vertical scroll dominant -> do not interfere
        this.isDragging = false;
        this.dragOffset = 0;
        return;
      }
      if (Math.abs(deltaX) > 8) {
        this.isHorizontalSwipe = true;
      }
    }

    if (this.isHorizontalSwipe) {
      this.dragOffset = Math.max(-90, Math.min(90, deltaX));
    }
  }

  onTouchEnd(): void {
    if (!this.isDragging && !this.isHorizontalSwipe) return;
    this.finalizeSwipe();
  }

  onTouchCancel(): void {
    this.isDragging = false;
    this.isHorizontalSwipe = false;
    this.dragOffset = 0;
  }

  // Pointer / Mouse drag handlers (Desktop)
  onPointerDown(e: PointerEvent): void {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    this.touchStartX = e.clientX;
    this.touchStartY = e.clientY;
    this.dragOffset = 0;
    this.isDragging = true;
    this.isHorizontalSwipe = false;
  }

  onPointerMove(e: PointerEvent): void {
    if (!this.isDragging) return;
    const deltaX = e.clientX - this.touchStartX;
    const deltaY = e.clientY - this.touchStartY;

    if (!this.isHorizontalSwipe) {
      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 8) {
        this.isDragging = false;
        this.dragOffset = 0;
        return;
      }
      if (Math.abs(deltaX) > 8) {
        this.isHorizontalSwipe = true;
      }
    }

    if (this.isHorizontalSwipe) {
      this.dragOffset = Math.max(-90, Math.min(90, deltaX));
    }
  }

  onPointerUp(): void {
    if (!this.isDragging && !this.isHorizontalSwipe) return;
    this.finalizeSwipe();
  }

  onPointerCancel(): void {
    this.isDragging = false;
    this.isHorizontalSwipe = false;
    this.dragOffset = 0;
  }

  private finalizeSwipe(): void {
    const threshold = 40;
    if (this.dragOffset < -threshold) {
      this.onPrevOrNextTestimony(1);
    } else if (this.dragOffset > threshold) {
      this.onPrevOrNextTestimony(-1);
    }
    this.isDragging = false;
    this.isHorizontalSwipe = false;
    this.dragOffset = 0;
  }
}
