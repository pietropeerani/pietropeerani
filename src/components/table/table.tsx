import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export interface DataRow {
    title: string;
    date: string;
    image?: string;
    description?: string;
    links?: {
        href?: string;
        github?: string;
        file?: string;
    },
    company?: {
        name: string;
        href: string;
    };
}

const icons: Record<string, JSX.Element> = {
    href: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-txPrimary" d="M16 6.38286H15.6056V6.21075H14.8718V5.50813H14.138V4.80005H10.4352V5.50813H9.70136V6.21075H9.36759V5.85314H8.97318V5.1675H7.02682V5.8191H6.63241V6.21075H6.29303V5.50813H5.55924V4.80005H1.85637V5.50813H1.12258V6.21075H0.394406V6.45095H0V7.79599H0.394406V9.78931H1.12258V10.4974H1.85637V11.2H5.55924V10.4974H6.29303V9.78931H7.02682V6.58027H7.42122V5.92867H8.57878V6.61431H8.97318V9.78931H9.70136V10.4974H10.4352V11.2H14.138V10.4974H14.8718V9.78931H15.6056V7.79599H16V6.38286ZM3.38604 6.09639H2.82158V6.63017H2.26842V9.3699H2.82158V9.91458H3.38604V10.4484H2.28537V9.91458H1.72656V9.3699H1.16771V6.63017H1.72656V6.09639H2.28537V5.55171H3.38604V6.09639ZM11.9648 6.09639H11.4004V6.63017H10.8472V9.3699H11.4004V9.91458H11.9648V10.4484H10.8641V9.91458H10.3053V9.3699H9.74649V6.63017H10.3053V6.09639H10.8641V5.55171H11.9648V6.09639Z" fill="black" />
        </svg>
    ),
    github: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-txPrimary" d="M5 2H9V4H7V6H5V2ZM5 12H3V6H5V12ZM7 14H5V12H7V14ZM9 16V14H7V16H3V14H1V16H3V18H7V22H9V18H11V16H9ZM9 16V18H7V16H9ZM15 4V6H9V4H15ZM19 6H17V4H15V2H19V6ZM19 12V6H21V12H19ZM17 14V12H19V14H17ZM15 16V14H17V16H15ZM15 18H13V16H15V18ZM15 18H17V22H15V18Z" fill="white"></path>
        </svg>
    ),
    file: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-txPrimary" d="M5 2H9V4H7V6H5V2ZM5 12H3V6H5V12ZM7 14H5V12H7V14ZM9 16V14H7V16H3V14H1V16H3V18H7V22H9V18H11V16H9ZM9 16V18H7V16H9ZM15 4V6H9V4H15ZM19 6H17V4H15V2H19V6ZM19 12V6H21V12H19ZM17 14V12H19V14H17ZM15 16V14H17V16H15ZM15 18H13V16H15V18ZM15 18H17V22H15V18Z" fill="white"></path>
        </svg>
    )
};

