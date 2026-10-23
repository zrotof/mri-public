import { NgOptimizedImage } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-works-hero',
  templateUrl: './works-hero.component.html',
  styleUrl: './works-hero.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgOptimizedImage,
    RouterLink
  ]
})
export class WorksHeroComponent {}
