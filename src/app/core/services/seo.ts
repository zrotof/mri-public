import { inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

export interface SeoConfig {
  title?: string;
  description?: string;
  keywords?: string | string[];
  image?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private document = inject(DOCUMENT);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private meta = inject(Meta);
  private titleService = inject(Title);

  private readonly baseUrl = environment.siteUrl;
  private readonly defaultTitle = environment.defaultTitle;
  private readonly defaultDescription = environment.defaultDescription;
  private readonly defaultImage = environment.defaultOgImage;

  initCanonicalUrlListener(): void {
    // 1. Schéma d'entreprise locale global par défaut (Schema.org/HomeAndConstructionBusiness)
    this.setLocalBusinessSchema();

    // 2. Premier réglage sur l'URL actuelle
    this.handleRouteChange(this.router.url);

    // 3. Écoute de tous les changements de routes futurs
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.handleRouteChange(event.urlAfterRedirects || event.url);
      });
  }

  private handleRouteChange(url: string): void {
    this.updateCanonicalUrl(url);

    // Nettoyage éventuel du schéma de projet spécifique si on quitte les pages de réalisations
    if (!url.includes('/nos-realisations/')) {
      this.removeJsonLd('schema-project-detail');
    }

    // Extraction dynamique des métadonnées de route (route.data)
    let active = this.route.root;
    while (active.firstChild) {
      active = active.firstChild;
    }

    const routeData = active.snapshot.data;
    if (routeData) {
      const description = routeData['description'] || this.defaultDescription;
      const image = routeData['ogImage'] || routeData['image'] || this.defaultImage;

      this.updateMeta({
        title: active.snapshot.title || this.defaultTitle,
        description,
        image,
      });
    }
  }

  updateCanonicalUrl(path: string): void {
    if (!path) return;

    // Nettoyage du chemin (suppression des paramètres d'URL ? et des ancres #)
    const cleanPath = path.split('?')[0].split('#')[0];
    const canonicalUrl = `${this.baseUrl}${cleanPath === '/' ? '' : cleanPath}`;

    // 1. Balise <link rel="canonical" href="...">
    let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);

    // 2. Balises Méta Réseaux Sociaux (Open Graph et Twitter Card)
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ name: 'twitter:url', content: canonicalUrl });
  }

  updateMeta(config: SeoConfig): void {
    const title = config.title || this.defaultTitle;
    const description = config.description || this.defaultDescription;
    const image = config.image || this.defaultImage;

    this.titleService.setTitle(title);

    this.meta.updateTag({ name: 'description', content: description });
    if (config.keywords) {
      const keywordsStr = Array.isArray(config.keywords) ? config.keywords.join(', ') : config.keywords;
      this.meta.updateTag({ name: 'keywords', content: keywordsStr });
    }

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: image });

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
  }

  resetMeta(): void {
    this.updateMeta({
      title: this.defaultTitle,
      description: this.defaultDescription,
      image: this.defaultImage,
    });
    this.removeJsonLd('schema-project-detail');
  }

  /* ==========================================================================
     MICRO-DONNÉES STRUCTURÉES SCHEMA.ORG (JSON-LD) - COMPATIBLE SSR & SPA
     ========================================================================== */

  setJsonLd(schema: object, id: string = 'schema-org-data'): void {
    if (!this.document) return;

    let script = this.document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = this.document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }
    script.text = JSON.stringify(schema, null, 2);
  }

  removeJsonLd(id: string = 'schema-org-data'): void {
    if (!this.document) return;
    const script = this.document.getElementById(id);
    if (script && script.parentNode) {
      script.parentNode.removeChild(script);
    }
  }

  /**
   * Schéma Schema.org pour entreprise locale de bâtiment à Saint-Germain-en-Laye
   */
  setLocalBusinessSchema(): void {
    const localBusiness = {
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      '@id': `${this.baseUrl}/#localbusiness`,
      name: 'Ma Rénovation Immobilière',
      alternateName: 'MRI Rénovation Bâtiment',
      url: this.baseUrl,
      logo: `${this.baseUrl}/images/logos/ma-renovation-immobiliere.svg`,
      image: this.defaultImage,
      telephone: '+33130610606',
      email: 'contact@mri-idf.com',
      priceRange: '€€€',
      description: "Entreprise générale de bâtiment haut de gamme à Saint-Germain-en-Laye et en Île-de-France (78, 92, 75). Rénovation complète de villas et appartements, extension de maison, surélévation de toiture et rénovation énergétique.",
      address: {
        '@type': 'PostalAddress',
        streetAddress: '45 Rue de la Liberté',
        addressLocality: 'Saint-Germain-en-Laye',
        postalCode: '78100',
        addressRegion: 'Île-de-France',
        addressCountry: 'FR'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 48.8989,
        longitude: 2.0938
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Saint-Germain-en-Laye' },
        { '@type': 'AdministrativeArea', name: 'Yvelines (78)' },
        { '@type': 'AdministrativeArea', name: 'Hauts-de-Seine (92)' },
        { '@type': 'AdministrativeArea', name: 'Paris (75)' },
        { '@type': 'AdministrativeArea', name: 'Île-de-France' }
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '17:30'
        }
      ],
      knowsAbout: [
        'Rénovation Saint-Germain-en-Laye',
        'Extension maison 78',
        'Surélévation de toiture Yvelines',
        'Rénovation énergétique DPE A B',
        'Entreprise générale de bâtiment',
        'Restructuration intérieure et ouverture de murs porteurs',
        'Maîtrise d’œuvre et coordination tous corps d’état'
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services de Rénovation et de Construction',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rénovation générale haut de gamme tous corps d’état' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Extension de maison et surélévation dans les Yvelines (78)' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aménagement intérieur, menuiserie et agencement sur mesure' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Amélioration énergétique et audit DPE' } }
        ]
      }
    };

    this.setJsonLd(localBusiness, 'schema-local-business');
  }

  /**
   * Schéma Schema.org spécifique à une Réalisation / Chantier
   */
  setProjectSchema(project: any): void {
    if (!project) return;

    const locLower = (project.location || '').toLowerCase();
    const is78 = locLower.includes('saint-germain') || locLower.includes('78') || locLower.includes('versailles') || locLower.includes('vésinet') || locLower.includes('saint-cloud') === false && locLower.includes('paris') === false;
    const deptInfo = is78 ? 'Yvelines (78)' : (locLower.includes('paris') ? 'Paris (75)' : 'Hauts-de-Seine (92)');

    const projectUrl = `${this.baseUrl}/nos-realisations/${project.slug}`;

    const projectSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Project',
          '@id': `${projectUrl}#project`,
          name: project.title,
          description: project.shortDescription,
          url: projectUrl,
          image: project.featuredImages?.[0] || project.coverImage || '',
          locationCreated: {
            '@type': 'Place',
            name: `${project.location}, ${deptInfo}`,
            address: {
              '@type': 'PostalAddress',
              addressLocality: project.location,
              addressRegion: deptInfo,
              addressCountry: 'FR'
            }
          },
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            '@id': `${this.baseUrl}/#localbusiness`,
            name: 'Ma Rénovation Immobilière',
            telephone: '+33130610606',
            url: this.baseUrl
          },
          keywords: [
            `Rénovation ${project.location}`,
            'Extension maison 78',
            'Rénovation Saint-Germain-en-Laye',
            ...(project.renovationTypes || [])
          ]
        },
        {
          '@type': 'CreativeWork',
          '@id': `${projectUrl}#case-study`,
          headline: `${project.title} à ${project.location}`,
          description: project.shortDescription,
          image: project.featuredImages?.[0] || project.coverImage || '',
          author: {
            '@type': 'Organization',
            name: 'Ma Rénovation Immobilière'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Ma Rénovation Immobilière',
            logo: {
              '@type': 'ImageObject',
              url: `${this.baseUrl}/images/logos/ma-renovation-immobiliere.svg`
            }
          },
          mainEntityOfPage: projectUrl
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${projectUrl}#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Accueil',
              item: this.baseUrl
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Nos Réalisations',
              item: `${this.baseUrl}/nos-realisations`
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: `${project.title} à ${project.location}`,
              item: projectUrl
            }
          ]
        }
      ]
    };

    this.setJsonLd(projectSchema, 'schema-project-detail');
  }

  /**
   * Application complète du SEO Programmatique Local pour une fiche chantier
   */
  applyProjectSeo(project: any): void {
    if (!project) return;

    const locLower = (project.location || '').toLowerCase();
    const isSGL = locLower.includes('saint-germain');
    const is78 = isSGL || locLower.includes('yvelines') || locLower.includes('versailles') || locLower.includes('poissy') || locLower.includes('vésinet');
    const deptTag = is78 ? '78' : (locLower.includes('paris') ? '75' : '92');

    // Title optimisé pour le référencement programmatique local
    let title: string;
    if (isSGL) {
      title = `${project.title} à Saint-Germain-en-Laye (78) | Rénovation & Extension MRI`;
    } else {
      title = `${project.title} à ${project.location} (${deptTag}) | Rénovation Immobilière MRI`;
    }

    // Extraction des chiffres clés pour enrichir la meta description
    const surface = project.keyFigures?.find((k: any) => k.value?.includes('m²'))?.value;
    const dpe = project.keyFigures?.find((k: any) => k.value?.includes('DPE'))?.value;

    const surfaceText = surface ? ` (${surface})` : '';
    const performanceText = dpe ? ` - ${dpe}` : '';

    const description = `Découvrez la réalisation : ${project.title} à ${project.location}${surfaceText}${performanceText}. Spécialiste en rénovation complète et extension de maison dans les Yvelines (78) et l'Ouest Parisien par Ma Rénovation Immobilière.`;

    const keywords = [
      `Rénovation ${project.location}`,
      'Rénovation Saint-Germain-en-Laye',
      'Extension maison 78',
      'Entreprise générale de bâtiment 78',
      'Rénovation complète Île-de-France',
      ...(project.renovationTypes || [])
    ];

    // Mise à jour des Meta, Title, Canonical, OpenGraph
    this.updateMeta({
      title,
      description,
      keywords,
      image: project.featuredImages?.[0] || project.coverImage || ''
    });

    // Injection Schema.org/Project et LocalBusiness
    this.setProjectSchema(project);
  }
}
