import { useState, useEffect } from 'react';

const data = [
    {
        label: "Jump between pages",
        cmd: "0-9"
    },
    {
        label: "Move up/down",
        cmd: "j, k"
    },
    {
        label: "Close popup",
        cmd: "q"
    }
]

export default function Help() {
    const [showWindow, setShowWindow] = useState(false);

    const isInputSelected = () => {
        const activeElement = document.activeElement;
        return activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA');
    };

    useEffect(() => {
        const handleKeyDown = (event: any) => {
            if (event.key === 'F1') {
                event.preventDefault()
                setShowWindow(true);
            } else if (event.key.toLowerCase() === 'q' || event.key === "Escape") {
                if (!isInputSelected()) {
                    setShowWindow(false);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    if (showWindow) {
        return (
            <div className='absolute w-full h-full flex justify-center items-center'>
                <div className="w-[500px] max-md:my-2 h-fit p-4 cursor-default border border-windowBorder bg-windowBg flex flex-col gap-4">
                    <div className='flex justify-between'>
                        <h1 className='text-txTitle'># Help</h1>
                        <span className='text-txLink'>[q] <span className='text-txLink hover:underline cursor-pointer' onClick={() => setShowWindow(false)}>quit</span></span>
                    </div>

                    <div>
                        <h2 className='text-txTitle'>## Hot keys</h2>
                        <div className="flex flex-col w-full">
                            {
                                data.map((item, index) => (
                                    <div key={index} className="flex">
                                        <div className="flex-table-cell w-1/2 text-txSecondary">{item.label}</div>
                                        <div className="flex-table-cell w-1/2 text-txLink">{item.cmd}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}