import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { title } from 'process';
import { count } from 'console';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrl: './work-list.component.scss',
  imports: [
    NgOptimizedImage
  ]
})

export class WorkListComponent {

  menus = [
    {
      title: "Tous",
      count: 100,
      isActive: true
    },
    {
      title: "Cuisine",
      count: 30,
      isActive: false
    },
    {
      title: "Aménagement et extension",
      count: 25,
      isActive: false
    },
    {
      title: "Décoration d'intérieur",
      count: 20,
      isActive: false
    },
    {
      title:"Peinture",
      count: 10,
      isActive: false
    },
    {
      title: "Rénovation complète",
      count: 15,
      isActive: false
    },
    {
      title: "Rénovation extérieur",
      count: 5,
      isActive: false
    },
    {
      title:"Sols et plafonds",
      count: 8,
      isActive: false
    },
    {
      title:"Système de securité alarme",
      count: 12,
      isActive: false
    }
                   
                  ]

  works = [
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
      title: "Extension et agrandissement de maison",
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

  onFilterClicked(index : number) {
    if(!this.menus[index].isActive) {
      this.menus.forEach((menu, i) => {
        if(i === index) {
          menu.isActive = true;
        }
        else{
          menu.isActive = false;
        }
      })
    }
  }
}
