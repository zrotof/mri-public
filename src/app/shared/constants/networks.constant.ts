export interface NETWORK {
    icon: string;
    href: string;
    longLabel: string;
    shortLabel: string;
}

export const NETWORKS: NETWORK[] = [
    {
        href: "tel:+33623736056",
        longLabel: "+33 06 23 73 60 56",
        shortLabel: "Téléphone",
        icon: "faPhone"
    },
    {
        href: "mailto:contact&#64;mri-idf.com",
        longLabel: "contact@mri-idf.com",
        shortLabel: "Email",
        icon: "faEnvelope"
    },
    {
        href: "http://www.google.com/maps/search/?api=1&query=45+Rue+de+la+Liberté,+78100+Saint-Germain-en-Laye",
        longLabel: "45 Rue de la Liberté, 78100 Saint - Germain - en - Laye",
        shortLabel: "Adresse",
        icon: "faLocationDot"
    },
    {
        href: "https://www.instagram.com/ma_renov_immo/",
        longLabel: "+33 06 23 73 60 56",
        shortLabel: "Instagram",
        icon: "faInstagram"
    },
]