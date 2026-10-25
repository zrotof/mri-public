import { Component, input } from '@angular/core';
import { BlogArticle } from '../../../../core/models/blog';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../../../core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DatePipe } from '@angular/common';

import { GsapSplitTextFadeInScrollTriggerDirective } from '../../../../shared/directives/gsap-split-text-fade-in-scroll-trigger/gsap-split-text-fade-in-scroll-trigger.directive';

@Component({
  selector: 'app-main-blog-article',
  templateUrl: './main-blog-article.component.html',
  styleUrl: './main-blog-article.component.scss',
  imports: [
    DatePipe,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe,
    GsapSplitTextFadeInScrollTriggerDirective
  ]
})

export class MainBlogArticleComponent {
  blogArticle = input.required<BlogArticle>();
}
