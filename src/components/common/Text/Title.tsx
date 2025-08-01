import type React from "react";

interface TitleProps {
    children: React.ReactNode;
}

function Title({ children }: TitleProps) {
    return <h1 className="text-2xl font-bold">{children}</h1>;
}

export default Title;
