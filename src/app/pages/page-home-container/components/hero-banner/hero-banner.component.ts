import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CotationFormComponent } from '../../../../shared/components/cotation-form/cotation-form.component';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [DialogService],
  imports: [
    NgOptimizedImage
  ]
})

export class HeroBannerComponent implements AfterViewInit {

  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID))
  private dialogservice = inject(DialogService);

  ref: DynamicDialogRef | undefined;

  private titleTween!: gsap.core.Tween;

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    this.initHeroAnimation();
  }

  initHeroAnimation() {

    const titleEl = document.querySelector("h1");

    let titleSplit = SplitText.create(titleEl, {
      type: 'lines',
      mask: "lines"
    })

    gsap.timeline()
      .from(titleSplit.lines, {
        y: 60,
        stagger: 0.3,
        duration: 0.7,
      })
      .from("h2",
        {
          y: 30,
          opacity: 0,
          duration: 1
        },
        "-=0.2"
      )
      .from(".btn",
        {
          y: 30,
          opacity: 0,
          backgroundColor: "#6d9907",
          ease: "back",
          scale: 0
        }
      )
  }

  onOpenCotationRequest(){
    this.dialogservice.open(
      CotationFormComponent, {
        header: "Obtenez un devis de vos travaux 100% gratuit",
        modal:true,
        baseZIndex: 100,
        closable: true,
        styleClass: "cotation-form",
        width: "38rem",
      }
    )
  }
}
