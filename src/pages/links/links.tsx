import { Link } from "react-router-dom";
import Card, { CardProps, InstagramCard } from "./card";
import { email } from "../../utils/personalData";
import { useState } from "react";

/* const icons = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
        ),
        href: githubProfile
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
        ),
        href: instagram
    }
] */

const items: CardProps[] = [
    {
        image: "/links-banner/portfolio.png",
        link: "/",
        size: {
            rows: 1,
            cols: 2
        },
    },
    {
        image: "/links-banner/bitlusion-cover.jpg",
        label: "My startup",
        link: "https://bitlusion.com/",
        size: {
            rows: 2,
            cols: 2
        },
    },
    {
        video: "https://storage.googleapis.com/creatorspace-public/users%2Fcleoczgpt0004p70y1enognxt%2FuEYBSYsoDkNJM69P-Reel%2520progetti%2520su%2520YouTube.mov",
        link: "/",
        size: {
            rows: 2,
            cols: 2
        },
    },
]

export default function Links() {
    const [isCopied, setIsCopied] = useState(false);
    const [, setTooltipVisible] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(email).then(() => {
            setIsCopied(true);
            setTooltipVisible(true);

            setTimeout(() => {
                setIsCopied(false);
                setTooltipVisible(false);
            }, 2000);
        });
    };

    return (
        <>
            <section className="min-h-screen dark:bg-black dark:text-white selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black !font-serif">
                <div className="max-w-[1728px] flex items-start max-lg:flex-col max-lg:gap-8 mx-auto px-4 py-10">

                    <div className="w-1/4 max-lg:w-full flex flex-col justify-center gap-4 p-4 rounded-2xl">
                        <div className="w-24 h-24 overflow-hidden rounded-full">
                            <img src="/profile.jpg" alt="" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <div>
                                <h1 className="font-bold text-4xl">Pietro Peerani</h1>
                            </div>
                            <p className="text-black dark:text-white text-opacity-75 dark:text-opacity-75 font-normal">
                                Hi, I'm a programmer and I also deal with UI/UX.
                            </p>
                            {/* <div className="flex items-center justify-center gap-3 max-lg:mb-2">
                                {
                                    icons.map((item, id) => (
                                        <Link key={id} to={item.href} target="_blank" className="fill-white hover:fill-neutral-200">
                                            <div className="w-4 max-lg:w-6">
                                                {item.icon}
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div> */}
                            <div className="flex gap-4">
                                <Link to={`mailto:${email}`} className="bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-black w-full p-3 font-semibold rounded-xl text-center !no-underline">
                                    Let's connect
                                </Link>

                                <button onClick={handleCopy} className="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-gray-500 dark:text-gray-400 hover:text-gray-900 bg-gray-100 border-2 border-neutral-100 rounded-xl hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-950 dark:focus:ring-gray-700 dark:hover:text-white dark:border-gray-600" type="button">
                                    <span id="default-icon" className={!isCopied ? '' : 'hidden'}>
                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                        </svg>
                                    </span>
                                    <span id="success-icon" className={`${isCopied ? "" : "hidden"} inline-flex items-center`}>
                                        <svg className="w-4 h-4 stroke-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-3/4 grid justify-stretch items-stretch grid-cols-1 md:grid-cols-4 gap-8 max-lg:w-full p-4 max-lg:px-4">
                        {
                            items.map((item, id) => {
                                if (id == 2) {
                                    return (
                                        <InstagramCard />
                                    )
                                }
                                return <Card key={id} data={item} />
                            })
                        }
                    </div>
                </div>

            </section>
        </>
    )
}
