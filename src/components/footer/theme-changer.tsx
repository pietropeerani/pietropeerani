import { useState, useEffect, useRef } from "react";

const themes = [
    "dark", "light"
]

export default function ThemeChanger() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || themes[0]);

    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const changeTheme = (newTheme: string) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

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
                <path className="fill-txPrimary" d="M2 8H0V6H2V4H4V2H6V0H8V2H10V4H12V6H14V8H12V6H10V4H8V2H6V4H4V6H2V8Z" fill="white" />
            </svg>

            {isMenuOpen && (
                <div
                    ref={menuRef}
                    className="absolute bottom-full mb-2 max-md:right-[-1px] w-48 bg-body text-white border-2 border-white"
                >
                    <ul className="list-none">
                        {
                            themes.map((item, index) => (
                                <li key={index} className="p-2 hover:bg-white hover:text-black cursor-pointer"
                                    onClick={() => changeTheme(item)}
                                >
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )}
        </div>
    );
}
