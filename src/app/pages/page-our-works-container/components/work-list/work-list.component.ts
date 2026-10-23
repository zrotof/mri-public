import { Component, input, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { Project } from '../../../../core/models/project';


@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrl: './work-list.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgOptimizedImage,
    RouterLink
  ]
})

export class WorkListComponent {
  projects = input.required<any>();
}
