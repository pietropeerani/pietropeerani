import { Link } from "react-router-dom"

export default function NotFound() {
    const menu = [
        {
            name: "My Projects",
            href: "/projects"
        },
        {
            name: "About",
            href: "/about"
        }
    ]

    return (
        <div className="h-full flex items-center justify-center">
            <div className="flex flex-col justify-center items-center gap-8">
                <div>
                    <svg className="fill-logo max-md:w-full w-[700px]" viewBox="0 0 740 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.443359 19.2V0.719999H8.84336V19.2H0.443359ZM8.83789 19.2V0.719999H17.2379V19.2H8.83789ZM17.2324 19.2V0.719999H25.6324V19.2H17.2324ZM25.627 19.2V0.719999H34.027V19.2H25.627ZM34.0215 19.2V0.719999H42.4215V19.2H34.0215ZM42.416 19.2V0.719999H50.816V19.2H42.416ZM50.8105 19.2V0.719999H59.2105V19.2H50.8105ZM75.9941 19.2V0.719999H84.3941V19.2H75.9941ZM84.3887 19.2V0.719999H92.7887V19.2H84.3887ZM92.7832 19.2V0.719999H101.183V19.2H92.7832ZM101.178 19.2V0.719999H109.578V19.2H101.178ZM109.572 19.2V0.719999H117.972V19.2H109.572ZM117.967 19.2V0.719999H126.367V19.2H117.967ZM143.15 19.2V0.719999H151.55V19.2H143.15ZM151.545 19.2V0.719999H159.945V19.2H151.545ZM193.518 19.2V0.719999H201.918V19.2H193.518ZM201.912 19.2V0.719999H210.312V19.2H201.912ZM218.701 19.2V0.719999H227.101V19.2H218.701ZM227.096 19.2V0.719999H235.496V19.2H227.096ZM235.49 19.2V0.719999H243.89V19.2H235.49ZM243.885 19.2V0.719999H252.285V19.2H243.885ZM252.279 19.2V0.719999H260.679V19.2H252.279ZM260.674 19.2V0.719999H269.074V19.2H260.674ZM344.619 19.2V0.719999H353.019V19.2H344.619ZM353.014 19.2V0.719999H361.414V19.2H353.014ZM361.408 19.2V0.719999H369.808V19.2H361.408ZM369.803 19.2V0.719999H378.203V19.2H369.803ZM378.197 19.2V0.719999H386.597V19.2H378.197ZM386.592 19.2V0.719999H394.992V19.2H386.592ZM462.143 19.2V0.719999H470.543V19.2H462.143ZM470.537 19.2V0.719999H478.937V19.2H470.537ZM478.932 19.2V0.719999H487.332V19.2H478.932ZM487.326 19.2V0.719999H495.726V19.2H487.326ZM495.721 19.2V0.719999H504.121V19.2H495.721ZM504.115 19.2V0.719999H512.515V19.2H504.115ZM512.51 19.2V0.719999H520.91V19.2H512.51ZM537.693 19.2V0.719999H546.093V19.2H537.693ZM546.088 19.2V0.719999H554.488V19.2H546.088ZM554.482 19.2V0.719999H562.882V19.2H554.482ZM562.877 19.2V0.719999H571.277V19.2H562.877ZM571.271 19.2V0.719999H579.671V19.2H571.271ZM579.666 19.2V0.719999H588.066V19.2H579.666ZM604.85 19.2V0.719999H613.25V19.2H604.85ZM613.244 19.2V0.719999H621.644V19.2H613.244ZM655.217 19.2V0.719999H663.617V19.2H655.217ZM663.611 19.2V0.719999H672.011V19.2H663.611ZM680.4 19.2V0.719999H688.8V19.2H680.4ZM688.795 19.2V0.719999H697.195V19.2H688.795ZM697.189 19.2V0.719999H705.589V19.2H697.189ZM705.584 19.2V0.719999H713.984V19.2H705.584ZM713.979 19.2V0.719999H722.379V19.2H713.979ZM722.373 19.2V0.719999H730.773V19.2H722.373ZM0.443359 37.2V18.72H8.84336V37.2H0.443359ZM8.83789 37.2V18.72H17.2379V37.2H8.83789ZM67.5996 37.2V18.72H75.9996V37.2H67.5996ZM75.9941 37.2V18.72H84.3941V37.2H75.9941ZM117.967 37.2V18.72H126.367V37.2H117.967ZM126.361 37.2V18.72H134.761V37.2H126.361ZM143.15 37.2V18.72H151.55V37.2H143.15ZM151.545 37.2V18.72H159.945V37.2H151.545ZM193.518 37.2V18.72H201.918V37.2H193.518ZM201.912 37.2V18.72H210.312V37.2H201.912ZM218.701 37.2V18.72H227.101V37.2H218.701ZM227.096 37.2V18.72H235.496V37.2H227.096ZM260.674 37.2V18.72H269.074V37.2H260.674ZM269.068 37.2V18.72H277.468V37.2H269.068ZM336.225 37.2V18.72H344.625V37.2H336.225ZM344.619 37.2V18.72H353.019V37.2H344.619ZM369.803 37.2V18.72H378.203V37.2H369.803ZM378.197 37.2V18.72H386.597V37.2H378.197ZM386.592 37.2V18.72H394.992V37.2H386.592ZM394.986 37.2V18.72H403.386V37.2H394.986ZM462.143 37.2V18.72H470.543V37.2H462.143ZM470.537 37.2V18.72H478.937V37.2H470.537ZM529.299 37.2V18.72H537.699V37.2H529.299ZM537.693 37.2V18.72H546.093V37.2H537.693ZM579.666 37.2V18.72H588.066V37.2H579.666ZM588.061 37.2V18.72H596.461V37.2H588.061ZM604.85 37.2V18.72H613.25V37.2H604.85ZM613.244 37.2V18.72H621.644V37.2H613.244ZM655.217 37.2V18.72H663.617V37.2H655.217ZM663.611 37.2V18.72H672.011V37.2H663.611ZM680.4 37.2V18.72H688.8V37.2H680.4ZM688.795 37.2V18.72H697.195V37.2H688.795ZM722.373 37.2V18.72H730.773V37.2H722.373ZM730.768 37.2V18.72H739.168V37.2H730.768ZM0.443359 55.2V36.72H8.84336V55.2H0.443359ZM8.83789 55.2V36.72H17.2379V55.2H8.83789ZM17.2324 55.2V36.72H25.6324V55.2H17.2324ZM25.627 55.2V36.72H34.027V55.2H25.627ZM34.0215 55.2V36.72H42.4215V55.2H34.0215ZM67.5996 55.2V36.72H75.9996V55.2H67.5996ZM75.9941 55.2V36.72H84.3941V55.2H75.9941ZM117.967 55.2V36.72H126.367V55.2H117.967ZM126.361 55.2V36.72H134.761V55.2H126.361ZM143.15 55.2V36.72H151.55V55.2H143.15ZM151.545 55.2V36.72H159.945V55.2H151.545ZM193.518 55.2V36.72H201.918V55.2H193.518ZM201.912 55.2V36.72H210.312V55.2H201.912ZM218.701 55.2V36.72H227.101V55.2H218.701ZM227.096 55.2V36.72H235.496V55.2H227.096ZM235.49 55.2V36.72H243.89V55.2H235.49ZM243.885 55.2V36.72H252.285V55.2H243.885ZM252.279 55.2V36.72H260.679V55.2H252.279ZM260.674 55.2V36.72H269.074V55.2H260.674ZM285.857 55.2V36.72H294.257V55.2H285.857ZM294.252 55.2V36.72H302.652V55.2H294.252ZM302.646 55.2V36.72H311.046V55.2H302.646ZM311.041 55.2V36.72H319.441V55.2H311.041ZM319.436 55.2V36.72H327.836V55.2H319.436ZM336.225 55.2V36.72H344.625V55.2H336.225ZM344.619 55.2V36.72H353.019V55.2H344.619ZM361.408 55.2V36.72H369.808V55.2H361.408ZM369.803 55.2V36.72H378.203V55.2H369.803ZM386.592 55.2V36.72H394.992V55.2H386.592ZM394.986 55.2V36.72H403.386V55.2H394.986ZM411.775 55.2V36.72H420.175V55.2H411.775ZM420.17 55.2V36.72H428.57V55.2H420.17ZM428.564 55.2V36.72H436.964V55.2H428.564ZM436.959 55.2V36.72H445.359V55.2H436.959ZM445.354 55.2V36.72H453.754V55.2H445.354ZM462.143 55.2V36.72H470.543V55.2H462.143ZM470.537 55.2V36.72H478.937V55.2H470.537ZM478.932 55.2V36.72H487.332V55.2H478.932ZM487.326 55.2V36.72H495.726V55.2H487.326ZM495.721 55.2V36.72H504.121V55.2H495.721ZM529.299 55.2V36.72H537.699V55.2H529.299ZM537.693 55.2V36.72H546.093V55.2H537.693ZM579.666 55.2V36.72H588.066V55.2H579.666ZM588.061 55.2V36.72H596.461V55.2H588.061ZM604.85 55.2V36.72H613.25V55.2H604.85ZM613.244 55.2V36.72H621.644V55.2H613.244ZM655.217 55.2V36.72H663.617V55.2H655.217ZM663.611 55.2V36.72H672.011V55.2H663.611ZM680.4 55.2V36.72H688.8V55.2H680.4ZM688.795 55.2V36.72H697.195V55.2H688.795ZM697.189 55.2V36.72H705.589V55.2H697.189ZM705.584 55.2V36.72H713.984V55.2H705.584ZM713.979 55.2V36.72H722.379V55.2H713.979ZM722.373 55.2V36.72H730.773V55.2H722.373ZM0.443359 73.2V54.72H8.84336V73.2H0.443359ZM8.83789 73.2V54.72H17.2379V73.2H8.83789ZM67.5996 73.2V54.72H75.9996V73.2H67.5996ZM75.9941 73.2V54.72H84.3941V73.2H75.9941ZM117.967 73.2V54.72H126.367V73.2H117.967ZM126.361 73.2V54.72H134.761V73.2H126.361ZM143.15 73.2V54.72H151.55V73.2H143.15ZM151.545 73.2V54.72H159.945V73.2H151.545ZM193.518 73.2V54.72H201.918V73.2H193.518ZM201.912 73.2V54.72H210.312V73.2H201.912ZM218.701 73.2V54.72H227.101V73.2H218.701ZM227.096 73.2V54.72H235.496V73.2H227.096ZM260.674 73.2V54.72H269.074V73.2H260.674ZM269.068 73.2V54.72H277.468V73.2H269.068ZM336.225 73.2V54.72H344.625V73.2H336.225ZM344.619 73.2V54.72H353.019V73.2H344.619ZM353.014 73.2V54.72H361.414V73.2H353.014ZM361.408 73.2V54.72H369.808V73.2H361.408ZM386.592 73.2V54.72H394.992V73.2H386.592ZM394.986 73.2V54.72H403.386V73.2H394.986ZM462.143 73.2V54.72H470.543V73.2H462.143ZM470.537 73.2V54.72H478.937V73.2H470.537ZM529.299 73.2V54.72H537.699V73.2H529.299ZM537.693 73.2V54.72H546.093V73.2H537.693ZM579.666 73.2V54.72H588.066V73.2H579.666ZM588.061 73.2V54.72H596.461V73.2H588.061ZM604.85 73.2V54.72H613.25V73.2H604.85ZM613.244 73.2V54.72H621.644V73.2H613.244ZM655.217 73.2V54.72H663.617V73.2H655.217ZM663.611 73.2V54.72H672.011V73.2H663.611ZM680.4 73.2V54.72H688.8V73.2H680.4ZM688.795 73.2V54.72H697.195V73.2H688.795ZM722.373 73.2V54.72H730.773V73.2H722.373ZM730.768 73.2V54.72H739.168V73.2H730.768ZM0.443359 91.2V72.72H8.84336V91.2H0.443359ZM8.83789 91.2V72.72H17.2379V91.2H8.83789ZM75.9941 91.2V72.72H84.3941V91.2H75.9941ZM84.3887 91.2V72.72H92.7887V91.2H84.3887ZM92.7832 91.2V72.72H101.183V91.2H92.7832ZM101.178 91.2V72.72H109.578V91.2H101.178ZM109.572 91.2V72.72H117.972V91.2H109.572ZM117.967 91.2V72.72H126.367V91.2H117.967ZM151.545 91.2V72.72H159.945V91.2H151.545ZM159.939 91.2V72.72H168.339V91.2H159.939ZM168.334 91.2V72.72H176.734V91.2H168.334ZM176.729 91.2V72.72H185.129V91.2H176.729ZM185.123 91.2V72.72H193.523V91.2H185.123ZM193.518 91.2V72.72H201.918V91.2H193.518ZM218.701 91.2V72.72H227.101V91.2H218.701ZM227.096 91.2V72.72H235.496V91.2H227.096ZM260.674 91.2V72.72H269.074V91.2H260.674ZM269.068 91.2V72.72H277.468V91.2H269.068ZM344.619 91.2V72.72H353.019V91.2H344.619ZM353.014 91.2V72.72H361.414V91.2H353.014ZM361.408 91.2V72.72H369.808V91.2H361.408ZM369.803 91.2V72.72H378.203V91.2H369.803ZM378.197 91.2V72.72H386.597V91.2H378.197ZM386.592 91.2V72.72H394.992V91.2H386.592ZM462.143 91.2V72.72H470.543V91.2H462.143ZM470.537 91.2V72.72H478.937V91.2H470.537ZM537.693 91.2V72.72H546.093V91.2H537.693ZM546.088 91.2V72.72H554.488V91.2H546.088ZM554.482 91.2V72.72H562.882V91.2H554.482ZM562.877 91.2V72.72H571.277V91.2H562.877ZM571.271 91.2V72.72H579.671V91.2H571.271ZM579.666 91.2V72.72H588.066V91.2H579.666ZM613.244 91.2V72.72H621.644V91.2H613.244ZM621.639 91.2V72.72H630.039V91.2H621.639ZM630.033 91.2V72.72H638.433V91.2H630.033ZM638.428 91.2V72.72H646.828V91.2H638.428ZM646.822 91.2V72.72H655.222V91.2H646.822ZM655.217 91.2V72.72H663.617V91.2H655.217ZM680.4 91.2V72.72H688.8V91.2H680.4ZM688.795 91.2V72.72H697.195V91.2H688.795ZM722.373 91.2V72.72H730.773V91.2H722.373ZM730.768 91.2V72.72H739.168V91.2H730.768Z" />
                    </svg>
                </div>

                <div className="flex flex-col items-center text-center">
                    <p>Nothing happens here!</p>
                    <p>But there is something neat over there:</p>
                </div>

                <div>
                        {
                            menu.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.href}
                                    className="p-1 text-sm text-txLink !no-underline hover:bg-txLink hover:text-body"
                                >
                                    [{item.name}]
                                </Link>
                            ))
                        }
                    </div>

            </div>
        </div>
    )
}