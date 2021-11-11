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
            {icon}

            <span className='ml-4'>{text}</span>
        </li>
    )
}

export default function RightSidebar(): ReactElement {
    return (
        <ul className='max-w-xs min-w-[30px] bg-dark h-screen text-light200 font-bold px-3 resize-x text-sm'>
            <Option text='Home' icon={<Home />} active />
            <Option text='Search' icon={<Search />} />
            {/* <Option text='Your Library' /> */}
        </ul>
    )
}
