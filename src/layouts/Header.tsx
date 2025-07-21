import { useEffect, useRef, useState } from "react";
import { HEADER_MENU } from "../constance/header";
import useOutsideClick from "../hooks/useOutsideClick";

function Header() {
    const mobileRef = useRef<HTMLDivElement | null>(null);
    const [toggle, setToggle] = useState<boolean>(false);
    useOutsideClick(mobileRef, () => setToggle(false), toggle);

    const handleToggle = (e: React.MouseEvent) => {
        e.stopPropagation();
        setToggle((prev) => !prev);
    };

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout> | null = null;
        const handleResize = () => {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                if (window.innerWidth >= 768) {
                    setToggle(false);
                }
            }, 100);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            if (timer) clearTimeout(timer);
        };
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 max-w-7xl mx-auto bg-white">
            <div className="flex items-center justify-between">
                <div>
                    <img src="/asset/logo/logo.svg" alt="logo" />
                </div>
                <nav>
                    <ul className="hidden md:flex gap-4">
                        {HEADER_MENU.map((menu, i) => (
                            <li key={`menu-${menu}-${i}`} className="text-secondary">
                                <span className="text-primary">{i + 1}.</span>
                                {menu}
                            </li>
                        ))}
                    </ul>
                    <button className="md:hidden px-2" onMouseDown={handleToggle}>
                        {toggle ? "X" : "☰"}
                    </button>
                    {toggle && (
                        <div
                            ref={mobileRef}
                            className="fixed top-20 left-0 w-full border-b py-2 items-center   bg-white z-50 flex flex-col"
                        >
                            {/* 햄버거 클릭 시 열리는 메뉴 */}
                            <ul className="flex flex-col  gap-2 cursor-pointer w-full justify-center items-center ">
                                {HEADER_MENU.map((menu, i) => (
                                    <li key={`menu-${menu}-${i}`} className="text-secondary">
                                        <span className="text-primary">{i + 1}.</span>
                                        {menu}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default Header;
