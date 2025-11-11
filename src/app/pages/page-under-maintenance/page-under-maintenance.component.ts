import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

@Component({
  selector: 'app-page-under-maintenance',
  templateUrl: './page-under-maintenance.component.html',
  styleUrl: './page-under-maintenance.component.scss',
  imports: [
    NgOptimizedImage,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ]
})

export class PageUnderMaintenanceComponent {
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID))

  @ViewChild('maintenanceContainer', { static: false }) maintenanceContainer!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    this.initAnimation();
  }

  initAnimation() {

    const titleEl = document.querySelector("h1");
    const pEl = this.maintenanceContainer.nativeElement.querySelector("p");

    let titleSplit = SplitText.create(titleEl, {
      type: 'words',
      mask: "words"
    })

    let pSplit = SplitText.create(pEl, {
      type: 'lines',
      mask: "lines"
    })

    gsap.timeline()
      .from(this.maintenanceContainer.nativeElement.querySelector(".image"), {
        left: -100,
        duration: 2,
        opacity: 0,
        ease: "power1.inOut"
      })
      .from(this.maintenanceContainer.nativeElement.querySelector(".logo"), {
        scale: 2.5,
        duration: 1,
        opacity: 0
      },"<")
      .from(titleSplit.words, {
        textAlign: "center",
        y: 60,
        stagger: 0.3,
        duration: 0.7,
      }, "-=0.2")
      .from(pSplit.lines,
        {
          y: 30,
          opacity: 0,
          stagger: 0.2,
          duration: 0.7,
        }
      )
      .from(this.maintenanceContainer.nativeElement.querySelectorAll(".contact p"),
        {
          y: 30,
          opacity: 0,
        },
        "-=0.2"
      )
      .from(this.maintenanceContainer.nativeElement.querySelectorAll(".contact ul li"),
        {
          y: 30,
          opacity: 0,
          stagger: 0.3,
          duration: 0.7,
        },
        "-=0.2"
      )
  }
}
