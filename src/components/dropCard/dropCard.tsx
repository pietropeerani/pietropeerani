import React, { useEffect, useRef, useState } from "react";

interface DropCardProps {
    children: React.ReactNode;
    title: string;
}

export default function DropCard({ children, title }: DropCardProps) {
    const [showTextBlock, setShowTextBlock] = useState(false);

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [, setDashes] = useState('');

    const generateDashes = () => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const fontSize = 13;
            const hyphenWidth = fontSize;

            const count = Math.floor(containerWidth / hyphenWidth);
            setDashes('-'.repeat(count));
        }
    };

    useEffect(() => {
        generateDashes();
        window.addEventListener('resize', generateDashes);
        return () => window.removeEventListener('resize', generateDashes);
    }, []);

    const handleArrowClick = () => {
        setShowTextBlock(!showTextBlock);
    };

    return (
        <div ref={containerRef} className='p-2 max-w-2xl m-auto'>
            <div className='flex items-center gap-4 select-none' onClick={handleArrowClick}>
                <svg className={`transition-transform ${showTextBlock ? 'rotate-180' : 'rotate-0'}`} width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-txPrimary" d="M2 8H0V6H2V4H4V2H6V0H8V2H10V4H12V6H14V8H12V6H10V4H8V2H6V4H4V6H2V8Z" fill="white"></path>
                </svg>
                <span className='text-nowrap text-txTitle'>
                    - [{showTextBlock ? "x": " "}] {title} {/* dashes */}
                </span>
            </div>

            {showTextBlock && (
                <div>
                    <div className="flex flex-col gap-2 mt-2 mb-5">
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};
