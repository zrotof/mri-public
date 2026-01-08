import { Routes } from '@angular/router';
import { PageHomeContainerComponent } from './pages/page-home-container/page-home-container.component';

export const routes: Routes = [

    {
        path: "",
        component: PageHomeContainerComponent
    },
    {
        path: "agence",
        loadComponent: () => import('./pages/page-about-us-container/page-about-us-container.component').then(m => m.PageAboutUsContainerComponent),
        data: {
            backgrounded: true
        }
    },
    {
        path: "blog",
        loadComponent: () => import('./pages/page-blog-container/page-blog-container.component').then(m => m.PageBlogContainerComponent),
        data: {
            backgrounded: true
        }
    },
    {
        path: "contactez-nous",
        loadComponent: () => import('./pages/page-contact-container/page-contact-container.component').then(m => m.PageContactContainerComponent),
        data: {
            backgrounded: true
        }
    },
    {
        path: "devis-gratuit",
        loadComponent: () => import('./pages/page-quotation-container/page-quotation-container.component').then(m => m.PageQuotationContainerComponent),
        data: {
            backgrounded: true
        }
    },
    {
        path: "nos-realisations",
        loadComponent: () => import('./pages/page-our-works-container/page-our-works-container.component').then(m => m.PageOurWorksContainerComponent),
        data: {
            backgrounded: true
        }
    },
 
    {
        path: "**",
        redirectTo: "",
        pathMatch: "full"
    }
];
