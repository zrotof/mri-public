import { Component } from '@angular/core';

@Component({
  selector: 'app-about-work-process',
  templateUrl: './about-work-process.component.html',
  styleUrl: './about-work-process.component.scss',
  imports: []
})

export class AboutWorkProcessComponent {

  steps = [
    {
      id: '1',
      title: 'Discovery',
      description: "Let's have a chat about your vision, lifestyle needs, block, budget and expectations.",
      position: 'top'
    },
    {
      id: '4',
      title: 'Finishes',
      description: 'Have a chat with our In-house Interior Designer to finalise your selections and finishes.',
      position: 'bottom'
    },
    {
      id: '2',
      title: 'Design',
      description: 'Let our Award-Winning Designers put pen to paper and design a home that is unique to you.',
      position: 'top'
    },
    {
      id: '5',
      title: 'Building',
      description: "Let's build your unique home. We will guide you through the building journey providing you with the flexibility.",
      position: 'bottom'
    },
    {
      id: '3',
      title: 'Approvals',
      description: 'Sign your preliminary works contract and we will take care of the rest including the approval process.',
      position: 'top'
    }
  ];
}
