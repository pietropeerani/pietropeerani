import { Link } from 'react-router-dom'
import { version } from '../../../package.json'
import { commands } from '../../components/command/command'
import { githubProfile, instagram } from '../../utils/personalData'

interface socialProps {
    [key: string]: {
        user: string,
        href: string
    }
}

export default function About() {
    const social: socialProps = {
        Instagram: {
            user: "@pietro.peerani",
            href: instagram
        },
        Github: {
            user: "@pietropeerani",
            href: githubProfile
        }
    }

    return (
        <div className="h-full max-lg:my-20 flex items-center justify-center">
            <div className='w-full max-w-96 flex flex-col gap-8'>
                <h1 className='text-center text-txTitle'>About page v{version}</h1>
                <div>
                    <h2 className='text-center text-txTitle mb-2'>Me on the web</h2>
                    {
                        Object.keys(social).map((key, index) => (
                            <div key={index} className='flex'>
                                <span className='w-1/2'>{key}</span>
                                <Link to={social[key].href} target='_blank' className='text-txLink'>{social[key].user}</Link>
                            </div>
                        ))
                    }
                </div>

                <div className='max-md:hidden'>
                    <h2 className='text-center text-txTitle mb-2'>Commands</h2>
                    <div className='flex'>
                        <span className='w-1/2'>
                            f1
                        </span>
                        <span className='text-txSecondary'>Help</span>
                    </div>
                    {
                        commands.map((item, index) => {
                            if (item.render)
                                return (
                                    <div key={index} className='flex'>
                                        <span className='w-1/2'>
                                            <span>:</span>{item.cmd[0]}<span className='text-txLink'>{"<Enter>"}</span>
                                        </span>
                                        <span className='text-txSecondary'>{item.description}</span>
                                    </div>
                                )
                        })
                    }
                </div>

                <span className='text-txSecondary text-sm'>Inspired by Neovim</span>
            </div>
        </div >
    )
}