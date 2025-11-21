import { Component, inject, input, ViewEncapsulation } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProjectItemModalComponent } from '../../../../shared/components/project-item-modal/project-item-modal.component';


@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrl: './work-list.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [DialogService],
  imports: [
    NgOptimizedImage
  ]
})

export class WorkListComponent {
  private dialogservice = inject(DialogService);

  ref: DynamicDialogRef | undefined;

  projects = input.required<any>();

  onProjectChoosed(id: number) {
    this.dialogservice.open(
      ProjectItemModalComponent, {
      modal: true,
      baseZIndex: 100,
      closable: true,
      styleClass: "project-modal",
      width: "100%",
      height: "100%",
      data: {
        id: id
      }
    }
    )
  }
}
