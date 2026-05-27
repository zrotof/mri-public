import { Component, inject, ViewEncapsulation } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { NgOptimizedImage } from '@angular/common';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GalleriaModule } from 'primeng/galleria';
import { ProjectService } from '../../../core/services/project/project.service';
import { WorkTypeComponent } from '../work-type/work-type.component';

@Component({
  selector: 'app-project-item-modal',
  templateUrl: './project-item-modal.component.html',
  styleUrl: './project-item-modal.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgOptimizedImage,
    CarouselModule,
    GalleriaModule,
    WorkTypeComponent
  ]
})

export class ProjectItemModalComponent {
  private projectServcie = inject(ProjectService);
  ref = inject(DynamicDialogRef);
  config = inject(DynamicDialogConfig);

  projectId = this.config.data.id;
  projectData = this.projectServcie.getProjectById(this.projectId);

  displayCustom: boolean | undefined;

  activeIndex: number = 0;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  currentImage: any;

  imagesWithIndex : any[]= [];

  ngOnInit() {
    this.imagesWithIndex = [{imageSrc: this.projectData.coverImage, index: 0, isActive: true}, ...this.getImages() ]

    this.currentImage = this.imagesWithIndex[0];
  }

  getImages() {
    return  this.projectData.images.map((item , index ) => (  {
      imageSrc: item,
      index: index + 1,
      isActive: false
      }
  ));
  }

  onImageClicked(index: number) {
    this.imagesWithIndex.forEach(image => image.isActive = false)
    this.currentImage = this.imagesWithIndex.find(image => image.index === index);
    this.currentImage.isActive = true;
  }

  onCloseProjectModal() {
    this.ref.close();
  }
}
