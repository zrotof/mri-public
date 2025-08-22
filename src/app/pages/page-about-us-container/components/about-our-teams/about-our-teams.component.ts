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
      image: "images/about-us/teams/boss.jpg",
      name: "Jean Arthur",
      position: "Sales manager"
    },
    {
      image: "images/about-us/teams/alex.jpg",
      name: "Jean Arthur",
      position: "Sales manager"
    },
    {
      image: "images/about-us/teams/tom.webp",
      name: "Jean Arthur",
      position: "Sales manager"
    },
    {
      image: "images/about-us/teams/jean.avif",      
      name: "Jean Arthur",
      position: "Sales manager"
    },
    {
      image: "images/about-us/teams/boss.jpg",      
      name: "Jean Arthur",
      position: "Sales manager"
    },
    {
      image: "images/about-us/teams/boss.jpg",      
      name: "Jean Arthur",
      position: "Sales manager"
    }
  ]
}
