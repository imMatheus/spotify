import React from 'react'
import jb from '../jb.png'
import Image from 'next/image'
import styles from 'styles/Album.module.scss'
import { useStore } from '@/context/StateContext'

interface AlbumBannerProps {}

const Dot = () => (
    <div className='w-1 h-1 flex-shrink-0 bg-light400 rounded-full'></div>
)

const AlbumBanner: React.FC<AlbumBannerProps> = ({}) => {
    const state = useStore()
    console.log('state--------------------------------')
    console.log(state)
    return (
        <div className={styles.albumWrapper}>
            <div className='flex-shrink-0 w-52 h-52 xl:w-64 xl:h-64 md:w-56 md:h-56 mr-4'>
                <Image
                    src={jb}
                    alt='album cover'
                    layout='responsive'
                    width='100%'
                    height='100%'
                />
            </div>
            <div className='self-end'>
                <p>Album</p>
                <h1
                    className='xl:text-7xl md:text-6xl sm:text-5xl text-4xl font-bold py-2'
                    onClick={
                        () => null
                        // state.dispatch({ type: 'LOGIN', payload: 'rrrr' })
                    }
                >
                    Future Nostalgia Edition
                </h1>
                <div className='flex items-center gap-1'>
                    <div className='w-6 h-6 rounded-full overflow-hidden'>
                        <Image
                            src={jb}
                            alt='album cover'
                            layout='responsive'
                            width='100%'
                            height='100%'
                        />
                    </div>
                    <p className='font-medium text-sm '>Dua lipa</p>
                    <Dot />
                    <p className='font-medium text-sm text-light400'>2021</p>
                    <Dot />
                    <p className='font-medium text-sm text-light400'>
                        19 songs, 1 hr 1min
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AlbumBanner
