/* ===========================
   SECTION TYPES
=========================== */

export type SectionType =
  | 'overview'
  | 'challenges'
  | 'audit'
  | 'structural'
  | 'performance'
  | 'before-after'
  | 'testimonial';

/* ===========================
   BASE SECTION
=========================== */

export interface BaseSection {
  id: string;
  type: SectionType;
  navLabel: string;
  title: string;
}


export interface ProjectKeyFigure {
  label?: string; // ex: 'Surface', 'Durée', 'Lieu', 'Budget', 'Performance'
  icon: string;   // ex: 'pi pi-home'
  value: string;  // ex: '350 m²'
}

/* ===========================
   COMMON STRUCTURES
=========================== */

export interface MediaItem {
  src: string;
  alt?: string;
}

export interface BulletItem {
  text: string;
}

export interface ComparisonMetric {
  label: string;
  before: string;
  after: string;
}

/* ===========================
   EXTENDED SECTIONS
=========================== */

export interface OverviewSection extends BaseSection {
  type: 'overview';
  content: string[];
  images?: MediaItem[];
}

export interface ChallengesSection extends BaseSection {
  type: 'challenges';
  content: string[];
  highlights: BulletItem[];
}

export interface AuditSection extends BaseSection {
  type: 'audit';
  content: string[];
  actions: BulletItem[];
  images?: MediaItem[];
}

export interface StructuralSection extends BaseSection {
  type: 'structural';
  content: string[];
  actions: BulletItem[];
  technicalNote?: string;
  images?: MediaItem[];
}

export interface PerformanceSection extends BaseSection {
  type: 'performance';
  content: string[];
  metrics: ComparisonMetric[];
  resultText: string[];
}

export interface BeforeAfterSection extends BaseSection {
  type: 'before-after';
    content: string[];
  pairs: {
    before: MediaItem;
    after: MediaItem;
  }[];
}

export interface TestimonialSection extends BaseSection {
  type: 'testimonial';
  quote: string;
  clientName: string;
  clientRole?: string;
}

/* ===========================
   UNION
=========================== */

export type ProjectSection =
  | OverviewSection
  | ChallengesSection
  | AuditSection
  | StructuralSection
  | PerformanceSection
  | BeforeAfterSection
  | TestimonialSection;


export interface Project {
  id: number;
  slug: string;

  isTop: boolean; // ✅ Pour le carousel homepage

  title: string;
  location: string;

  shortDescription: string;      // ✅ Pour cards / homepage
  introDescription: string[];    // ✅ Pour le haut de la page projet

  featuredImages: string[];
  featuredImageAlts?: string[];
  coverImage?: string;

  renovationTypes: string[];

  keyFigures: ProjectKeyFigure[];

  sections: ProjectSection[];
}