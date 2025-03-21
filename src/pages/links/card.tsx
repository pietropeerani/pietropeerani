import React from "react";
import { Link } from "react-router-dom";
import { instagram } from "../../utils/personalData";

export interface CardProps {
    image?: string,
    video?: string,
    link?: string,
    size: {
        rows: number,
        cols: number
    },
    label?: string
}

export default function Card({ data }: { data: CardProps }) {
    const Container: React.ElementType = data.link ? Link : "div";

    return (
        <Container {...(data.link && { to: data.link, target: "_blank" })} className={`group flex-col relative max-lg:!w-full ${data.size.rows == 1 && 'h-44'} max-lg:h-44 rounded-[22px] overflow-hidden flex justify-center items-center border-2 border-neutral-900 dark:border-neutral-100 border-opacity-10 dark:border-opacity-10`} style={{ gridColumn: `${data.size.cols} span / ${data.size.cols} span`, gridRow: `${data.size.rows} span / ${data.size.rows} span`, cursor: data.link && 'pointer' }}>
            {
                data.link &&
                <div className="absolute z-10 top-0 left-0 p-3 w-full h-full hover:bg-black hover:bg-opacity-10 transition-colors flex justify-end">
                    <div className="h-fit bg-white bg-opacity-20 p-1 rounded-full border-2 border-white border-opacity-20 group-hover:border-opacity-40">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.25403 1.46875C2.83987 1.46875 2.5041 1.80446 2.50403 2.21862C2.50396 2.63289 2.83977 2.96875 3.25403 2.96875H5.94325L1.47358 7.43842C1.18068 7.73131 1.18068 8.20619 1.47358 8.49908C1.76647 8.79197 2.24134 8.79197 2.53424 8.49908L7.00299 4.03033L7.00314 6.71982C7.00316 7.13345 7.34024 7.46875 7.75387 7.46875C8.16752 7.46875 8.50108 7.13342 8.50108 6.71978V2.21875C8.50108 1.80454 8.16529 1.46875 7.75108 1.46875H3.25403Z" fill="white"></path></svg>
                    </div>
                </div>
            }
            {
                data.label &&
                <div className="absolute z-20 bottom-0 left-0 p-3 pointer-events-none">
                    <div className="bg-white text-black bg-opacity-60 px-3 py-1 rounded-[34px] text-sm font-normal">
                        {data.label}
                    </div>
                </div>
            }
            {
                data.image &&
                <img className="w-full object-cover absolute h-full select-none" src={data.image} alt="" />
            }
            {
                data.video &&
                <video className="w-full object-cover absolute h-full pointer-events-none" src={data.video} controls={false} autoPlay muted loop></video>
            }
        </Container >
    )
}



