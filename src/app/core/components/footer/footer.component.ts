import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [
    RouterLink,
    NgOptimizedImage,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ]
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();

  protected readonly socialNetworks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/ma_renov_immo/',
      icon: 'faInstagram'
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/',
      icon: 'faFacebookF'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/',
      icon: 'faLinkedin'
    }
  ];

  protected readonly services = [
    'Rénovation intégrale',
    'Aménagement de cuisine',
    'Aménagement de salle de bain',
    'Extension & Surélévation',
    'Agencement & Décoration',
    'Électricité & Éclairage',
    'Plomberie & Chauffage',
    'Peinture & Revêtements',
    'Sols & Parquets',
    'Rénovation extérieure'
  ];

  protected readonly contactInfo = {
    address: '45 Rue de la Liberté, 78100 Saint-Germain-en-Laye',
    phone: '+33 (0)1 30 61 06 06',
    phoneRaw: '+33130610606',
    email: 'contact@mri-idf.com',
    hours: 'Lun - Ven : 9h00 - 17h30'
  };

  protected readonly navLinks = [
    { label: 'Accueil', path: '/' },
    { label: "L'agence", path: '/agence' },
    { label: 'Nos Réalisations', path: '/nos-realisations' },
    { label: 'Devis Gratuit', path: '/devis-gratuit' },
    { label: 'Contact', path: '/contactez-nous' }
  ];
}
