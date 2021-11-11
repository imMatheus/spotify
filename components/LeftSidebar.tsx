import React, { ReactElement } from 'react'
import { Home, Search, Icon } from 'react-feather'

interface OptionProps {
    text: string
    active?: boolean
    icon: JSX.Element
}

function Option({ text, active, icon }: OptionProps) {
    return (
        <li
            className={
                'py-2 px-3 flex items-center rounded-md' +
                (active ? ' text-light bg-dark400' : '')
            }
        >
            <div className='flex-shrink-0'>{icon}</div>

            <span className='ml-4 overflow-ellipsis'>{text}</span>
        </li>
    )
}

export default function LeftSidebar(): ReactElement {
    return (
        <ul className='max-w-xs min-w-[130px] bg-dark h-screen text-light200 font-bold px-3 flex-shrink-0'>
            <Option text='Home' icon={<Home />} active />
            <Option text='Search' icon={<Search />} />
            {/* <Option text='Your Library' /> */}
        </ul>
    )
}
