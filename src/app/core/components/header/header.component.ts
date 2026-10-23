import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, HostListener, inject, Renderer2, signal, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ]
})
export class HeaderComponent {
  @ViewChild('header') header!: ElementRef<HTMLElement>;

  private _renderer = inject(Renderer2);
  private router = inject(Router);

  backgroundedHeader!: boolean;
  isMobileMenuOpen = signal<boolean>(false);

  ngOnInit(): void {
    this.onRoutingEvent();
  }

  onRoutingEvent(): void {
    this.router.events.subscribe({
      next: (event) => {
        if (event instanceof ActivationEnd) {
          if (event.snapshot.component) {
            this.backgroundedHeader = event.snapshot.data['backgrounded'];

            if (this.backgroundedHeader) {
              this._renderer.addClass(this.header.nativeElement, 'navbar-background-on-scroll');
            } else {
              this._renderer.removeClass(this.header.nativeElement, 'navbar-background-on-scroll');
            }

            this.closeMobileMenu();
          }
        }
      }
    });
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((v) => !v);
    this.updateBodyScroll();
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
    this.updateBodyScroll();
  }

  private updateBodyScroll(): void {
    if (typeof document !== 'undefined' && document.body) {
      if (this.isMobileMenuOpen()) {
        this._renderer.addClass(document.body, 'no-scroll');
      } else {
        this._renderer.removeClass(document.body, 'no-scroll');
      }
    }
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    if (this.isMobileMenuOpen()) {
      this.closeMobileMenu();
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (this.backgroundedHeader) {
      this._renderer.addClass(this.header.nativeElement, 'navbar-background-on-scroll');
    } else {
      if (window.pageYOffset > (this.header.nativeElement?.clientHeight || 0)) {
        this._renderer.addClass(this.header.nativeElement, 'navbar-background-on-scroll');
      } else {
        this._renderer.removeClass(this.header.nativeElement, 'navbar-background-on-scroll');
      }
    }
  }
}
