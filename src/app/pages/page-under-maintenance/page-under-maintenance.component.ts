import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, inject, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
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

  protected readonly networks = NETWORKS;
  private tl : gsap.core.Timeline = gsap.timeline();

  @ViewChild('maintenanceContainer', { static: true }) maintenanceContainer!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    setTimeout(() => {
      this.initAnimation();
    }, 0)
  }

  initAnimation() {

    const loaderEl = this.maintenanceContainer.nativeElement;
    const titleEl = loaderEl.querySelector("h1");
    const pEl = loaderEl.querySelector("p");

    let titleSplit = SplitText.create(titleEl, {
      type: 'words',
      mask: "words"
    })

    let pSplit = SplitText.create(pEl, {
      type: 'lines',
      mask: "lines"
    })

    this.tl.set(loaderEl, { opacity: 1, visibility: 'visible' });

    this.tl
      .from(loaderEl.querySelector(".logo"), {
        scale: 2.5,
        duration: 1,
        delay: 0.3,
        opacity: 0,
        ease: "power1.inOut"
      })
      .from(loaderEl.querySelector(".image img"), {
        left: -100,
        duration: 2,
        opacity: 0,
        ease: "power1.inOut"
      }, "-=0.7")

      .from(titleSplit.words, {
        textAlign: "center",
        y: 60,
        stagger: 0.3,
        duration: 0.7,
        opacity: 0,

      }, "-=0.9")

      .from(pSplit.lines,
        {
          y: 30,
          opacity: 0,
          stagger: 0.2,
          duration: 0.7,
        }
      )
      .from(loaderEl.querySelector(".explain"),
        {
          y: 30,
          opacity: 0,
        },
        "-=0.2"
      )
      .from(loaderEl.querySelectorAll(".contact p"),
        {
          y: 30,
          opacity: 0,
        },
        "-=0.2"
      )
      .from(loaderEl.querySelectorAll(".contact ul li"),
        {
          y: 30,
          opacity: 0,
          stagger: 0.3,
          duration: 0.7,
        },
        "-=0.2"
      )

      .from(loaderEl.querySelectorAll(".network"),
        {
          x: -30,
          duration: 0.7,
          opacity: 0
        },
        "-=0.2"
      )

      .from(loaderEl.querySelector(".square"),
        {
          y: 30,
          duration: 0.7,
          ease: "back",
          scale: 0
        },
        "-=0.2"
      )
  }
}
