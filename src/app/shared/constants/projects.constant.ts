export interface Project {
    id: number,
    coverImage: string,
    isTop: boolean,
    images: string[],
    title: string,
    location: string,
    duration: string,
    description: string,
    renovationTypes: string[]
}

export const PROJECTS: Project[] = [
    {
        id: 1,
        coverImage: "https://images.pexels.com/photos/3845692/pexels-photo-3845692.jpeg",
        isTop: true,
        images: [
            "https://images.pexels.com/photos/3845692/pexels-photo-3845692.jpeg",
            "https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg",
            "https://images.pexels.com/photos/210647/pexels-photo-210647.jpeg"
        ],
        title: "Rénovation complète d’un appartement Haussmannien",
        location: "Paris 16e",
        duration: "Durée : 5 mois",
        description: "Modernisation d’un appartement haussmannien en conservant le cachet d’origine. Remplacement total des réseaux électriques et plomberie, isolation acoustique renforcée, restauration des moulures et pose d’un parquet en chêne massif.",
        renovationTypes: ["Électricité", "Plomberie", "Isolation", "Restauration"]
    },
    {
        id: 2,
        coverImage: "https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg",
        images: [
            "https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg",
            "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
            "https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg"
        ],
        isTop: true,
        title: "Création d’une salle de bain haut de gamme",
        location: "Boulogne-Billancourt",
        duration: "Durée : 6 semaines",
        description: "Conception d’une salle de bain sur-mesure avec douche à l’italienne, carrelage grand format et robinetterie haut de gamme. Optimisation des espaces et installation d’un chauffe-eau thermodynamique.",
        renovationTypes: ["Plomberie", "Carrelage", "Optimisation d’espace"]
    },
    {
        id: 3,
        coverImage: "https://images.pexels.com/photos/210620/pexels-photo-210620.jpeg",
        images: [
            "https://images.pexels.com/photos/210620/pexels-photo-210620.jpeg",
            "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
        ],
        isTop: true,
        title: "Extension d’une maison individuelle",
        location: "Versailles",
        duration: "Durée : 3 mois",
        description: "Construction d’une extension de 35 m² comprenant un salon lumineux avec baies vitrées coulissantes. Renforcement de la structure existante et mise aux normes thermiques RT2020.",
        renovationTypes: ["Maçonnerie", "Charpente", "Extension", "Menuiserie extérieure"]
    },
    {
        id: 4,
        coverImage: "https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg",
        images: [
            "https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg",
            "https://images.pexels.com/photos/273238/pexels-photo-273238.jpeg",
            "https://images.pexels.com/photos/272474/pexels-photo-272474.jpeg"
        ],
        isTop: true,

        title: "Transformation d’une cuisine ancienne",
        location: "Rueil-Malmaison",
        duration: "Durée : 2 mois",
        description: "Refonte totale d’une cuisine : démolition, nouvelle implantation, création de points d’eau, installation d’un éclairage LED et fabrication de meubles sur-mesure dans un style contemporain.",
        renovationTypes: ["Plomberie", "Électricité", "Menuiserie", "Design intérieur"]
    },
    {
        id: 5,
        coverImage: "https://images.pexels.com/photos/534185/pexels-photo-534185.jpeg",
        images: [
            "https://images.pexels.com/photos/534185/pexels-photo-534185.jpeg",
            "https://images.pexels.com/photos/373965/pexels-photo-373965.jpeg"
        ],
        isTop: true,

        title: "Rénovation d’un immeuble de 4 étages",
        location: "Nanterre",
        duration: "Durée : 7 mois",
        description: "Rénovation des parties communes, mise aux normes incendie, reprise de la cage d’escalier, ravalement de façade et rénovation complète des réseaux électriques et plomberie.",
        renovationTypes: ["Ravalement", "Sécurité incendie", "Plomberie", "Électricité"]
    },
    {
        id: 6,
        coverImage: "https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg",
        images: [
            "https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg",
            "https://images.pexels.com/photos/373965/pexels-photo-373965.jpeg"
        ],
        isTop: true,

        title: "Amélioration énergétique d’une maison",
        location: "Montigny-le-Bretonneux",
        duration: "Durée : 1 mois",
        description: "Isolation des combles, remplacement des fenêtres par des modèles double vitrage avec rupture de pont thermique, installation d’une VMC hygroréglable.",
        renovationTypes: ["Isolation", "Fenêtres", "Ventilation", "Performance énergétique"]
    },
    {
        id: 7,
        coverImage: "https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg",
        images: [
            "https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg",
            "https://images.pexels.com/photos/210620/pexels-photo-210620.jpeg"
        ],
        isTop: true,

        title: "Création d’une terrasse en bois exotique",
        location: "Poissy",
        duration: "Durée : 3 semaines",
        description: "Construction d’une terrasse extérieure en bois exotique résistant aux intempéries. Intégration d’un éclairage LED au sol et d’un garde-corps sur-mesure.",
        renovationTypes: ["Menuiserie", "Aménagement extérieur", "Terrasse"]
    },
    {
        id: 8,
        coverImage: "https://images.pexels.com/photos/534174/pexels-photo-534174.jpeg",
        images: [
            "https://images.pexels.com/photos/534174/pexels-photo-534174.jpeg",
            "https://images.pexels.com/photos/373965/pexels-photo-373965.jpeg",
            "https://images.pexels.com/photos/210647/pexels-photo-210647.jpeg"
        ],
        isTop: true,
        title: "Aménagement d’un local commercial",
        location: "La Défense",
        duration: "Durée : 2 mois",
        description: "Création d’un espace commercial moderne : cloisons vitrées, sol en béton ciré, mise aux normes PMR, système électrique renforcé pour forte affluence.",
        renovationTypes: ["Électricité", "Cloisons", "Sol", "Aménagement intérieur"]
    }
];
