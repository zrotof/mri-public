import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BlogArticle, BlogRubic } from '../../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private readonly blogRubrics = [
    {
      id: 1,
      full_name: "Tous",
      short_name: "Tous"
    },
    {
      id: 2,
      full_name: "Études de Cas & Réalisations",
      short_name: "Cas Clients"
    },
    {
      id: 3,
      full_name: "Design & Aménagement",
      short_name: "Aménagement"
    },
    {
      id: 4,
      full_name: "Conseils & Guides",
      short_name: "Conseils"
    },
    {
      id: 5,
      full_name: "Budget & Financement",
      short_name: "Budget"
    },
    {
      id: 6,
      full_name: "Réglementation & Aides",
      short_name: "Légal & Aides"
    },
    {
      id: 7,
      full_name: "Matériaux & Techniques",
      short_name: "Matériaux"
    },
    {
      id: 8,
      full_name: "Performance Énergétique",
      short_name: "Énergie"
    },
    {
      id: 9,
      full_name: "Écologie & Durabilité",
      short_name: "Écologie"
    }
  ];

  private readonly blogArticles: BlogArticle[] = [
  {
    id: 1,
    image_url: 'images/home/hero-carousel/maison-2.jpg',
    title: '5 étapes pour optimiser votre budget de rénovation',
    publish_date: new Date('2025-10-01'),
    reading_time_minutes: 7,
    category: this.blogRubrics[4].full_name // Budget
  },
  {
    id: 2,
    image_url: 'images/home/hero-carousel/maison-4.jpg',
    title: 'Étude de cas : Transformation d’une cuisine des années 80',
    publish_date: new Date('2025-09-20'),
    reading_time_minutes: 12,
    category: this.blogRubrics[1].full_name // Cas Clients
  },
  {
    id: 3,
    image_url: 'images/home/hero-carousel/maison-3.webp',
    title: 'Tendances 2026 : Le retour des matériaux naturels',
    publish_date: new Date('2025-11-25'),
    reading_time_minutes: 5,
    category: this.blogRubrics[2].full_name // Design
  },
  {
    id: 4,
    image_url: 'images/home/hero-carousel/maison.jpg',
    title: 'MaPrimeRénov\' : Comprendre les conditions d’éligibilité',
    publish_date: new Date('2025-11-20'),
    reading_time_minutes: 9,
    category: this.blogRubrics[5].full_name // Réglementation
  }
];


  getBlogRubrics() : Observable<BlogRubic[]> {
    return of(this.blogRubrics.map((rubric, index) => ({
      ...rubric,
      isActive: index === 0 ? true : false
    })))
  }

  getBlogArticlesByRubrics(rubricId : number): Observable<BlogArticle[]> {
    return of(this.blogArticles.filter((article) => {
      return rubricId === 1 || article.category === this.blogRubrics[rubricId - 1].full_name;
    }));
  }
}
