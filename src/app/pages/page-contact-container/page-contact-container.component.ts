import { Component } from '@angular/core';
import { FormContactDataComponent } from './components/form-contact-data/form-contact-data.component';
import { ContactHeroComponent } from './components/contact-hero/contact-hero.component';

@Component({
  selector: 'app-page-contact-container',
  templateUrl: './page-contact-container.component.html',
  styleUrl: './page-contact-container.component.scss',
  imports: [
    ContactHeroComponent,
    FormContactDataComponent
  ]
})

export class PageContactContainerComponent {

}
