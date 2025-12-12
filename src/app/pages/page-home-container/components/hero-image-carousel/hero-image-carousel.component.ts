import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  PLATFORM_ID,
  ViewChild,
  inject,
  OnDestroy,
  ViewEncapsulation
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../../../core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/all';
import { ProjectItemModalComponent } from '../../../../shared/components/project-item-modal/project-item-modal.component';

gsap.registerPlugin(Draggable);

/**
 * Interface for the image data in the carousel.
 */
interface CarouselImage {
  name: string;
  alt: string;
}

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
  selector: 'app-hero-image-carousel',
  templateUrl: './hero-image-carousel.component.html',
  styleUrls: ['./hero-image-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DialogService],
  imports: [
    NgOptimizedImage,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ],
})


export class HeroImageCarouselComponent implements AfterViewInit, OnDestroy {
  private ngZone = inject(NgZone);
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private dialogservice = inject(DialogService);

  @ViewChild('carouselContainer', { static: false }) carouselContainer!: ElementRef<HTMLDivElement>;

  ref: DynamicDialogRef | undefined;

  latestWorks = [
    {
      image: "images/home/hero-carousel/maison.jpg",
      title: "Rénovation de la plomberie et de l'électricité",
      location: "Saint-Germain-en-Laye",
      duration: "Durée : 4 mois",
      description: "Transformation d'un vieil appartement en un espace moderne, avec une rénovation complète de la plomberie et de l'électricité pour garantir sécurité et confort. Création de nouvelles arrivées d'eau et installation de systèmes de chauffage plus efficaces.",
      renovationTypes: [
        "Plomberie",
        "Électricité",
        "Rénovation complète"
      ]
    },
    {
      image: "images/home/hero-carousel/maison-4.jpg",
      title: "Ajout d'une nouvelle aile à une maison de ville pour créer une chambre principale avec salle de bains privative et un bureau lumineux. Un projet complexe qui a nécessité une expertise en structure et en design pour s'intégrer parfaitement à l'architecture existante.",
      location: "Paris 16ème",
      duration: "Durée : 6 mois",
      description: "Ajout d'une nouvelle aile à une maison de ville pour créer une chambre principale avec salle de bains privative et un bureau lumineux. Un projet complexe qui a nécessité une expertise en structure et en design pour s'intégrer parfaitement à l'architecture existante.",
      renovationTypes: [
        "Aménagements et extension",
        "Aménagement de salle de bain",
        "Rénovation complète"
      ]
    },
    {
      image: "images/home/hero-carousel/maison-5.webp",
      title: "Aménagement de cuisines et salles de bains",
      location: "L'Etang-la-Ville",
      duration: "Durée : 2 mois",
      description: "Modernisation complète de la cuisine et de la salle de bains pour une famille. Installation de placards sur mesure, de plans de travail en marbre et de luminaires LED pour un espace à la fois fonctionnel et élégant. Remplacement de la baignoire par une douche à l'italienne.",
      renovationTypes: [
        "Aménagement de cuisine",
        "Aménagement de salle de bain",
        "Décoration d'intérieur et agencement"
      ]
    },
    {
      image: "images/home/hero-carousel/maison-2.jpg",
      title: "Rénovation de toitures et de charpentes",
      location: "Marly-le-Roi",
      duration: "Durée : 3 mois",
      description: "Rénovation complète d'une charpente en bois et réfection de la toiture pour une meilleure isolation thermique. Un projet délicat qui a permis de préserver le cachet de la maison tout en améliorant sa performance énergétique et sa durabilité face aux intempéries.",
      renovationTypes: [
        "Rénovation extérieure"
      ]
    },
    {
      image: "images/home/hero-carousel/maison-3.webp",
      title: "Pose de revêtements de sols et muraux",
      location: "Versailles",
      duration: "Durée : 1 mois",
      description: "Remplacement du carrelage existant par un parquet en bois massif et pose d'un nouveau revêtement mural dans le salon et la salle à manger. L'objectif était de moderniser l'intérieur tout en conservant une atmosphère chaleureuse et classique.",
      renovationTypes: [
        "Sols et plafonds",
        "Peinture"
      ]
    },
    {
      image: "images/home/hero-carousel/maison-6.jpg",
      title: "Aménagement d'une nouvelle suite parentale",
      location: "Chambourcy",
      duration: "Durée : 2 mois",
      description: "Transformation d'un grenier inutilisé en une suite parentale avec dressing sur mesure. Le projet a permis de créer un espace de vie privé et fonctionnel, avec l'installation d'un système de chauffage indépendant et la création de plusieurs rangements intégrés.",
      renovationTypes: [
        "Aménagements et extension",
        "Décoration d'intérieur et agencement",
        "Sols et plafonds"
      ]
    }
  ];

  private loopTimeline?: gsap.core.Timeline;


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
        paused: false,
        draggable: true,
        speed: 0.3,
        onChange: (element: HTMLElement, index: number) => {
          projects.forEach(project => project.classList.remove('active'));
          element.classList.add('active');
        }
      });
    });
  }

  onProjectChoosed(index: number) {
    this.dialogservice.open(
      ProjectItemModalComponent, {
      modal: true,
      baseZIndex: 100,
      closable: true,
      styleClass: "project-modal",
      width: "100%",
      height: "100%",
    }
    )
  }

  nextWork(): void {
    this.loopTimeline?.['next']({ duration: 0.5, ease: "power1.inOut" });
  }

  prevWork(): void {
    this.loopTimeline?.['previous']({ duration: 0.5, ease: "power1.inOut" });
  }

  ngOnDestroy(): void {
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
      return lastItem.offsetLeft + (xPercents[items.length - 1] / 100) * widths[items.length - 1] - startX + spaceBefore[0] + lastItem.offsetWidth * scaleX;
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

  pauseGallery(): void {
    this.loopTimeline?.pause();
  }

  resumeGallery(): void {
    this.loopTimeline?.resume();
  }
}