import { useState, useEffect, useRef } from "react";

export default function ThemeChanger() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Controlla se il clic è fuori dal menu e dal bottone
            if (
                menuRef.current && !menuRef.current.contains(event.target as Node) &&
                buttonRef.current && !buttonRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        };

        // Controlla i click fuori
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="cursor-pointer inline-flex items-center justify-center gap-2 relative" ref={buttonRef} onClick={toggleMenu}>
            <span>Color theme</span>
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8H0V6H2V4H4V2H6V0H8V2H10V4H12V6H14V8H12V6H10V4H8V2H6V4H4V6H2V8Z" fill="white" />
            </svg>

            {isMenuOpen && (
                <div
                    ref={menuRef}
                    className="absolute bottom-full mb-2 max-md:right-[-1px] w-48 bg-black text-white border-2 border-white"
                >
                    <ul className="list-none">
                        <li className="p-2 hover:bg-white hover:text-black cursor-pointer">Theme 1</li>
                        <li className="p-2 hover:bg-white hover:text-black cursor-pointer">Theme 2</li>
                        <li className="p-2 hover:bg-white hover:text-black cursor-pointer">Theme 3</li>
                    </ul>
                </div>
            )}
        </div>
    );
}