export function InstagramCard() {
    return (
        <Link to={instagram} target="_blank" className="bg-neutral-100 dark:bg-neutral-900 h-44 transition-colors group flex flex-col gap-4 col-span-2 row-span-1 relative max-lg:!w-full rounded-[22px] overflow-hidden border-2 border-neutral-900 dark:border-neutral-100 border-opacity-10 dark:border-opacity-10 hover:no-underline p-4">
            <div className="flex justify-between w-full">
                <div className="flex flex-col gap-2">
                    <div className="h-10 w-10">
                        <svg width="16" height="16" className="h-full w-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="10" fill="black"></rect><rect x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke="black" stroke-opacity="0.08"></rect><mask id="mask0_920_2754" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40"><rect width="40" height="40" rx="10" fill="black"></rect><rect x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke="black" stroke-opacity="0.08"></rect></mask><g mask="url(#mask0_920_2754)"><path d="M20.0066 0C11.6568 0 9.21475 0.0086138 8.74007 0.0479912C7.02654 0.190427 5.96027 0.460223 4.79864 1.03858C3.90342 1.48311 3.1974 1.9984 2.5006 2.72073C1.2316 4.03803 0.462513 5.65865 0.184103 7.58507C0.0487432 8.52028 0.0093658 8.71101 0.00136727 13.488C-0.00170909 15.0803 0.00136727 17.1759 0.00136727 19.9868C0.00136727 28.3299 0.0105963 30.7694 0.050589 31.2432C0.189025 32.9106 0.450515 33.9596 1.00426 35.1071C2.06253 37.3036 4.08369 38.9525 6.46479 39.5678C7.28926 39.7801 8.19986 39.897 9.36888 39.9524C9.86417 39.9739 14.9125 39.9893 19.9639 39.9893C25.0152 39.9893 30.0666 39.9831 30.5496 39.9585C31.9032 39.8948 32.6892 39.7893 33.5583 39.5647C34.7389 39.262 35.8392 38.7051 36.7824 37.933C37.7255 37.161 38.4888 36.1924 39.0188 35.0948C39.5618 33.975 39.8371 32.886 39.9617 31.3056C39.9888 30.9611 40.0002 25.4676 40.0002 19.9816C40.0002 14.4946 39.9879 9.01127 39.9608 8.66671C39.8347 7.06086 39.5593 5.98105 38.9988 4.83973C38.5389 3.90544 38.0282 3.20772 37.2868 2.49431C35.964 1.23054 34.3458 0.461454 32.4173 0.183351C31.483 0.0482988 31.2968 0.00830617 26.5162 0H20.0066Z" fill="url(#paint0_radial_920_2754)"></path><path d="M20.0066 0C11.6568 0 9.21475 0.0086138 8.74007 0.0479912C7.02654 0.190427 5.96027 0.460223 4.79864 1.03858C3.90342 1.48311 3.1974 1.9984 2.5006 2.72073C1.2316 4.03803 0.462513 5.65865 0.184103 7.58507C0.0487432 8.52028 0.0093658 8.71101 0.00136727 13.488C-0.00170909 15.0803 0.00136727 17.1759 0.00136727 19.9868C0.00136727 28.3299 0.0105963 30.7694 0.050589 31.2432C0.189025 32.9106 0.450515 33.9596 1.00426 35.1071C2.06253 37.3036 4.08369 38.9525 6.46479 39.5678C7.28926 39.7801 8.19986 39.897 9.36888 39.9524C9.86417 39.9739 14.9125 39.9893 19.9639 39.9893C25.0152 39.9893 30.0666 39.9831 30.5496 39.9585C31.9032 39.8948 32.6892 39.7893 33.5583 39.5647C34.7389 39.262 35.8392 38.7051 36.7824 37.933C37.7255 37.161 38.4888 36.1924 39.0188 35.0948C39.5618 33.975 39.8371 32.886 39.9617 31.3056C39.9888 30.9611 40.0002 25.4676 40.0002 19.9816C40.0002 14.4946 39.9879 9.01127 39.9608 8.66671C39.8347 7.06086 39.5593 5.98105 38.9988 4.83973C38.5389 3.90544 38.0282 3.20772 37.2868 2.49431C35.964 1.23054 34.3458 0.461454 32.4173 0.183351C31.483 0.0482988 31.2968 0.00830617 26.5162 0H20.0066Z" fill="url(#paint1_radial_920_2754)"></path></g><path d="M20.0009 8C16.7418 8 16.3328 8.01425 15.0528 8.0725C13.7753 8.131 12.9033 8.33325 12.1403 8.63C11.351 8.9365 10.6815 9.3465 10.0145 10.0138C9.34701 10.6808 8.93701 11.3502 8.62951 12.1392C8.332 12.9025 8.1295 13.7748 8.072 15.0518C8.015 16.3317 8 16.741 8 20C8 23.259 8.0145 23.6668 8.0725 24.9468C8.13125 26.2243 8.3335 27.0962 8.63001 27.8592C8.93676 28.6485 9.34676 29.318 10.014 29.985C10.6808 30.6525 11.3503 31.0635 12.139 31.37C12.9026 31.6667 13.7748 31.869 15.0521 31.9275C16.3321 31.9858 16.7408 32 19.9996 32C23.2589 32 23.6667 31.9858 24.9467 31.9275C26.2242 31.869 27.0972 31.6667 27.8607 31.37C28.6497 31.0635 29.3182 30.6525 29.985 29.985C30.6525 29.318 31.0625 28.6485 31.37 27.8595C31.665 27.0963 31.8675 26.224 31.9275 24.947C31.985 23.667 32 23.259 32 20C32 16.741 31.985 16.332 31.9275 15.052C31.8675 13.7745 31.665 12.9025 31.37 12.1395C31.0625 11.3502 30.6525 10.6808 29.985 10.0138C29.3175 9.34625 28.65 8.93625 27.86 8.63C27.0949 8.33325 26.2224 8.131 24.9449 8.0725C23.6649 8.01425 23.2574 8 19.9974 8H20.0009ZM18.9244 10.1625C19.2439 10.162 19.6004 10.1625 20.0009 10.1625C23.2049 10.1625 23.5847 10.174 24.8499 10.2315C26.0199 10.285 26.6549 10.4805 27.0779 10.6448C27.638 10.8623 28.0372 11.1223 28.457 11.5423C28.877 11.9623 29.137 12.3622 29.355 12.9222C29.5192 13.3447 29.715 13.9797 29.7682 15.1497C29.8257 16.4148 29.8382 16.7947 29.8382 19.9972C29.8382 23.1997 29.8257 23.5797 29.7682 24.8447C29.7147 26.0147 29.5192 26.6497 29.355 27.0723C29.1375 27.6322 28.877 28.031 28.457 28.4508C28.037 28.8708 27.6382 29.1307 27.0779 29.3482C26.6554 29.5133 26.0199 29.7083 24.8499 29.7617C23.5849 29.8193 23.2049 29.8318 20.0009 29.8318C16.7966 29.8318 16.4168 29.8193 15.1518 29.7617C13.9818 29.7077 13.3468 29.5122 12.9236 29.348C12.3635 29.1305 11.9635 28.8705 11.5435 28.4505C11.1235 28.0305 10.8635 27.6315 10.6455 27.0713C10.4813 26.6488 10.2855 26.0138 10.2323 24.8438C10.1748 23.5787 10.1633 23.1987 10.1633 19.9942C10.1633 16.7897 10.1748 16.4118 10.2323 15.1468C10.2858 13.9768 10.4813 13.3417 10.6455 12.9187C10.863 12.3587 11.1235 11.9588 11.5435 11.5388C11.9635 11.1188 12.3635 10.8587 12.9236 10.6407C13.3466 10.4757 13.9818 10.2808 15.1518 10.227C16.2588 10.177 16.6878 10.162 18.9244 10.1595V10.1625ZM26.4064 12.155C26.1216 12.155 25.8432 12.2395 25.6064 12.3977C25.3695 12.556 25.185 12.7809 25.076 13.0441C24.967 13.3072 24.9385 13.5968 24.9941 13.8761C25.0497 14.1555 25.1869 14.412 25.3884 14.6134C25.5898 14.8148 25.8464 14.9519 26.1258 15.0074C26.4052 15.0629 26.6947 15.0343 26.9579 14.9252C27.221 14.8162 27.4458 14.6315 27.604 14.3947C27.7622 14.1578 27.8466 13.8793 27.8465 13.5945C27.8465 12.7995 27.2014 12.1545 26.4064 12.1545V12.155ZM20.0009 13.8375C16.5976 13.8375 13.8383 16.5968 13.8383 20C13.8383 23.4032 16.5976 26.1612 20.0009 26.1612C23.4042 26.1612 26.1627 23.4032 26.1627 20C26.1627 16.5968 23.4039 13.8375 20.0006 13.8375H20.0009ZM20.0009 16C22.2099 16 24.0009 17.7908 24.0009 20C24.0009 22.209 22.2099 24 20.0009 24C17.7916 24 16.0008 22.209 16.0008 20C16.0008 17.7908 17.7916 16 20.0009 16Z" fill="white"></path><defs><radialGradient id="paint0_radial_920_2754" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.6251 43.0693) rotate(-90) scale(39.6323 36.8712)"><stop stop-color="#FFDD55"></stop><stop offset="0.1" stop-color="#FFDD55"></stop><stop offset="0.5" stop-color="#FF543E"></stop><stop offset="1" stop-color="#C837AB"></stop></radialGradient><radialGradient id="paint1_radial_920_2754" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-6.70024 2.88076) rotate(78.6776) scale(17.716 73.0445)"><stop stop-color="#3771C8"></stop><stop offset="0.128" stop-color="#3771C8"></stop><stop offset="1" stop-color="#6600FF" stop-opacity="0"></stop></radialGradient></defs></svg>
                    </div>
                    <div>
                        Pietro Peerani
                    </div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-400 py-2 px-4 text-sm rounded-md h-fit text-white">
                    Follow
                </button>
            </div>

            <div className="w-full h-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                {Array.from({ length: 2 }).map((_, index) => (
                    <ul key={index} className="flex h-full items-center justify-center md:justify-start [&_li]:mx-2 animate-infinite-scroll w-fit">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <li key={index} className="h-full flex-grow">
                                <div className="bg-neutral-300 dark:bg-neutral-700 rounded-lg w-full aspect-square h-full"></div>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </Link>
    )
}