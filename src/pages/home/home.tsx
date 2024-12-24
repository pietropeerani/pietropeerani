import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface DateRow {
  title: string;
  date: string;
  image?: string;
  description?: string;
  links?: {
    href?: string;
    github?: string;
  };
}

const icons: Record<string, JSX.Element> = {
  href: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="4" height="8" rx="1" strokeLinejoin="round" />
        <rect x="10" y="4" width="4" height="8" rx="1" strokeLinejoin="round" />
        <path d="M6 8H10" strokeLinecap="square" />
      </g>
    </svg>
  ),
  github: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="fill-txPrimary" d="M5 2H9V4H7V6H5V2ZM5 12H3V6H5V12ZM7 14H5V12H7V14ZM9 16V14H7V16H3V14H1V16H3V18H7V22H9V18H11V16H9ZM9 16V18H7V16H9ZM15 4V6H9V4H15ZM19 6H17V4H15V2H19V6ZM19 12V6H21V12H19ZM17 14V12H19V14H17ZM15 16V14H17V16H15ZM15 18H13V16H15V18ZM15 18H17V22H15V18Z" fill="white"></path></svg>
  ),
};

const data: DateRow[] = [
  {
    title: "Automation Olympics",
    date: "04-06-2024",
    description: "The project team leader for a system that simulates the operation of a hydroelectric dam, utilizing two real Pelton and Francis turbines within the school to reproduce the energy generation process in a controlled and safe environment. The system includes a data collection mechanism. The process is automated through an S7-1200 PLC, which communicates via pressure and volume sensors over a Modbus-TCP network. The data sent to the web server is analyzed by a Machine Learning system and then displayed on a web app. Finally, the system, with the help of a second algorithm, is capable of self-managing by autonomously adjusting the speed of the motors.",
    links: {
      href: "https://press.siemens.com/it/it/comunicatostampa/proclamati-i-vincitori-dei-campionati-di-automazione-siemens-2024-tecnologie",
    },
  },
  {
    title: "Robotics Olympics",
    date: "22-03-2024",
    description: "This NAO-powered e-commerce system ranked second at the 2024 Italian National Robotics Olympics for its innovative approach to combining human-robot interaction with online shopping. Designed to enhance accessibility, it enables people with disabilities to achieve greater independence and inclusion in society.",
    links: {
      github: "https://github.com/GalileiIsNao-2024",
    },
  },
  {
    title: "Robotics Olympics",
    date: "23-05-2023",
    description: "Team leader of a project focused on recycling. A bin was built using a LEGO structure, equipped with a camera that could detect the material type of an object. The project was then presented as a game for children within the context of education on waste separation.",
    links: {
      github: "https://github.com/GalileiIsNao-2023",
    },
  },
];

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [dateColumnWidth, setDateColumnWidth] = useState<number>(0);
  const [isEscPressed, setIsEscPressed] = useState(false);
  const tableRef = useRef<HTMLDivElement | null>(null);
  const dateColumnRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      const isInputFocused = ["input", "textarea", "select"].includes(
        document.activeElement?.tagName.toLowerCase() ?? ""
      );

      if (isInputFocused) {
        return;
      }

      if (event.key === "ArrowDown" || event.key === "j") {
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
        className="h-fit flex flex-col w-3/5 max-md:w-full table-auto"
      >
        <div className="border-b border-white font-bold flex pb-2 mb-2">
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
          <div className="flex-1"></div>
        </div>
        {data.map((row, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            className="p-1 flex cursor-pointer"
            style={{
              backgroundColor:
                index === selectedIndex
                  ? "var(--bg-table-select)"
                  : "transparent",
            }}
          >
            <div className="text-txSecondary flex-1">{row.date}</div>
            <div className="flex-1">{row.title}</div>
            <div className="flex-1 inline-flex gap-2 max-md:justify-end">
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
              .filter(([key, link]) => link && key !== "href")
              .length > 0 && (
              <div className="inline-flex gap-2">
                {Object.entries(data[selectedIndex].links)
                  .filter(([key, link]) => link && key !== "href")
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
        </div>
      )}
    </div>
  );
}
