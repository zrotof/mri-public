import { NgOptimizedImage } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { CotationFormComponent } from '../../../../shared/components/cotation-form/cotation-form.component';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-works-hero',
  templateUrl: './works-hero.component.html',
  styleUrl: './works-hero.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [DialogService],
  imports: [
    NgOptimizedImage
  ]
})

export class WorksHeroComponent {
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
