import type React from "react";

interface InputProps {
    type?: string;
    as?: "input" | "textarea";
    className?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function Input({ type = "text", className = "", as = "input", value, placeholder, onChange }: InputProps) {
    return (
        <>
            {as === "input" ? (
                <input type={type} className={className} placeholder={placeholder} value={value} onChange={onChange} />
            ) : (
                <textarea className={className} placeholder={placeholder} value={value} onChange={onChange} />
            )}
        </>
    );
}

export default Input;
