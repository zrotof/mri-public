import { Component, input } from '@angular/core';
import { TestimonialSection } from '../../../../core/models/project';

@Component({
  selector: 'app-testimonial-section',
  imports: [],
  templateUrl: './testimonial-section.component.html',
  styleUrl: './testimonial-section.component.scss'
})
export class TestimonialSectionComponent {
  section = input<TestimonialSection>();
}