export default function Table({ data }: { data: DataRow[] }) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [dateColumnWidth, setDateColumnWidth] = useState<number>(0);
    const [isEscPressed, setIsEscPressed] = useState(false);
    const tableRef = useRef<HTMLDivElement | null>(null);
    const dateColumnRef = useRef<HTMLDivElement | null>(null);

    const companyExist = (): boolean => {
        return data.some(row => row.company !== undefined);
    };

    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            const isInputFocused = ["input", "textarea", "select"].includes(
                document.activeElement?.tagName.toLowerCase() ?? ""
            );

            if (isInputFocused) {
                return;
            }

            if (event.key === "ArrowDown" || event.key === "j") {
                event.preventDefault()
                setSelectedIndex((prevIndex) =>
                    prevIndex === data.length - 1
                        ? 0
                        : prevIndex === null
                            ? 0
                            : Math.min(prevIndex + 1, data.length - 1)
                );
            } else if (event.key === "ArrowUp" || event.key === "k") {
                setSelectedIndex((prevIndex) =>
                    prevIndex === 0
                        ? data.length - 1
                        : prevIndex === null
                            ? data.length - 1
                            : Math.max(prevIndex - 1, 0)
                );
            } else if (event.key === "Escape") {
                setIsEscPressed(true);
                setSelectedIndex(null);
            }
        };

        window.addEventListener("keydown", handleKeydown);

        return () => {
            window.removeEventListener("keydown", handleKeydown);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isEscPressed) {
                setIsEscPressed(false);
                return;
            }

            if (tableRef.current && !tableRef.current.contains(event.target as Node)) {
                setSelectedIndex(null);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isEscPressed]);

    const handleMouseEnter = (index: number) => {
        setSelectedIndex(index);
    };

    useEffect(() => {
        if (dateColumnRef.current) {
            const maxWidth = Math.max(...data.map((row) => row.date.length));
            setDateColumnWidth(maxWidth * 10);
        }
    }, []);

    return (
        <div className="flex max-md:flex-col justify-between">
            <div
                ref={tableRef}
                className="h-fit flex flex-col w-3/5 max-md:w-full table-auto md:sticky md:top-0"
            >
                <div className="border-b border-windowBorder font-bold flex pb-2 mb-2 gap-4 justify-between">
                    <div
                        ref={dateColumnRef}
                        className="flex-1"
                        style={{
                            width: `${dateColumnWidth}px`,
                        }}
                    >
                        Date
                    </div>
                    <div className="flex-1">Title</div>
                    {companyExist() && <div className="flex-1 max-lg:hidden">Company</div>}
                    <div className="flex-1 max-lg:hidden"></div>
                </div>
                {data.map((row, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index)}
                        className="p-1 flex cursor-pointer gap-4 justify-between"
                        style={{
                            backgroundColor:
                                index === selectedIndex
                                    ? "var(--bg-table-select)"
                                    : "transparent",
                        }}
                    >
                        <div className="text-txSecondary flex-1">{row.date}</div>
                        <div className="flex-1">{row.title}</div>
                        {companyExist() && <div className="flex-1 text-txSecondary max-lg:hidden">{row.company?.name}</div>}
                        <div className="flex-1 inline-flex gap-2 max-lg:hidden">
                            {row.links &&
                                Object.entries(row.links).map(([key, link]) => (
                                    link && (
                                        <div
                                            key={key}
                                            className="inline-flex items-center gap-2 text-txLink"
                                        >
                                            {icons[key]}
                                        </div>
                                    )
                                ))}
                        </div>
                    </div>
                ))}
            </div>

            {selectedIndex !== null && (
                <div className="md:w-96 w-full max-md:my-2 h-fit p-4 cursor-default border border-windowBorder bg-windowBg flex flex-col gap-4">
                    <h1 className="text-txTitle"># {data[selectedIndex].title}</h1>
                    {data[selectedIndex].image && (
                        <div className="aspect-video overflow-hidden flex items-center justify-center">
                            <img src={data[selectedIndex].image} alt="Project Image" />
                        </div>
                    )}
                    {data[selectedIndex].links &&
                        Object.entries(data[selectedIndex].links)
                            .filter(([key, link]) => link && key !== "href" && key !== "company")
                            .length > 0 && (
                            <div className="inline-flex gap-2">
                                {Object.entries(data[selectedIndex].links)
                                    .filter(([key, link]) => link && key !== "href" && key !== "company")
                                    .map(([key, link]) => (
                                        <Link
                                            key={key}
                                            to={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-txLink"
                                        >
                                            {icons[key]}
                                        </Link>
                                    ))}
                            </div>
                        )}

                    {data[selectedIndex].description && (
                        <p>{data[selectedIndex].description}</p>
                    )}
                    {data[selectedIndex].links?.href && (
                        <Link
                            to={data[selectedIndex].links.href}
                            target="_blank"
                            className="inline-flex items-center gap-2 text-txLink"
                            onClick={(e) => e.stopPropagation()}
                        >
                            See details
                            <svg
                                width="8"
                                height="14"
                                viewBox="0 0 8 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    className="fill-txLink"
                                    d="M-8.74228e-08 2L0 -3.49691e-07L2 -2.62268e-07L2 2L4 2L4 4L6 4L6 6L8 6L8 8L6 8L6 10L4 10L4 12L2 12L2 14L-6.11959e-07 14L-5.24537e-07 12L2 12L2 10L4 10L4 8L6 8L6 6L4 6L4 4L2 4L2 2L-8.74228e-08 2Z"
                                    fill="white"
                                />
                            </svg>
                        </Link>
                    )}
                    {data[selectedIndex].links?.file && (
                        <Link
                            to={data[selectedIndex].links.file}
                            target="_blank"
                            className="inline-flex items-center gap-2 text-txLink"
                            onClick={(e) => e.stopPropagation()}
                        >
                            View
                            <svg
                                width="8"
                                height="14"
                                viewBox="0 0 8 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    className="fill-txLink"
                                    d="M-8.74228e-08 2L0 -3.49691e-07L2 -2.62268e-07L2 2L4 2L4 4L6 4L6 6L8 6L8 8L6 8L6 10L4 10L4 12L2 12L2 14L-6.11959e-07 14L-5.24537e-07 12L2 12L2 10L4 10L4 8L6 8L6 6L4 6L4 4L2 4L2 2L-8.74228e-08 2Z"
                                    fill="white"
                                />
                            </svg>
                        </Link>
                    )}
                    {data[selectedIndex].company?.href && (
                        <Link
                            to={data[selectedIndex].company.href}
                            target="_blank"
                            className="inline-flex items-center gap-2 text-txLink"
                            onClick={(e) => e.stopPropagation()}
                        >
                            View company
                            <svg
                                width="8"
                                height="14"
                                viewBox="0 0 8 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    className="fill-txLink"
                                    d="M-8.74228e-08 2L0 -3.49691e-07L2 -2.62268e-07L2 2L4 2L4 4L6 4L6 6L8 6L8 8L6 8L6 10L4 10L4 12L2 12L2 14L-6.11959e-07 14L-5.24537e-07 12L2 12L2 10L4 10L4 8L6 8L6 6L4 6L4 4L2 4L2 2L-8.74228e-08 2Z"
                                    fill="white"
                                />
                            </svg>
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
}
