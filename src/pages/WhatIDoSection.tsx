import Card from "../components/common/Card/Card";
import Title from "../components/common/Text/Title";
import { WHAT_CARD_DATA } from "../constance/card";

function WhatIDoSection() {
    return (
        <article className="mt-44">
            <div className="mb-20 ">
                <Title>What I do</Title>
            </div>
            <Card card={WHAT_CARD_DATA} isSubtitle={false} />
        </article>
    );
}

export default WhatIDoSection;
