import { Component } from '@angular/core';
import { NETWORKS } from '../../../shared/constants/networks.constant';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ]
})

export class FooterComponent {
  protected readonly networks = NETWORKS;
  protected readonly currentYear = new Date().getFullYear();
}
