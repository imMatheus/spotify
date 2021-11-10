import React, { ReactElement } from 'react'

interface OptionProps {
    text: string
}

function Option({ text }: OptionProps) {
    return <div className='p-3 hover:bg-gray-400 rounded-xl'>{text}</div>
}

export default function Navbar(): ReactElement {
    return (
        <div className='max-w-xs min-w-[30px] bg-blue-500 h-screen px-3 resize-x'>
            <Option text='hej' />
            <Option text='kevin' />
            <Option text='hur' />
            <Option text='år' />
            <Option text='du' />
        </div>
    )
}
