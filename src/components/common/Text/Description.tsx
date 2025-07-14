interface DescriptionProps {
    children: React.ReactNode;
    color?: "primary" | "gray";
    size?: "sm" | "md" | "lg";
    className?: string;
}

function Description({ size = "sm", color = "primary", className = "", children }: DescriptionProps) {
    const textSize = {
        sm: "text-sm",
        md: "text-xl",
        lg: "text-2xl",
    }[size];

    const textColor = {
        primary: "text-dark",
        gray: "text-gary-gary2",
    }[color];
    return <p className={`${textSize} ${textColor} ${className}`}>{children}</p>;
}

export default Description;
