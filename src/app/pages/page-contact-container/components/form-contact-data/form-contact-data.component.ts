import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../../../core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';


@Component({
  selector: 'app-form-contact-data',
  templateUrl: './form-contact-data.component.html',
  styleUrl: './form-contact-data.component.scss',
  imports: [
    InputTextModule,
    TextareaModule,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ]
})

export class FormContactDataComponent {


}
