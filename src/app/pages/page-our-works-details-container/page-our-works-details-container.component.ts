import {
  Component,
  ElementRef,
  inject,
  computed,
  input,
  QueryList,
  ViewChildren,
  signal,
  AfterViewInit,
  PLATFORM_ID,
  effect
} from '@angular/core';

import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ProjectService } from '../../core/services/project/project.service';
import { SeoService } from '../../core/services/seo';
import { OverviewSectionComponent } from './components/overview-section/overview-section.component';
import { ChallengesSectionComponent } from './components/challenges-section/challenges-section.component';
import { AuditSectionComponent } from './components/audit-section/audit-section.component';
import { StructuralSectionComponent } from './components/structural-section/structural-section.component';
import { PerformanceSectionComponent } from './components/performance-section/performance-section.component';
import { TestimonialSectionComponent } from './components/testimonial-section/testimonial-section.component';
import { BeforeAfterSectionComponent } from './components/before-after-section/before-after-section.component';
import { ProjectSidebarComponent } from './components/project-sidebar/project-sidebar.component';
import { IntroSectionComponent } from './components/intro-section/intro-section.component';
import { RelatedProjectsComponent } from './components/related-projects/related-projects.component';
import { CotationBannerComponent } from '../../shared/components/cotation-banner/cotation-banner.component';
import { ShareModalComponent } from '../../shared/components/share-modal/share-modal.component';
import { ShareService } from '../../core/services/share/share.service';

@Component({
  selector: 'app-page-our-works-details-container',
  standalone: true,
  templateUrl: './page-our-works-details-container.component.html',
  styleUrl: './page-our-works-details-container.component.scss',
  imports: [
    CommonModule,
    ProjectSidebarComponent,
    IntroSectionComponent,
    OverviewSectionComponent,
    ChallengesSectionComponent,
    AuditSectionComponent,
    StructuralSectionComponent,
    PerformanceSectionComponent,
    TestimonialSectionComponent,
    BeforeAfterSectionComponent,
    RelatedProjectsComponent,
    CotationBannerComponent,
    ShareModalComponent
  ]
})
export default class PageOurWorksDetailsContainerComponent implements AfterViewInit {

  private readonly service = inject(ProjectService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly seoService = inject(SeoService);
  private readonly shareService = inject(ShareService);

  slug = input.required<string>();

  project = computed(() =>
    this.service.getProjectBySlug(this.slug())()
  );

  onShareProject(): void {
    const p = this.project();
    if (!p) return;
    this.shareService.open({
      title: p.title,
      location: p.location,
      imageUrl: p.featuredImages?.[0] || p.coverImage,
      description: p.introDescription?.[0]
    });
  }

  activeSection = signal<string>('intro');

  constructor() {
    effect(() => {
      const p = this.project();
      if (p) {
        this.seoService.applyProjectSeo(p);
      }
    });
  }

  @ViewChildren('sectionRef') sections!: QueryList<ElementRef>;

  ngAfterViewInit() {

    if (!isPlatformBrowser(this.platformId)) return;

    setTimeout(() => {
      this.initScrollSpy();
      this.initFadeIn();
    });
  }

  private initScrollSpy() {

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection.set(entry.target.id);
        }
      });
    }, {
      rootMargin: '-140px 0px -55% 0px',
      threshold: 0.1
    });

    this.sections.forEach(section =>
      observer.observe(section.nativeElement)
    );
  }

  private initFadeIn() {

    const fadeObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    this.sections.forEach(section =>
      fadeObserver.observe(section.nativeElement)
    );
  }

  scrollTo(id: string) {

    if (!isPlatformBrowser(this.platformId)) return;

    const element = document.getElementById(id);
    if (!element) return;

    const offset = 120;
    const y = element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}