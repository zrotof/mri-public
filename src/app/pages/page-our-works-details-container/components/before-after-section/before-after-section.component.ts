import { Component, input } from '@angular/core';
import { BeforeAfterSection } from '../../../../core/models/project';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-before-after-section',
  templateUrl: './before-after-section.component.html',
  styleUrl: './before-after-section.component.scss',
  imports: [
    NgOptimizedImage
  ],
})

export class BeforeAfterSectionComponent {
section = input<BeforeAfterSection>();
}
