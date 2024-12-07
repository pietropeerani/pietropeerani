import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from 'react-router-dom';

export default function Navbar() {
    const [show, showMenu] = useState(false);

    const items = [
        {
            name: "My Projects",
            href: "/"
        },
        {
            name: "Skills",
            href: "/skills"
        },
        {
            name: "About",
            href: "/about"
        }
    ];

    const [, setActiveIndex] = useState<number | null>(null);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleKeyPress = (e: any) => {
            const key = parseInt(e.key, 10);
            if (!isNaN(key) && key >= 0 && key < items.length) {
                setActiveIndex(key);
                navigate(items[key].href);
            }
        };

        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [items, navigate]);

    return (
        <>
            {/* Menu Toggle for Small Screens */}
            <div className="hidden gap-2 items-center bg-windowBg px-2 py-1 max-md:flex">
                <div onClick={() => showMenu(!show)} className="cursor-pointer">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.33325 8H26.6666V10.6667H5.33325V8ZM5.33325 14.6667H26.6666V17.3333H5.33325V14.6667ZM26.6666 21.3333H5.33325V24H26.6666V21.3333Z" fill="white" />
                    </svg>
                </div>
                <div className="uppercase">Menu</div>
            </div>

            {/* Menu Links - Will show on small screens (toggle) or always visible on larger screens */}
            <div className={`flex max-md:flex-col md:flex-row ${show ? 'block' : 'hidden'} md:block`}>
                {items.map((item, index) => {
                    const isActive = location.pathname === item.href;
                    return (
                        <Link
                            key={index}
                            to={item.href}
                            className={`text-txLink px-3 py-2 hover:no-underline ${isActive && 'bg-navBg !text-navTx'}`}
                        >
                            <span className={`max-md:hidden text-txLink ${isActive && 'bg-navBg !text-navTx'}`}>({index})</span> {item.name}
                        </Link>
                    );
                })}
            </div>
        </>
    );
}
