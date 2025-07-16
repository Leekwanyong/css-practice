export interface CardType {
    icon: string;
    alt: string;
    title: string;
    description?: string[];
    cta: string;
}

export interface CardTypeBadges extends CardType {
    subtitle?: string;
}

export const WHAT_CARD_DATA: CardType[] = [
    {
        icon: "/asset/icon/mobile_web_design.svg",
        alt: "Mobile & Web",
        title: "Mobile & Web Design",
        description: [
            "Need a website or mobile app? I can create",
            "beautiful websites or mobile apps based on your content,",
            "or redesign your old website to improve user engagement or achieve your business goals.",
        ],
        cta: "Get an estimate",
    },
    {
        icon: "/asset/icon/graphicdesign.svg",
        alt: "Graphic Design",
        title: "Graphic Design",
        description: [
            "Need a website or mobile app? I can create",
            "beautiful websites or mobile apps based on your content,",
            "or redesign your old website to improve user engagement or achieve your business goals.",
        ],
        cta: "Get an estimate",
    },
    {
        icon: "/asset/icon/Group1195.svg",
        alt: "Frontend Development",
        title: "Frontend Development",
        description: [
            "Need a website or mobile app? I can create",
            "beautiful websites or mobile apps based on your content,",
            "or redesign your old website to improve user engagement or achieve your business goals.",
        ],
        cta: "Get an estimate",
    },
];

export const BADGES_CARD: CardTypeBadges[] = [
    {
        icon: "/asset/icon/image10.svg",
        alt: "1",
        title: "User Experience Nanodegree",
        subtitle: "The right way to design anything.",
        cta: "View Certificate",
    },
    {
        icon: "/asset/icon/image10.svg",
        alt: "1",
        title: "Available via Upwork",
        subtitle: "Top rated freelancer on upwork",
        cta: "Hire Me",
    },
];
