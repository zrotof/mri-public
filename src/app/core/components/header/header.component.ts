import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, HostListener, inject, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { DialogService } from 'primeng/dynamicdialog';
import { CotationFormComponent } from '../../../shared/components/cotation-form/cotation-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [DialogService],
  imports: [
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ]
})

export class HeaderComponent {
  private dialogservice = inject(DialogService);

  @ViewChild('header') header !: ElementRef<HTMLElement>;

  private _renderer = inject(Renderer2);
  private router = inject(Router);

  backgroundedHeader !: boolean;

  ngOnInit(): void {
    this.onRoutingEvent();
  }

  //On routing event we, if we are on small screen, we toggle the menu to disapear from the screen after we click on a link
  onRoutingEvent(): void {
    this.router.events.subscribe({
      next: (event) => {
        if (event instanceof ActivationEnd) {
          if (event.snapshot.component) {
            this.backgroundedHeader = event.snapshot.data['backgrounded']

            if (this.backgroundedHeader) {
              this._renderer.addClass(this.header.nativeElement, 'navbar-background-on-scroll');
            } else {
              this._renderer.removeClass(this.header.nativeElement, 'navbar-background-on-scroll');
            }
          }
        }
      }
    })
  }

  @HostListener('window:scroll')
  onWindowScroll() {

    if (this.backgroundedHeader) {
      this._renderer.addClass(this.header.nativeElement, 'navbar-background-on-scroll');
    }
    else {
      if (window.pageYOffset > this.header.nativeElement?.clientHeight) {
        this._renderer.addClass(this.header.nativeElement, 'navbar-background-on-scroll');
      }
      else {
        this._renderer.removeClass(this.header.nativeElement, 'navbar-background-on-scroll');
      }
    }
  }

  onOpenCotationRequest() {
    this.dialogservice.open(
      CotationFormComponent, {
      header: "Obtenez un devis de vos travaux 100% gratuit",
      modal: true,
      baseZIndex: 100,
      closable: true,
      styleClass: "cotation-form",
      width: "38rem",
    }
    )
  }
}
