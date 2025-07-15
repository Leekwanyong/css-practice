import Title from "../components/common/Text/Title";
import { LOGO_ICONS } from "../constance/homeIcon";
import ProfileSection from "./ProfileSection";
import WhatIDoSection from "./WhatIDoSection";

function Home() {
    return (
        <section>
            <ProfileSection />
            <WhatIDoSection />
            <article className="mt-40">
                <div>
                    <Title>Where to find 🔍 my work?</Title>
                    <ul className="mt-16 grid grid-cols-4 gap-8">
                        {LOGO_ICONS.map((logo) => (
                            <li key={logo.icon}>
                                <img src={logo.icon} alt={logo.icon} className="object-cover" />
                            </li>
                        ))}
                    </ul>
                </div>
            </article>
        </section>
    );
}

export default Home;
