import { AfterViewInit, Component, ElementRef, inject, NgZone, PLATFORM_ID, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../../../core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';

import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

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
export class HeroImageCarouselComponent implements AfterViewInit {

  private ngZone = inject(NgZone);
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID))
  @ViewChild('carouselContainer', { static: true }) carouselContainer!: ElementRef<HTMLDivElement>;

  private galleryTween !: gsap.core.Tween;

  private draggable !: Draggable;

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


  slidesPerView = 1;

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.updateSlidesPerView();
      //this.cloneSlidesForLoop();
      this.initGalleryAnimation();
      this.initDraggable();

      new ResizeObserver(() => {
        this.updateSlidesPerView();
        this.restartGalleryAnimation();
        this.draggable.update();
      }).observe(this.carouselContainer.nativeElement);
    }
  }

  private updateSlidesPerView() {
    if (this.isBrowser) {
      const width = window.innerWidth;

      if (width < 600) this.slidesPerView = 1;
      else if (width < 992) this.slidesPerView = 2;
      else this.slidesPerView = 3;
    }
  }

  private cloneSlidesForLoop() {
    const trackEl = this.carouselContainer.nativeElement;
    const slides = Array.from(trackEl.children) as HTMLElement[];
    slides.forEach(slide => {
      const clone = slide.cloneNode(true);
      trackEl.appendChild(clone);
    });
  }

  private initGalleryAnimation() {
    const trackEl = this.carouselContainer.nativeElement;
    const totalWidth = trackEl.scrollWidth / 2;

    if (this.galleryTween) this.galleryTween.kill();

    this.ngZone.runOutsideAngular(() => {
      this.galleryTween = gsap.to(trackEl, {
        x: -totalWidth,
        ease: 'none',
        duration: totalWidth / 20,
        repeat: -1,

      })
    })
  }

  pauseGallery() {
    this.galleryTween?.pause()
  }

  resumeGallery() {
    this.galleryTween?.resume()
  }

  nextWork() {
    this.pauseGallery();
    const slideWidth = this.getSlideWidth();
    gsap.to(this.carouselContainer.nativeElement, {
      x: `-=${slideWidth}`,
      duration: 0.5,
      ease: 'power2.inOut',
      onComplete: () => this.restartGalleryAnimation()
    })
  }

  prevWork() {
    this.pauseGallery();
    const slideWidth = this.getSlideWidth();
    gsap.to(this.carouselContainer.nativeElement, {
      x: `+=${slideWidth}`,
      duration: 0.5,
      ease: 'power2.inOut',
      onComplete: () => this.restartGalleryAnimation()
    })
  }

  private getSlideWidth() {
    const slide = this.carouselContainer.nativeElement.querySelector('.image-wrapper') as HTMLElement;
    return slide ? slide.offsetWidth + 16 : 310;
  }

  private initDraggable() {
    const trackEl = this.carouselContainer.nativeElement;
    this.draggable = Draggable.create(trackEl, {
      type: 'x',
      edgeResistance: 0.8,
      inertia: false,
      onPress: () => this.pauseGallery(),
      onRelease: () => {
        this.restartGalleryAnimation();
        this.resumeGallery();
      },
      snap: {
        x: (endValue: number) => {
          return Math.round(endValue / this.getSlideWidth()) * this.getSlideWidth();
        }
      }
    })[0]
  }

  private restartGalleryAnimation() {
    this.initGalleryAnimation()
  }

  onItemChoosed(index : number){
    console.log(index);
  }

  ngOnDestroy(): void {
    this.galleryTween?.kill();
    this.draggable?.kill();
  }
}
