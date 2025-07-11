import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    size: "sm" | "md";
    color: "primary" | "success";
    className?: string;
}

function Button({ type = "button", size = "sm", color = "primary", className = "", children }: ButtonProps) {
    const buttonColor = {
        primary: "bg-primary",
        success: "bg-secondary",
    }[color];

    const buttonSize = {
        sm: "w-[134px] h-[48px]",
        md: "w-[171px] h-[48px]",
    }[size];
    return (
        <button type={type} className={`${buttonColor} ${buttonSize} ${className}`}>
            {children}
        </button>
    );
}

export default Button;
