import { Routes } from '@angular/router';
import { PageHomeContainerComponent } from './pages/page-home-container/page-home-container.component';

export const routes: Routes = [
    {
        path: "",
        title: "Ma Rénovation Immobilière | Rénovation & Construction à Saint-Germain-en-Laye",
        component: PageHomeContainerComponent,
        data: {
            description: "Spécialiste de la rénovation générale haut de gamme et de la construction à Saint-Germain-en-Laye et en Île-de-France. Conception, maîtrise d'œuvre et réalisation de vos travaux avec garantie décennale.",
            ogImage: "https://www.ma-renovation-immobiliere.com/images/maintenance/mri.jpg"
        }
    },
    {
        path: "agence",
        title: "L'Agence & Notre Savoir-Faire | Ma Rénovation Immobilière",
        loadComponent: () => import('./pages/page-about-us-container/page-about-us-container.component').then(m => m.PageAboutUsContainerComponent),
        data: {
            backgrounded: true,
            description: "Découvrez notre agence de rénovation générale à Saint-Germain-en-Laye. Nos artisans d'art, conducteurs de travaux et architectes concrétisent vos projets clés en main.",
            ogImage: "https://www.ma-renovation-immobiliere.com/images/maintenance/mri.jpg"
        }
    },
    // Route Blog temporairement désactivée (réservée pour une activation ultérieure)
    // {
    //     path: "blog",
    //     title: "Conseils & Guides Rénovation Immobilière | Le Blog MRI",
    //     loadComponent: () => import('./pages/page-blog-container/page-blog-container.component').then(m => m.PageBlogContainerComponent),
    //     data: {
    //         backgrounded: true,
    //         description: "Retrouvez tous nos conseils d'experts, guides budgétaires, tendances design et démarches d'aides à la rénovation énergétique (MaPrimeRénov').",
    //         ogImage: "https://www.ma-renovation-immobiliere.com/images/maintenance/mri.jpg"
    //     }
    // },
    {
        path: "contactez-nous",
        title: "Contactez Notre Agence | Ma Rénovation Immobilière",
        loadComponent: () => import('./pages/page-contact-container/page-contact-container.component').then(m => m.PageContactContainerComponent),
        data: {
            backgrounded: true,
            description: "Contactez notre équipe de maîtres d'œuvre et artisans à Saint-Germain-en-Laye par téléphone, courriel ou directement à l'agence pour échanger sur vos projets.",
            ogImage: "https://www.ma-renovation-immobiliere.com/images/maintenance/mri.jpg"
        }
    },
    {
        path: "devis-gratuit",
        title: "Votre Devis Gratuit de Rénovation sous 48h | MRI",
        loadComponent: () => import('./pages/page-quotation-container/page-quotation-container.component').then(m => m.PageQuotationContainerComponent),
        data: {
            backgrounded: true,
            description: "Décrivez votre projet et recevez votre estimation détaillée lot par lot sous 48 heures ouvrées. Visite technique préalable offerte et sans engagement.",
            ogImage: "https://www.ma-renovation-immobiliere.com/images/maintenance/mri.jpg"
        }
    },
    {
        path: "nos-realisations",
        data: {
            backgrounded: true
        },
        children: [
            {
                path: ":slug",
                loadComponent: () => import('./pages/page-our-works-details-container/page-our-works-details-container.component'),
            },
            {
                path: "",
                title: "Nos Réalisations & Chantiers de Rénovation | MRI",
                loadComponent: () => import('./pages/page-our-works-container/page-our-works-container.component').then(m => m.PageOurWorksContainerComponent),
                data: {
                    description: "Découvrez notre portfolio de chantiers de prestige en Île-de-France : réhabilitation complète de villas contemporaines, appartements haussmanniens et extensions.",
                    ogImage: "https://www.ma-renovation-immobiliere.com/images/maintenance/mri.jpg"
                }
            }
        ]
    },
    {
        path: "mentions-legales",
        title: "Mentions Légales | Ma Rénovation Immobilière",
        loadComponent: () => import('./pages/page-legal-notice/page-legal-notice.component').then(m => m.PageLegalNoticeComponent),
        data: {
            backgrounded: true,
            description: "Consultez les mentions légales de l'entreprise générale de bâtiment Ma Rénovation Immobilière à Saint-Germain-en-Laye (78).",
            ogImage: "https://www.ma-renovation-immobiliere.com/images/maintenance/mri.jpg"
        }
    },
    {
        path: "politique-de-confidentialite",
        title: "Politique de Confidentialité & RGPD | Ma Rénovation Immobilière",
        loadComponent: () => import('./pages/page-privacy-policy/page-privacy-policy.component').then(m => m.PagePrivacyPolicyComponent),
        data: {
            backgrounded: true,
            description: "Politique de protection des données personnelles, conformité RGPD et gestion des cookies Google Tag Manager de Ma Rénovation Immobilière.",
            ogImage: "https://www.ma-renovation-immobiliere.com/images/maintenance/mri.jpg"
        }
    },

    {
        path: "**",
        redirectTo: "",
        pathMatch: "full"
    }
];
