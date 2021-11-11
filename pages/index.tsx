import type { NextPage } from 'next'
import Image from 'next/image'
import styles from 'styles/CardWrapper.module.scss'
import jb from '../jb.png'
import logang from '../logang.jpeg'
import posti from '../posti.jpeg'
import useHover from '@/hooks/useHover'
import React, { useRef } from 'react'
import Link from 'next/link'
import { Play } from 'react-feather'

interface CardProps {
    title: string
    subtitle: string
    image: string | any
}

const Card: React.FC<CardProps> = ({ title, subtitle, image }) => {
    const ref = useRef<any>(null)
    let hover = useHover(ref)
    return (
        <Link href='/' passHref>
            <div
                className='p-4 bg-dark500 rounded cursor-pointer hover:bg-dark400 transition-colors'
                ref={ref}
            >
                <div className='mb-4 relative overflow-hidden'>
                    <Image
                        alt='image'
                        src={image}
                        layout='responsive'
                        width='100%'
                        height='100%'
                    />
                    {
                        <button
                            className={
                                styles.playButton +
                                ' ' +
                                (!hover ? styles.transformedPlayButton : '')
                            }
                        >
                            <Play size='20' />
                        </button>
                    }
                </div>
                <div className='text-base font-bold'>{title}</div>
                <p className={styles.subtitle}>
                    {subtitle} | {hover ? 'tt' : 'ff'}
                </p>
            </div>
        </Link>
    )
}

const CardWrapper: React.FC<{ title: string; subtitle: string; image: any }> = (
    props
) => {
    return (
        <div className='p-4'>
            <h2 className='font-bold text-2xl mb-4'>Musiken att ha koll på</h2>
            <div className={styles.cardWrapper}>
                <Card {...props} />
                <Card {...props} />
                <Card {...props} />
                <Card {...props} />
                <Card {...props} />
                <Card {...props} />
                <Card {...props} />
            </div>
        </div>
    )
}

const Home: NextPage = () => {
    return (
        <div className='m-2'>
            <CardWrapper title='1' subtitle='11' image={jb} />
            <CardWrapper title='2' subtitle='22' image={posti} />
            <CardWrapper title='3' subtitle='33' image={logang} />
        </div>
    )
}

export default Home
