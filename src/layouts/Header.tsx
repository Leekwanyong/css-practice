import { HEADER_MENU } from "../constance/header";

function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 max-w-7xl mx-auto bg-white">
            <div className="flex items-center justify-between">
                <div>
                    <img src="/asset/logo/logo.svg" alt="logo" />
                </div>
                <nav>
                    <ul className="flex gap-4">
                        {HEADER_MENU.map((menu, i) => (
                            <li key={`menu-${menu}-${i}`} className="text-secondary">
                                <span className="text-primary">{i + 1}.</span>
                                {menu}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
