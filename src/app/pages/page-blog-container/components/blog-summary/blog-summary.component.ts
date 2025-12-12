import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogArticle } from '../../../../core/models/blog';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../../../core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

@Component({
  selector: 'app-blog-summary',
  templateUrl: './blog-summary.component.html',
  styleUrl: './blog-summary.component.scss',
  imports: [
    RouterLink,
    DatePipe,
    NgOptimizedImage,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ]
})

export class BlogSummaryComponent {

  articles = input<BlogArticle[]>();

}
