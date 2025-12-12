import { Component, inject, ViewEncapsulation } from '@angular/core';
import { CotationFormComponent } from '../../../../shared/components/cotation-form/cotation-form.component';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-contact-hero',
  templateUrl: './contact-hero.component.html',
  styleUrl: './contact-hero.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [DialogService]
})

export class ContactHeroComponent {
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
