import type { CardTypeBadges } from "../../../constance/card";
import Description from "../Text/Description";

interface CardListProps {
    card: CardTypeBadges;
    imgClass?: string;
    isSubtitle: boolean;
}

function CardList({ imgClass = "", isSubtitle = true, card }: CardListProps) {
    return (
        <li>
            <img src={card.icon} alt={card.alt} className={imgClass} />
            <div className="flex flex-col gap-4">
                <Description size="lg" color="primary" className="font-bold mt-4">
                    {card.title}
                </Description>
                {isSubtitle ? (
                    <Description>{card.subtitle}</Description>
                ) : (
                    card.description?.map((ds) => (
                        <Description key={ds} color="gray">
                            {ds}
                        </Description>
                    ))
                )}

                <Description size="md">{card.cta}</Description>
            </div>
        </li>
    );
}

export default CardList;
