import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  PLATFORM_ID,
  ViewChild,
  inject,
  OnDestroy,
  ViewEncapsulation,
  computed
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../../../core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/all';
import { WorkTypeComponent } from '../../../../shared/components/work-type/work-type.component';
import { ProjectService } from '../../../../core/services/project/project.service';
import { GsapSplitTextFadeInScrollTriggerDirective } from '../../../../shared/directives/gsap-split-text-fade-in-scroll-trigger/gsap-split-text-fade-in-scroll-trigger.directive';

gsap.registerPlugin(Draggable);

/**
 * Interface for the configuration of the horizontalLoop function.
 */
interface HorizontalLoopConfig {
  repeat?: number;
  paused?: boolean;
  onChange?: (element: HTMLElement, index: number) => void;
  speed?: number;
  draggable?: boolean;
  reversed?: boolean;
}

@Component({
  selector: 'app-home-latest-works',
  templateUrl: './home-latest-works.component.html',
  styleUrls: ['./home-latest-works.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgOptimizedImage,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe,
    WorkTypeComponent,
    RouterLink,
    GsapSplitTextFadeInScrollTriggerDirective
  ],
})

export class HomeLatestWorksComponent implements AfterViewInit, OnDestroy {
  private ngZone = inject(NgZone);
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private projectService = inject(ProjectService);

  @ViewChild('carouselContainer', { static: false }) carouselContainer!: ElementRef<HTMLDivElement>;

  protected readonly latestWorks = this.projectService.getProjectsSummary(true);

  // Duplique la liste si moins de 6 éléments pour garantir une boucle infinie continue sans vide d'écran
  protected readonly displayWorks = computed(() => {
    const works = this.latestWorks();
    if (!works || works.length === 0) return [];
    if (works.length < 6) {
      const repeatFactor = Math.ceil(6 / works.length);
      const list: typeof works = [];
      for (let i = 0; i < repeatFactor; i++) {
        list.push(...works);
      }
      return list;
    }
    return works;
  });

