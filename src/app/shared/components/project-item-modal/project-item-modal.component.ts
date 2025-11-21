import { Component, inject, ViewEncapsulation } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { NgOptimizedImage } from '@angular/common';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GalleriaModule } from 'primeng/galleria';
import { ProjectService } from '../../../core/services/project/project.service';

@Component({
  selector: 'app-project-item-modal',
  templateUrl: './project-item-modal.component.html',
  styleUrl: './project-item-modal.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgOptimizedImage,
    CarouselModule,
    GalleriaModule
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

  protected readonly images = [
    { index: 0, itemImageSrc: "images/home/hero-carousel/maison.jpg", alt: "Une maison moderne avec de grandes baies vitrées et une piscine" },
    { index: 1, itemImageSrc: "images/home/hero-carousel/maison-4.jpg", alt: "Intérieur contemporain d'une maison avec une cuisine ouverte" },
    { index: 2, itemImageSrc: "images/home/hero-carousel/maison-5.webp", alt: "Salon lumineux avec vue sur un jardin verdoyant" },
    { index: 3, itemImageSrc: "images/home/hero-carousel/maison-2.jpg", alt: "Façade d'une villa de luxe avec des lignes épurées" },
    { index: 4, itemImageSrc: "images/home/hero-carousel/maison-3.webp", alt: "Vue aérienne d'une maison d'architecte nichée dans la nature" },
    { index: 5, itemImageSrc: "images/home/hero-carousel/maison-6.jpg", alt: "Entrée d'une maison avec un aménagement paysager minimaliste" }
  ];

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

  imagesWithIndex : any[]= [];

  ngOnInit() {
    this.imagesWithIndex = this.projectData.images.map((item , index) => (  {
      imageSrc: item,
      index: index + 1
    }));
  }

  onImageClick(index: number) {

    console.log(index);
    this.activeIndex = index;
    this.displayCustom = true;
  }

  onCloseProjectModal() {
    this.ref.close();
  }
}
