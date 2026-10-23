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
      title: "Aménagement de cuisine",
      description: "Conception de cuisines sur mesure, ergonomiques et design, alliant esthétisme et équipements modernes."
    },
    {
      icon: "images/about-us/salle-de-bains.png",
      title: "Aménagement de salle de bain",
      description: "Création d'espaces bien-être optimisés, du choix des sanitaires à la pose de douches à l'italienne."
    },
    {
      icon: "images/about-us/echafaudage.png",
      title: "Aménagements et extension",
      description: "Agrandissement de votre surface habitable et optimisation des volumes pour valoriser votre patrimoine."
    },
    {
      icon: "images/about-us/decoration-interieur.png",
      title: "Décoration d'intérieur et agencement",
      description: "Conseils en harmonie des couleurs, choix du mobilier et agencement personnalisé de vos pièces."
    },
    {
      icon: "images/about-us/electricite.png",
      title: "Électricité",
      description: "Mise aux normes de vos installations, raccordements sécurisés et intégration d'éclairages modernes."
    },
    {
      icon: "images/about-us/rouleau-de-peinture.png",
      title: "Peinture",
      description: "Finitions soignées, peintures intérieures et extérieures de qualité pour sublimer vos murs."
    },
    {
      icon: "images/about-us/entretien-de-plomberie.png",
      title: "Plomberie",
      description: "Installation, rénovation de tuyauteries et raccordements de tous vos équipements sanitaires."
    },
    {
      icon: "images/about-us/loger.png",
      title: "Rénovation complète",
      description: "Remise à neuf intégrale de vos appartements ou maisons, clé en main et de A à Z."
    },
    {
      icon: "images/about-us/grue-a-tour.png",
      title: "Rénovation extérieur",
      description: "Ravalement de façade, aménagements paysagers et modernisation des accès de votre propriété."
    },
    {
      icon: "images/about-us/videosurveillance.png",
      title: "Système de sécurité et alarme",
      description: "Protection de votre habitat par l'installation de caméras, d'alarmes et de solutions connectées."
    },
    {
      icon: "images/about-us/plafond.png",
      title: "Sols et plafonds",
      description: "Pose de parquets, carrelages, faux-plafonds et isolation thermique ou acoustique performante."
    }
];
}
