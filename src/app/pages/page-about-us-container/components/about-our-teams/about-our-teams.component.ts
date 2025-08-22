import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-our-teams',
  templateUrl: './about-our-teams.component.html',
  styleUrl: './about-our-teams.component.scss',
  imports: [
    NgOptimizedImage
  ]
})

export class AboutOurTeamsComponent {

  protected readonly teams = [
    {
      image: "images/home/hero-carousel/maison.jpg",
      name: "Jean Arthur",
      position: "Sales manager"
    },
    {
      image: "images/home/hero-carousel/maison.jpg",
      name: "Jean Arthur",
      position: "Sales manager"
    },
    {
      image: "images/home/hero-carousel/maison.jpg",
      name: "Jean Arthur",
      position: "Sales manager"
    },
    {
      image: "images/home/hero-carousel/maison.jpg",
      name: "Jean Arthur",
      position: "Sales manager"
    },
    {
      image: "images/home/hero-carousel/maison.jpg",
      name: "Jean Arthur",
      position: "Sales manager"
    },
    {
      image: "images/home/hero-carousel/maison.jpg",
      name: "Jean Arthur",
      position: "Sales manager"
    }
  ]
}
