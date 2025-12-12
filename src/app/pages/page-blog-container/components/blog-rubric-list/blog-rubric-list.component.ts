import { Component, input, output } from '@angular/core';
import { BlogRubic } from '../../../../core/models/blog';

@Component({
  selector: 'app-blog-rubric-list',
  imports: [],
  templateUrl: './blog-rubric-list.component.html',
  styleUrl: './blog-rubric-list.component.scss'
})
export class BlogRubricListComponent {

  rubrics = input.required<BlogRubic[]>();
  rubricIndexClicked = output<number>();

  onRubricClicked(index : number){
    this.rubricIndexClicked.emit(index);
  }
}
