import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from 'react-router-dom';

export default function Navbar() {
    const items = [
        {
            name: "My Projects",
            href: "/"
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
        <div className="flex gap-4">
            {items.map((item, index) => {
                const isActive = location.pathname === item.href; 
                return (
                    <Link
                        key={index}
                        to={item.href}
                        className={`text-txLink px-3 py-2 hover:no-underline ${isActive && 'bg-navBg !text-navTx'}`}
                    >
                        ({index}) {item.name}
                    </Link>
                );
            })}
        </div>
    );
}
