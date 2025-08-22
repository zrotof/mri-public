import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-road-map-process',
  imports: [CommonModule],
  templateUrl: './road-map-process.component.html',
  styleUrl: './road-map-process.component.scss'
})
export class RoadMapProcessComponent {

works = [
    {
      image: "images/home/hero-carousel/maison.jpg",
      title: "Rénovation de la plomberie et de l'électricité",
      description: "Transformation d'un vieil appartement en un espace moderne.",
      top: '10%', // Position Y sur la page
      left: '20%'  // Position X sur la page
    },
    {
      image: "images/home/hero-carousel/maison-4.jpg",
      title: "Extension et agrandissement de maison",
      description: "Ajout d'une nouvelle aile pour créer une chambre principale avec salle de bains privative.",
      top: '25%',
      left: '80%'
    },
    {
      image: "images/home/hero-carousel/maison-5.webp",
      title: "Aménagement de cuisines et salles de bains",
      description: "Modernisation complète de la cuisine et de la salle de bains pour une famille.",
      top: '45%',
      left: '15%'
    },
    {
      image: "images/home/hero-carousel/maison-2.jpg",
      title: "Rénovation de toitures et de charpentes",
      description: "Rénovation complète d'une charpente et réfection de la toiture pour une meilleure isolation thermique.",
      top: '65%',
      left: '70%'
    },
    {
      image: "images/home/hero-carousel/maison-3.webp",
      title: "Pose de revêtements de sols et muraux",
      description: "Remplacement du carrelage par un parquet en bois massif et pose d'un nouveau revêtement mural.",
      top: '85%',
      left: '30%'
    }
  ];


}
