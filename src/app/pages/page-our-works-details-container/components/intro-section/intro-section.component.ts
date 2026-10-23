import { Component, input } from '@angular/core';
import { Project } from '../../../../core/models/project';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrl: './intro-section.component.scss',
  imports: [
    NgOptimizedImage
  ]
})

export class IntroSectionComponent {
  project = input<Project>();
}
