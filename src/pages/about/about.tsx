import { Link } from 'react-router-dom'
import { version } from '../../../package.json'
import { commands } from '../../components/command/command'

interface socialProps {
    [key : string]: {
        user: string,
        href: string
    }
}

export default function About() {
    const social: socialProps = {
        Instagram: {
            user: "@pietro.peerani",
            href: "https://instagram.com/pietro.peerani"
        },
        Github: {
            user: "@pietropeerani",
            href: "https://github.com/pietropeerani"
        }
    }

    return (
        <div className="h-full flex items-center justify-center">
            <div className='w-72 flex flex-col gap-8'>
                <h1 className='text-center text-[#FFDDC0]'>About page v{version}</h1>
                <div>
                    <h2 className='text-center text-[#FFDDC0] mb-2'>Me on the web</h2>
                    {
                        Object.keys(social).map((key, index) => (
                            <div key={index} className='flex'>
                                <span className='w-1/2'>{key}</span>
                                <Link to={social[key].href} target='_blank' className='text-[#C3C7F4]'>{social[key].user}</Link>
                            </div>
                        ))
                    }
                </div>
                <div className='max-md:hidden'>
                    <h2 className='text-center text-[#FFDDC0] mb-2'>Commands</h2>
                    {
                        commands.map((item, index) => (
                            <div key={index} className='flex'>
                                <span className='w-1/2'>
                                {item.cmd}<span className='text-[#C3C7F4]'>{"<Enter>"}</span>
                                </span>
                                <span className='text-neutral-400'>{item.description}</span>
                            </div>
                        ))
                    }
                </div>
                <span className='text-neutral-400 text-sm'>Inspired by Neovim</span>
            </div>
        </div>
    )
}