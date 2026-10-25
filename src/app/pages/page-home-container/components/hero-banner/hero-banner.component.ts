import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
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

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    try {
      this.initHeroAnimation();
    } catch (err) {
      const contentEl = this.heroContent?.nativeElement || document.querySelector('.hero-banner .content');
      const btnEl = this.heroBtn?.nativeElement || document.querySelector('.hero-banner .btn');
      const socialIcons = contentEl?.querySelectorAll('.hero-socials .social-icon');
      if (contentEl) gsap.set(contentEl, { visibility: 'visible' });
      if (btnEl) gsap.set(btnEl, { opacity: 1, scale: 1, clearProps: 'all' });
      if (socialIcons) gsap.set(socialIcons, { opacity: 1, scale: 1, clearProps: 'all' });
    }
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
      titleSplit = new SplitText(titleEl, {
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
        ease: 'power2.out'
      });
    } else {
      tl.from(titleEl, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out'
      });
    }

    if (subtitleEl) {
      tl.fromTo(subtitleEl,
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: 'power2.out',
          clearProps: 'transform,opacity'
        },
        '-=0.3'
      );
    }

    if (btnEl) {
      tl.fromTo(btnEl,
        {
          y: 25,
          opacity: 0,
          scale: 0.85
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          clearProps: 'transform,opacity'
        },
        '-=0.2'
      );
    }

    if (socialIcons && socialIcons.length) {
      tl.fromTo(socialIcons,
        {
          y: 25,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'back.out(1.7)',
          clearProps: 'transform,opacity'
        },
        btnEl ? '<' : '-=0.2'
      );
    }
  }
}
