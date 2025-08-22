import { Routes } from '@angular/router';
import { PageHomeContainerComponent } from './pages/page-home-container/page-home-container.component';
import { PageAboutUsContainerComponent } from './pages/page-about-us-container/page-about-us-container.component';

export const routes: Routes = [
    {
        path: "",
        component: PageHomeContainerComponent
    },
    {
        path: "agence",
        loadComponent: () => import ('./pages/page-about-us-container/page-about-us-container.component').then(m => m.PageAboutUsContainerComponent)
    },
    {
        path: "devis-gratuit",
        loadComponent: () => import ('./pages/page-quotation-container/page-quotation-container.component').then(m => m.PageQuotationContainerComponent)
    }
];
