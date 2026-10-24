import { RenderMode, ServerRoute } from '@angular/ssr';
import { PROJECTS } from './shared/constants/projects.constant';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'nos-realisations/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return PROJECTS.map(p => ({ slug: p.slug }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
