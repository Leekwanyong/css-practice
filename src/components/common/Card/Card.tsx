import type { CardTypeBadges } from "../../../constance/card";
import CardList from "./CardList";

interface CardProps {
    card: CardTypeBadges[];
    isSubtitle?: boolean;
    className?: string;
    imgClass?: string;
}

function Card({ className = "", imgClass = "", isSubtitle = true, card }: CardProps) {
    return (
        <ul className={`flex flex-col px-4 lg:flex-row gap-4 justify-between ${className}`}>
            {card.map((card) => (
                <CardList key={card.title} card={card} imgClass={imgClass} isSubtitle={isSubtitle} />
            ))}
        </ul>
    );
}

export default Card;
