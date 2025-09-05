import { Component } from '@angular/core';
import { FormContactDataComponent } from './components/form-contact-data/form-contact-data.component';

@Component({
  selector: 'app-page-contact-container',
  templateUrl: './page-contact-container.component.html',
  styleUrl: './page-contact-container.component.scss',
  imports: [
    FormContactDataComponent
  ]
})

export class PageContactContainerComponent {

}
