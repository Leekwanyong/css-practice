import Title from "../../components/common/Text/Title";
import { LOGO_ICONS } from "../../constance/homeIcon";

function WhereToFind() {
    return (
        <article className="mt-40 px-4 lg:px-0">
            <div>
                <Title>Where to find 🔍 my work?</Title>
                <ul className="mt-16 grid grid-cols-1 px-4 lg:grid-cols-4 gap-8">
                    {LOGO_ICONS.map((logo) => (
                        <li key={logo.icon}>
                            <img src={logo.icon} alt={logo.icon} className="object-cover " />
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}

export default WhereToFind;
