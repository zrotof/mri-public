import { Component, computed, inject, input, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Project } from '../../../../core/models/project';
import { BreadcrumbComponent, BreadcrumbItem } from '../../../../shared/components/breadcrumb/breadcrumb.component';
import { ShareService } from '../../../../core/services/share/share.service';

@Component({
  selector: 'app-intro-section',
  standalone: true,
  templateUrl: './intro-section.component.html',
  styleUrl: './intro-section.component.scss',
  imports: [
    CommonModule,
    NgOptimizedImage,
    BreadcrumbComponent
  ]
})

export class IntroSectionComponent {
  private readonly shareService = inject(ShareService);

  project = input<Project>();

  currentSlideIndex = signal(0);

  private touchStartX = 0;
  private touchEndX = 0;

  openShare(): void {
    const p = this.project();
    if (!p) return;
    this.shareService.open({
      title: p.title,
      location: p.location,
      imageUrl: this.images()[0] || p.coverImage,
      description: p.introDescription?.[0]
    });
  }

  readonly departmentLabel = computed<string>(() => {
    const loc = this.project()?.location?.toLowerCase() || '';
    if (loc.includes('saint-germain') || loc.includes('78') || loc.includes('yvelines') || loc.includes('versailles')) {
      return 'Yvelines (78)';
    }
    if (loc.includes('saint-cloud') || loc.includes('92') || loc.includes('hauts-de-seine') || loc.includes('neuilly')) {
      return 'Hauts-de-Seine (92)';
    }
    if (loc.includes('paris')) {
      return 'Paris (75)';
    }
    return this.project()?.location ? `${this.project()?.location} (Île-de-France)` : 'Île-de-France';
  });

  readonly mergedIntroDescription = computed<string>(() => {
    const desc = this.project()?.introDescription;
    if (!desc || desc.length === 0) return '';
    return desc.join(' ');
  });

  readonly breadcrumbItems = computed<BreadcrumbItem[]>(() => {
    const p = this.project();
    return [
      { label: 'Accueil', url: '/' },
      { label: 'Nos Réalisations', url: '/nos-realisations' },
      { label: p ? `${p.title} (${p.location})` : 'Réalisation' }
    ];
  });

  readonly images = computed<string[]>(() => {
    const p = this.project();
    if (!p) return [];
    if (p.featuredImages && p.featuredImages.length > 0) {
      return p.featuredImages;
    }
    return p.coverImage ? [p.coverImage] : [];
  });

  nextSlide(): void {
    const total = this.images().length;
    if (total <= 1) return;
    this.currentSlideIndex.update(i => (i + 1) % total);
  }

  prevSlide(): void {
    const total = this.images().length;
    if (total <= 1) return;
    this.currentSlideIndex.update(i => (i - 1 + total) % total);
  }

  goToSlide(index: number): void {
    const total = this.images().length;
    if (index >= 0 && index < total) {
      this.currentSlideIndex.set(index);
    }
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].clientX;
  }

  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].clientX;
    const diff = this.touchStartX - this.touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }
  }

  getImageAlt(index: number): string {
    const p = this.project();
    if (!p) return 'Photo de réalisation de rénovation immobilière';
    if (p.featuredImageAlts && p.featuredImageAlts[index]) {
      return p.featuredImageAlts[index];
    }
    return `${p.title} à ${p.location} - Vue ${index + 1}`;
  }
}
