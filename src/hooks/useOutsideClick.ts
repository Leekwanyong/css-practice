import { useCallback, useEffect, type RefObject } from "react";

function useOutsideClick<T extends HTMLElement>(ref: RefObject<T | null>, onClick: () => void, isOpen?: boolean) {
    const handleClick = useCallback(
        (e: MouseEvent) => {
            const target = e.target as Node;
            if (!ref.current || ref.current.contains(target)) return;
            onClick();
        },
        [ref, onClick]
    );

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClick);
            return () => document.removeEventListener("mousedown", handleClick);
        }
    }, [handleClick, isOpen]);
}

export default useOutsideClick;
