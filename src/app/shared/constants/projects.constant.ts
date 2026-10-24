import { Project } from "../../core/models/project";

export const PROJECTS: Project[] = [

  {
    id: 1,
    slug: 'villa-contemporaine-saint-cloud',
    isTop: true,

    title: 'Transformation d’une villa contemporaine',
    location: 'Saint-Cloud',

    shortDescription:
      'Rénovation complète d’une villa de 350 m² avec restructuration des volumes et amélioration énergétique ambitieuse.',

    introDescription: [
      "Cette villa contemporaine bénéficiait d’un emplacement privilégié et d’une structure saine, mais son organisation intérieure ne correspondait plus aux usages d’une famille moderne.",
      "Notre mission consistait à transformer l’espace, améliorer la performance énergétique et valoriser durablement le bien."
    ],

    featuredImages: [
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg'
    ],
    featuredImageAlts: [
      'Façade extérieure et restructuration contemporaine de villa à Saint-Cloud',
      'Restructuration du séjour cathédrale avec verrière d’angle et baies vitrées à Saint-Cloud',
      'Cuisine d’architecte ouverte et agencement haut de gamme sur mesure',
      'Suite parentale contemporaine et finitions soignées en Île-de-France'
    ],
    coverImage:
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',

    renovationTypes: [
      'Restructuration intérieure',
      'Isolation thermique',
      'Domotique',
      'Menuiserie sur-mesure'
    ],

    keyFigures: [
      { icon: 'pi pi-home', value: '350 m²' },
      { icon: 'pi pi-clock', value: '8 mois' },
      { icon: 'pi pi-tag', value: '890 000 €' },
      { icon: 'pi pi-chart-line', value: 'DPE E → A' }
    ],

    sections: [

      {
        id: 'overview',
        type: 'overview',
        navLabel: 'Vue d’ensemble',
        title: 'Une villa au potentiel remarquable',
        content: [

          "Située à Saint-Cloud, dans un quartier résidentiel recherché, cette villa contemporaine de 350 m² bénéficiait d’un emplacement privilégié et d’un fort potentiel architectural.",

          "Les propriétaires, un couple avec trois enfants, souhaitaient adapter la maison à leur mode de vie actuel, tout en conservant son identité et son élégance d’origine.",

          "Si la structure du bâtiment était saine, l’organisation intérieure était devenue inadaptée : espaces cloisonnés, circulation peu fluide et luminosité insuffisamment exploitée.",

          "Au-delà d’une simple modernisation esthétique, il était nécessaire d’intervenir pour améliorer durablement le confort, la performance énergétique et la cohérence globale des volumes.",

          "L’enjeu consistait donc à transformer cette maison en un lieu de vie contemporain, lumineux et performant, sans dénaturer son architecture existante."
        ],
        images: [
          {
            src: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg'
          }
        ]
      },

      {
        id: 'challenges',
        type: 'challenges',
        navLabel: 'Les enjeux',
        title: 'Des contraintes à anticiper',
        content: [
          "Avant d’engager les travaux, plusieurs contraintes majeures ont été identifiées. Elles conditionnaient la faisabilité du projet et nécessitaient une approche rigoureuse."
        ],

        highlights: [
          { text: "Murs porteurs centraux limitant l’ouverture des volumes" },
          { text: "Performance énergétique insuffisante au regard des standards actuels" },
          { text: "Installations électriques et plomberie nécessitant une mise aux normes complète" },
          { text: "Arbitrage budgétaire nécessaire pour concilier ambition et maîtrise financière" }
        ]
      },

      {
        id: 'audit',
        type: 'audit',
        navLabel: 'Audit initial',
        title: 'Analyse technique complète',
        content: [
          "Avant le lancement du chantier, une phase d’analyse approfondie a été menée afin de sécuriser chaque décision technique et budgétaire.",
          "Notre objectif était d’éliminer toute zone d’incertitude et de garantir la faisabilité du projet dans les délais annoncés."
        ],

        actions: [
          { text: "Étude structurelle réalisée avec un bureau d’ingénierie indépendant" },
          { text: "Diagnostic thermique détaillé et projection énergétique" },
          { text: "Analyse complète des réseaux électriques et plomberie" },
          { text: "Chiffrage détaillé lot par lot avec validation budgétaire" },
          { text: "Planification précise des phases de chantier" }
        ]
        ,
        images: [
          {
            src: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg'
          },
          {
            src: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg'
          }
        ]
      },

      {
        id: 'structural',
        type: 'structural',
        navLabel: 'Travaux structurels',
        title: 'Ouverture et renforcement',
        content: [
          "Pour transformer radicalement les espaces de vie, il a été nécessaire d’intervenir sur plusieurs éléments porteurs de la maison.",

          "L’objectif était d’ouvrir les volumes et de créer une continuité visuelle entre les différentes pièces, tout en garantissant une parfaite stabilité structurelle.",

          "Ces travaux exigeaient une coordination étroite entre le bureau d’étude structure, l’entreprise générale et le maître d’ouvrage."
        ],

        actions: [
          { text: "Ouverture de deux murs porteurs au rez-de-chaussée afin de créer un espace traversant de 75 m²" },
          { text: "Pose de poutres métalliques IPN dimensionnées selon calculs de charge" },
          { text: "Renforcement des planchers bois existants pour garantir leur capacité portante" },
          { text: "Création de nouveaux linteaux structurels au niveau des baies vitrées" }
        ],

        images: [
          {
            src: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg",
            alt: "Ouverture d’un mur porteur avec étais de soutien"
          },
          {
            src: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg",
            alt: "Pose de poutre métallique IPN"
          }
        ],

        technicalNote:
          "L’ensemble des calculs de charge et des dimensionnements métalliques a été validé par un bureau d’étude structure indépendant. Les travaux ont été réalisés conformément aux normes en vigueur et couverts par la garantie décennale."
      },
      {
        id: 'before-after',
        type: 'before-after',
        navLabel: 'Avant / Après',
        title: 'Une transformation radicale des espaces',

        content: [
          "Les volumes ont été entièrement repensés afin d’ouvrir les perspectives et d’optimiser la lumière naturelle.",
          "La comparaison ci-dessous illustre l’ampleur des transformations réalisées."
        ],

        pairs: [
          {
            before: {
              src: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
              alt: 'Séjour avant travaux'
            },
            after: {
              src: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
              alt: 'Séjour après travaux'
            }
          },
          {
            before: {
              src: 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg',
              alt: 'Cuisine avant travaux'
            },
            after: {
              src: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg',
              alt: 'Cuisine après travaux'
            }
          }
        ]
      },
      {
        id: 'performance',
        type: 'performance',
        navLabel: 'Performance énergétique',
        title: 'Une amélioration mesurable',
        content: [
          "Au-delà de la transformation esthétique et structurelle, l’objectif était d’améliorer significativement la performance énergétique du logement.",
          "Les travaux engagés ont permis d’atteindre un niveau de confort thermique supérieur tout en réduisant les consommations."
        ],

        metrics: [
          { label: "Classe énergétique (DPE)", before: "E", after: "B" },
          { label: "Consommation annuelle", before: "28 000 kWh", after: "16 500 kWh" },
          { label: "Émissions CO₂", before: "7.2 t/an", after: "3.9 t/an" }
        ],
        resultText: [
          "Réduction estimée de 40 % des dépenses énergétiques.",
          "Valorisation patrimoniale immédiate du bien.",
          "Confort thermique homogène été comme hiver."
        ]
      },
      {
        id: 'testimonial',
        type: 'testimonial',
        navLabel: 'Témoignage',
        title: 'Retour d’expérience du client',

        quote: "Nous redoutions les dépassements budgétaires et les retards. Le chantier s’est déroulé exactement comme annoncé. Le suivi a été rigoureux et transparent du premier rendez-vous jusqu’à la remise des clés.",

        clientName: "M. & Mme Lefèvre",
        clientRole: "Propriétaires",
      }
    ]
  },

  {
    id: 2,
    slug: 'appartement-haussmann-paris',
    isTop: true,

    title: 'Rénovation d’un appartement haussmannien',
    location: 'Paris 16e',

    shortDescription:
      'Modernisation complète d’un appartement haussmannien avec conservation du cachet d’origine.',

    introDescription: [
      "L’appartement disposait de moulures et d’un parquet d’époque remarquables.",
      "L’objectif était de moderniser les installations techniques sans altérer le patrimoine architectural."
    ],

    featuredImages: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg'
    ],
    featuredImageAlts: [
      'Restauration de moulures et parquet en point de Hongrie dans un appartement haussmannien à Paris 16e',
      'Double séjour lumineux avec bibliothèque sur mesure et cheminée d’époque à Paris',
      'Rénovation contemporaine des pièces d’eau et isolation phonique renforcée'
    ],
    coverImage:
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',

    renovationTypes: [
      'Restauration patrimoniale',
      'Électricité',
      'Plomberie',
      'Isolation acoustique'
    ],

    keyFigures: [
      { icon: 'pi pi-home', value: '180 m²' },
      { icon: 'pi pi-clock', value: '5 mois' },
      { icon: 'pi pi-tag', value: '420 000 €' },
      { icon: 'pi pi-chart-line', value: 'DPE F → C' }
    ],
    sections: []
  },

  {
    id: 3,
    slug: 'renovation-extension-maison-saint-germain-en-laye',
    isTop: true,

    title: 'Rénovation complète et extension de maison',
    location: 'Saint-Germain-en-Laye',

    shortDescription:
      'Rénovation énergétique globale et extension contemporaine de 220 m² dans un quartier résidentiel de Saint-Germain-en-Laye (78).',

    introDescription: [
      "Située dans un quartier calme et arboré de Saint-Germain-en-Laye, cette maison familiale des années 1970 offrait un potentiel exceptionnel mais manquait cruellement d'ouverture sur l'extérieur.",
      "Notre intervention : une rénovation tous corps d’état combinée à une extension contemporaine à toit plat, métamorphosant l’espace de vie tout en optimisant la performance énergétique."
    ],

    featuredImages: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg'
    ],
    featuredImageAlts: [
      'Extension contemporaine de maison à toit plat et baies aluminium à Saint-Germain-en-Laye',
      'Rénovation thermique globale ITE et surélévation de toiture dans les Yvelines 78',
      'Pièce de vie lumineuse ouverte de plain-pied sur terrasse et jardin paysager'
    ],
    coverImage:
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',

    renovationTypes: [
      'Extension maison 78',
      'Rénovation Saint-Germain-en-Laye',
      'Surélévation toiture',
      'Isolation thermique ITE',
      'Menuiseries aluminium'
    ],

    keyFigures: [
      { icon: 'pi pi-home', value: '220 m²' },
      { icon: 'pi pi-clock', value: '6 mois' },
      { icon: 'pi pi-tag', value: '480 000 €' },
      { icon: 'pi pi-chart-line', value: 'DPE E → A' }
    ],

    sections: [
      {
        id: 'overview',
        type: 'overview',
        navLabel: 'Vue d’ensemble',
        title: 'Une extension harmonieuse et lumineuse',
        content: [
          "Le projet visait à créer une vaste pièce de réception baignée de lumière naturelle, connectée de plain-pied avec la terrasse et le jardin paysager.",
          "L'agrandissement en ossature bois haute performance a permis d'ajouter 60 m² de surface habitable sans alourdir la structure initiale du bâti.",
          "Les espaces intérieurs ont été entièrement repensés avec une cuisine ouverte d'architecte, des parquets en chêne massif et une suite parentale avec dressing sur mesure."
        ],
        images: [
          {
            src: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg'
          }
        ]
      },
      {
        id: 'challenges',
        type: 'challenges',
        navLabel: 'Les enjeux',
        title: 'Défis techniques & règles d’urbanisme locales',
        content: [
          "Intervenir à Saint-Germain-en-Laye implique le strict respect des règles du Plan Local d'Urbanisme (PLU) et de la proximité de zones sauvegardées."
        ],
        highlights: [
          { text: "Conformité stricte avec les exigences architecturales du PLU de Saint-Germain-en-Laye" },
          { text: "Intégration d’une verrière d’angle sans rupture thermique" },
          { text: "Raccordement des réseaux et plancher chauffant basse température" },
          { text: "Chantier en site occupé partiel avec planning millimétré" }
        ]
      },
      {
        id: 'performance',
        type: 'performance',
        navLabel: 'Performance énergétique',
        title: 'Un saut énergétique spectaculaire : DPE E vers A',
        content: [
          "Grâce à l’isolation thermique par l’extérieur, l’installation d’une pompe à chaleur air-eau et le remplacement de l’intégralité des menuiseries par du triple vitrage aluminium, le logement atteint les plus hauts standards de confort d'aujourd'hui."
        ],
        metrics: [
          { label: "Classe énergétique (DPE)", before: "E", after: "A" },
          { label: "Consommation estimée", before: "24 500 kWh", after: "8 200 kWh" },
          { label: "Émissions carbone", before: "5.8 t/an", after: "1.2 t/an" }
        ],
        resultText: [
          "Gain de plus de 60 % sur la facture d'énergie annuelle.",
          "Confort thermique d'été exceptionnel grâce aux brise-soleil orientables motorisés.",
          "Plus-value immobilière majeure sur le marché de Saint-Germain-en-Laye."
        ]
      },
      {
        id: 'testimonial',
        type: 'testimonial',
        navLabel: 'Avis client',
        title: 'Ce que disent les propriétaires',
        quote: "L'équipe de Ma Rénovation Immobilière a su nous guider avec un grand professionnalisme dès le dépôt du permis de construire jusqu'à la dernière finition de peinture. Notre maison a changé de dimension tout en restant très chaleureuse.",
        clientName: "Mme Claire B.",
        clientRole: "Propriétaire à Saint-Germain-en-Laye"
      }
    ]
  }
];