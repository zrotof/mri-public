import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { CotationFormComponent } from '../cotation-form/cotation-form.component';

@Component({
  selector: 'app-cotation-banner',
  templateUrl: './cotation-banner.component.html',
  styleUrl: './cotation-banner.component.scss',
  providers: [DialogService],
  imports: [
    NgOptimizedImage
  ]
})
export class CotationBannerComponent {

  private dialogservice = inject(DialogService);

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
