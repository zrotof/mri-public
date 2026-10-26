import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, NgZone, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../../../core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

gsap.registerPlugin(SplitText);

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgOptimizedImage,
    RouterLink,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ]
})
export class HeroBannerComponent implements AfterViewInit {

  @ViewChild('heroContent') heroContent!: ElementRef<HTMLElement>;
  @ViewChild('heroTitle') heroTitle!: ElementRef<HTMLElement>;
  @ViewChild('heroSubtitle') heroSubtitle!: ElementRef<HTMLElement>;
  @ViewChild('heroBtn') heroBtn!: ElementRef<HTMLElement>;

  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private ngZone = inject(NgZone);

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    this.ngZone.runOutsideAngular(() => {
      requestAnimationFrame(() => {
        try {
          this.initHeroAnimation();
        } catch (err) {
          console.warn('Hero animation fallback:', err);
          const contentEl = this.heroContent?.nativeElement || document.querySelector('.hero-banner .content');
          const btnEl = this.heroBtn?.nativeElement || document.querySelector('.hero-banner .btn');
          const socialIcons = contentEl?.querySelectorAll('.hero-socials .social-icon');
          if (contentEl) gsap.set(contentEl, { visibility: 'visible' });
          if (btnEl) gsap.set(btnEl, { opacity: 1, scale: 1, clearProps: 'all' });
          if (socialIcons) gsap.set(socialIcons, { opacity: 1, scale: 1, clearProps: 'all' });
        }
      });
    });
  }

  initHeroAnimation() {
    const contentEl = this.heroContent?.nativeElement || document.querySelector('.hero-banner .content');
    const titleEl = this.heroTitle?.nativeElement || document.querySelector('.hero-banner h1');
    const subtitleEl = this.heroSubtitle?.nativeElement || document.querySelector('.hero-banner h2');
    const btnEl = this.heroBtn?.nativeElement || document.querySelector('.hero-banner .btn');
    const socialIcons = contentEl?.querySelectorAll('.hero-socials .social-icon');

    if (!contentEl || !titleEl) return;

    // Révèle le conteneur de façon synchrone dans la même frame que le démarrage de la timeline GSAP
    gsap.set(contentEl, { visibility: 'visible' });

    let titleSplit: SplitText | null = null;
    try {
      titleSplit = SplitText.create(titleEl, {
        type: 'lines',
        mask: 'lines'
      });
    } catch {
      titleSplit = null;
    }

    const tl = gsap.timeline();

    if (titleSplit && titleSplit.lines?.length) {
      tl.from(titleSplit.lines, {
        y: 60,
        stagger: 0.25,
        duration: 0.7,
        ease: 'power2.out',
        clearProps: 'transform,opacity'
      });
    } else {
      tl.fromTo(titleEl, {
        y: 40,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power2.out',
        clearProps: 'transform,opacity'
      });
    }

    if (subtitleEl) {
      tl.fromTo(subtitleEl, {
        y: 30,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        clearProps: 'transform,opacity'
      }, '-=0.2');
    }

    if (btnEl) {
      tl.fromTo(btnEl, {
        y: 25,
        opacity: 0,
        scale: 0
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.7)',
        clearProps: 'transform,opacity'
      }, '-=0.2');
    }

    if (socialIcons && socialIcons.length) {
      tl.fromTo(socialIcons, {
        y: 20,
        opacity: 0,
        scale: 0
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.08,
        duration: 0.5,
        ease: 'back.out(1.7)',
        clearProps: 'transform,opacity'
      }, '<');
    }
  }
}