  private loopTimeline?: gsap.core.Timeline;
  private intersectionObserver?: IntersectionObserver;
  private isVisibleInViewport = false;
  private isDocumentVisible = true;
  private isHovered = false;
  private cleanupVisibilityChange?: () => void;

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    this.ngZone.runOutsideAngular(() => {
      const projects = gsap.utils.toArray<HTMLElement>(
        this.carouselContainer.nativeElement.querySelectorAll('.work')
      );

      // Early exit if no items are found
      if (!projects || projects.length === 0) {
        console.warn('Carousel items not found.');
        return;
      }

      this.loopTimeline = this.horizontalLoop(projects, {
        paused: true, // Démarre en pause jusqu'à ce que la section entre dans le viewport
        draggable: true,
        speed: 0.3,
        onChange: (element: HTMLElement, index: number) => {
          projects.forEach(project => project.classList.remove('active'));
          element.classList.add('active');
        }
      });

      // Active l'IntersectionObserver et la Page Visibility API pour 0 consommation CPU hors champ
      this.setupVisibilityObservers();
    });
  }

  private setupVisibilityObservers(): void {
    if (typeof IntersectionObserver !== 'undefined' && this.carouselContainer?.nativeElement) {
      this.intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            this.isVisibleInViewport = entry.isIntersecting;
            this.updatePlaybackState();
          });
        },
        {
          root: null,
          rootMargin: '100px 0px 100px 0px', // Préchauffe 100px avant l'entrée dans l'écran
          threshold: 0.05
        }
      );

      this.intersectionObserver.observe(this.carouselContainer.nativeElement);
    } else {
      this.isVisibleInViewport = true;
      this.updatePlaybackState();
    }

    if (typeof document !== 'undefined') {
      const handleVisibilityChange = () => {
        this.isDocumentVisible = !document.hidden;
        this.updatePlaybackState();
      };
      document.addEventListener('visibilitychange', handleVisibilityChange);
      this.cleanupVisibilityChange = () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }
  }

  private updatePlaybackState(): void {
    if (this.isVisibleInViewport && this.isDocumentVisible && !this.isHovered) {
      this.loopTimeline?.resume();
    } else {
      this.loopTimeline?.pause();
    }
  }

  pauseGallery(): void {
    this.isHovered = true;
    this.loopTimeline?.pause();
  }

  resumeGallery(): void {
    this.isHovered = false;
    this.updatePlaybackState();
  }

  nextWork(): void {
    this.loopTimeline?.['next']({ duration: 0.5, ease: "power1.inOut" });
  }

  prevWork(): void {
    this.loopTimeline?.['previous']({ duration: 0.5, ease: "power1.inOut" });
  }

  ngOnDestroy(): void {
    this.intersectionObserver?.disconnect();
    this.cleanupVisibilityChange?.();
    this.loopTimeline?.kill?.();
  }

  private horizontalLoop(items: HTMLElement[], config: HorizontalLoopConfig): gsap.core.Timeline {
    items = gsap.utils.toArray(items);
    config = config || {};

    const onChange = config.onChange;
    let lastIndex = 0;
    let curIndex = 0;
    let indexIsDirty = false;

    const tl = gsap.timeline({
      delay: 2,
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onUpdate: onChange && (() => {
        let i = (tl as any)['closestIndex']();
        if (lastIndex !== i) {
          lastIndex = i;
          onChange(items[i], i);
        }
      }),
      onReverseComplete: () => { tl.totalTime(tl.rawTime() + tl.duration() * 100); }
    });

    const startX = items[0].offsetLeft;
    const widths: number[] = [];
    const xPercents: number[] = [];
    const times: number[] = [];
    const spaceBefore: number[] = [];
    let totalWidth: number;
    let timeWrap: (n: number) => number;
    const container = items[0].parentNode as HTMLElement;

    const pixelsPerSecond = (config.speed || 1) * 100;

    const getTotalWidth = (): number => {
      const lastItem = items[items.length - 1];
      const scaleX = Number(gsap.getProperty(lastItem, "scaleX"));
      // Mesure l'écart (gap) réel entre les éléments pour l'ajouter à la fin du cycle
      const trailingGap = (spaceBefore[1] && spaceBefore[1] > 0)
        ? spaceBefore[1]
        : (parseFloat(window.getComputedStyle(container).columnGap) || 16);
      return lastItem.offsetLeft + (xPercents[items.length - 1] / 100) * widths[items.length - 1] - startX + spaceBefore[0] + lastItem.offsetWidth * scaleX + trailingGap;
    };

    const populateWidths = (): void => {
      let containerRect = container.getBoundingClientRect();
      items.forEach((el, i) => {
        widths[i] = parseFloat(gsap.getProperty(el, "width", "px") as string);
        xPercents[i] = parseFloat(gsap.getProperty(el, "x", "px") as string) / widths[i] * 100 + Number(gsap.getProperty(el, "xPercent"));
        const elementRect = el.getBoundingClientRect();
        spaceBefore[i] = elementRect.left - (i ? containerRect.right : containerRect.left);
        containerRect = elementRect;
      });
      gsap.set(items, { xPercent: (i: number) => xPercents[i] });
      totalWidth = getTotalWidth();
    };

    const populateTimeline = (): void => {
      tl.clear();
      items.forEach((item, i) => {
        const curX = xPercents[i] / 100 * widths[i];
        const distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
        const distanceToLoop = distanceToStart + widths[i] * Number(gsap.getProperty(item, "scaleX"));

        tl.to(item, {
          xPercent: (curX - distanceToLoop) / widths[i] * 100,
          duration: distanceToLoop / pixelsPerSecond
        }, 0)
          .fromTo(item,
            { xPercent: (curX - distanceToLoop + totalWidth) / widths[i] * 100 },
            { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false },
            distanceToLoop / pixelsPerSecond)
          .add("label" + i, distanceToStart / pixelsPerSecond);

        times[i] = distanceToStart / pixelsPerSecond;
      });
      timeWrap = gsap.utils.wrap(0, tl.duration());
    };

    populateWidths();
    populateTimeline();

    const getClosest = (values: number[], value: number, wrap: number): number => {
      let i = values.length, closest = 1e10, index = 0, d;
      while (i--) {
        d = Math.abs(values[i] - value);
        if (d > wrap / 2) d = wrap - d;
        if (d < closest) {
          closest = d;
          index = i;
        }
      }
      return index;
    };

    function toIndex(index: number, vars: gsap.TweenVars): gsap.core.Tween {
      vars = vars || {};
      if (Math.abs(index - curIndex) > items.length / 2)
        index += index > curIndex ? -items.length : items.length;
      let newIndex = gsap.utils.wrap(0, items.length, index);
      let time = times[newIndex];
      if (time > tl.time() !== index > curIndex && index !== curIndex) {
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      if (time < 0 || time > tl.duration()) {
        vars.modifiers = { time: timeWrap };
      }
      curIndex = newIndex;
      vars.overwrite = true;
      return vars.duration === 0
        ? gsap.to(tl, { time: timeWrap(time), duration: 0, overwrite: true })
        : tl.tweenTo(time, vars);
    }

    (tl as any)['toIndex'] = toIndex;
    (tl as any)['closestIndex'] = (setCurrent?: boolean) => {
      const index = getClosest(times, tl.time(), tl.duration());
      if (setCurrent) {
        curIndex = index;
        indexIsDirty = false;
      }
      return index;
    };
    (tl as any)['current'] = () => indexIsDirty ? (tl as any)['closestIndex'](true) : curIndex;
    (tl as any)['next'] = (vars: gsap.TweenVars) => toIndex((tl as any)['current']() + 1, vars);
    (tl as any)['previous'] = (vars: gsap.TweenVars) => toIndex((tl as any)['current']() - 1, vars);
    (tl as any)['times'] = times;

    tl.progress(1, true).progress(0, true);

    if (config.reversed) {
      if (typeof tl.vars.onReverseComplete === 'function') {
        tl.vars.onReverseComplete();
      }
      tl.reverse();
    }

    if (config.draggable) {
      const proxy = document.createElement("div");
      let ratio: number, startProgress: number, draggable: Draggable;

      const align = () => { tl.progress(gsap.utils.wrap(0, 1, startProgress + (draggable.startX - draggable.x) * ratio)); };

      draggable = Draggable.create(proxy, {
        trigger: items[0].parentNode as Element,
        type: "x",
        inertia: true,
        onPressInit() {
          gsap.killTweensOf(tl);
          startProgress = tl.progress();
          populateWidths();
          ratio = 1 / totalWidth;
          gsap.set(proxy, { x: startProgress / -ratio });
        },
        onDrag: align,
        onThrowUpdate: align,
        onRelease: () => (tl as any)['closestIndex'](true),
        onThrowComplete: () => (tl as any)['closestIndex'](true)
      })[0];

      (tl as any).draggable = draggable;
    }

    (tl as any)['closestIndex'](true);
    lastIndex = curIndex;
    if (onChange) {
      onChange(items[curIndex], curIndex);
    }

    return tl;
  }
}