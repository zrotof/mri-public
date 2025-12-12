import { Component, inject } from "@angular/core";
import { BlogHeroComponent } from "./components/blog-hero/blog-hero.component";
import { BlogService } from '../../core/services/blog/blog.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { BlogRubricListComponent } from './components/blog-rubric-list/blog-rubric-list.component';
import { BlogArticle, BlogRubic } from '../../core/models/blog';
import { BlogSummaryComponent } from './components/blog-summary/blog-summary.component';
import { MainBlogArticleComponent } from "./components/main-blog-article/main-blog-article.component";

@Component({
  selector: 'app-page-blog-container',
  templateUrl: './page-blog-container.component.html',
  styleUrl: './page-blog-container.component.scss',
  imports: [
    BlogHeroComponent,
    BlogRubricListComponent,
    BlogSummaryComponent,
    MainBlogArticleComponent
  ]
})

export class PageBlogContainerComponent {
  private blogService = inject(BlogService);

  protected blogRubrics = toSignal(this.blogService.getBlogRubrics(), { initialValue: [] as BlogRubic[] });
  protected blogArticles = toSignal(this.blogService.getBlogArticlesByRubrics(1), { initialValue: [] as BlogArticle[] });

  onRubricClickedEventHandler(index: number) {
    this.blogRubrics().forEach((rubric: BlogRubic) => {
      rubric.isActive = false;
    });
    this.blogRubrics()[index].isActive = true;

    this.blogArticles = toSignal(this.blogService.getBlogArticlesByRubrics(index), { initialValue: [] as BlogArticle[] });
  }
}
