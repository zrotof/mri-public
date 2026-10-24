import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { SeoService } from './core/services/seo';
import { GtmService } from './core/services/gtm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
  ]
})
export class AppComponent implements OnInit {
  private seoService = inject(SeoService);
  private gtmService = inject(GtmService);

  ngOnInit(): void {
    this.seoService.initCanonicalUrlListener();
    this.gtmService.initGtmTracking();
  }
}
