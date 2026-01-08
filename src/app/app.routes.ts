import { Routes } from '@angular/router';
import { PageHomeContainerComponent } from './pages/page-home-container/page-home-container.component';
import { PageUnderMaintenanceComponent } from './pages/page-under-maintenance/page-under-maintenance.component';

export const routes: Routes = [

    {
        path: "",
        component: PageUnderMaintenanceComponent
    },
    {
        path: "**",
        redirectTo: "",
        pathMatch: "full"
    }
];
