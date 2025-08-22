import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-about-our-services',
  imports: [],
  templateUrl: './about-our-services.component.html',
  styleUrl: './about-our-services.component.scss'
})
export class AboutOurServicesComponent {

  protected readonly services = [
    {
      icon: "images/about-us/cuisine.png",
      title: "Aménagement de cuisine"
    },
    {
      icon: "images/about-us/salle-de-bains.png",
      title: "Aménagement de salle de bain"
    },
    {
      icon: "images/about-us/echafaudage.png",
      title: "Aménagements et extension"
    },
    {
      icon: "images/about-us/decoration-interieur.png",
      title: "Décoration d'intérieur et agencement"
    },
    {
      icon: "images/about-us/electricite.png",
      title: "Électricité"
    },
    {
      icon: "images/about-us/rouleau-de-peinture.png",
      title: "Peinture"
    },
    {
      icon: "images/about-us/entretien-de-plomberie.png",
      title: "Plomberie"
    },
    {
      icon: "images/about-us/loger.png",
      title: "Rénovation complète"
    },
    {
      icon: "images/about-us/grue-a-tour.png",
      title: "Rénovation extérieur"
    },
    {
      icon: "images/about-us/videosurveillance.png",
      title: "Système de sécurité et alarme"
    },
    {
      icon: "images/about-us/plafond.png",
      title: "Sols et plafonds"
    }
  ]
}
