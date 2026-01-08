import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, inject, NgZone, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

import { NETWORKS } from '../../shared/constants/networks.constant';

gsap.registerPlugin(SplitText);

@Component({
  selector: 'app-page-under-maintenance',
  templateUrl: './page-under-maintenance.component.html',
  styleUrl: './page-under-maintenance.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgOptimizedImage,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ]
})

export class PageUnderMaintenanceComponent {
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID))
  private readonly ngZone = inject(NgZone);

  private ctx ?: gsap.Context;

  protected readonly networks = NETWORKS;

  @ViewChild('maintenanceContainer') maintenanceContainer!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    this.ngZone.runOutsideAngular(() => {
      this.initAnimation();
    })
  }

  private initAnimation() {
    const loaderEl = this.maintenanceContainer.nativeElement;

    this.ctx = gsap.context((self) => {
      gsap.set(loaderEl, { autoAlpha: 1 });
      const q = self.selector!;

      let titleSplit = new SplitText(q("h1"), {
        type: 'words',
        mask: 'words'
      })

      const tl = gsap.timeline({
        onComplete: () => {
          titleSplit.revert();
        }
      });

      tl
        .from(q(".logo"), {
          scale: 2.5,
          duration: 1,
          delay: 0.3,
          opacity: 0,
          ease: "power1.inOut"
        })
        .from(q(".image img"), {
          x: -100,
          duration: 2,
          opacity: 0,
          ease: "power1.inOut"
        }, "-=0.7")

        .from(titleSplit.words, {
          y: 80,
          stagger: 0.3,
          duration: 0.7,
          opacity: 0,

        }, "-=0.9")
        .from(q(".explain"),
          {
            y: 30,
            opacity: 0,
          },
          "-=0.2"
        )
        .from(q(".contact p"),
          {
            y: 30,
            opacity: 0,
          },
          "-=0.2"
        )
        .from(q(".contact ul li"),
          {
            y: 30,
            opacity: 0,
            stagger: 0.3,
            duration: 0.7,
          },
          "-=0.2"
        )

        .from(q(".network"),
          {
            x: -30,
            duration: 0.7,
            opacity: 0
          },
          "-=0.2"
        )

        .from(q(".square"),
          {
            y: 30,
            duration: 0.7,
            ease: "back",
            scale: 0
          },
          "-=0.2"
        )
    }, loaderEl)
  }

  ngOnDestroy(): void {
    this.ctx?.revert();
  }
}
