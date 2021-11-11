import React, { ButtonHTMLAttributes } from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import { ChevronLeft, ChevronRight } from 'react-feather'
import { useRouter } from 'next/router'

const CircleButton: React.FC<
    React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >
> = ({ children, ...props }) => {
    return (
        <button
            {...props}
            className='w-8 h-8 bg-dark900 rounded-full mr-4 flex justify-center items-center'
        >
            {children}
        </button>
    )
}

const Layout: React.FC = ({ children }) => {
    const router = useRouter()
    console.log('router')
    console.log(router)

    return (
        <section className='h-screen w-screen flex text-sm text-light bg-dark600'>
            <LeftSidebar />
            <div className='w-full overflow-y-scroll'>
                <div className='flex justify-between p-4 fixed top-0 z-30'>
                    <div className='flex'>
                        <CircleButton onClick={router.back}>
                            <ChevronLeft />
                        </CircleButton>
                        <CircleButton>
                            <ChevronRight />
                        </CircleButton>
                    </div>
                </div>
                {children}
            </div>
            {/* <RightSidebar /> */}
        </section>
    )
}

export default Layout
