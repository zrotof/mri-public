import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, inject, input, NgZone, PLATFORM_ID, OnDestroy } from '@angular/core';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[appGsapBlockFadeInScrollTrigger]',
  standalone: true,
  host: {
    '[style.opacity]': '"0"'
  }
})
export class GsapBlockFadeInScrollTriggerDirective implements AfterViewInit, OnDestroy {

  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private el = inject(ElementRef);
  private ngZone = inject(NgZone);

  duration = input<number>(0.8);
  opacity = input<number>(0);
  delay = input<number>(0);
  y = input<number>(40);
  scale = input<number>(1);
  ease = input<string>('power2.out');
  start = input<string>('top 95%');

  private trigger?: ScrollTrigger;

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          this.initAnimation();
        }, 0);
      });
    }
  }

  initAnimation(): void {
    const element = this.el.nativeElement;

    // Reset host opacity style and initialize GSAP starting state
    element.style.opacity = '1';
    gsap.set(element, {
      opacity: this.opacity(),
      y: this.y(),
      scale: this.scale()
    });

    this.trigger = ScrollTrigger.create({
      trigger: element,
      start: this.start(),
      toggleActions: 'play none none reverse',
      animation: gsap.to(element, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: this.duration(),
        delay: this.delay(),
        ease: this.ease()
      })
    });
  }

  ngOnDestroy(): void {
    this.trigger?.kill();
  }
}
