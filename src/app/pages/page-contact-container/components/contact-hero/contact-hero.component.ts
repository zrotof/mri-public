import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-hero',
  templateUrl: './contact-hero.component.html',
  styleUrl: './contact-hero.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [RouterLink]
})
export class ContactHeroComponent {}
