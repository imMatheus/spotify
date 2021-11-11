import React, { useRef } from 'react'
import styles from 'styles/Track.module.scss'
import { getTrackTime } from '@/utils/getTrackTime'
import useHover from '@/hooks/useHover'

interface TrackProps {
    rank: number
    name: string
    artist: string
    time: number
    currentlyPlaying?: boolean
}
const Player = () => (
    <div className={styles.playingWrapper}>
        <div className={styles.playingBar}></div>
        <div className={styles.playingBar}></div>
        <div className={styles.playingBar}></div>
        <div className={styles.playingBar}></div>
    </div>
)

const Play = () => (
    <div className='w-full h-full'>
        <div className={styles.playTriangle}></div>
    </div>
)

const Pause = () => (
    <div className='w-4 h-4 flex justify-evenly '>
        <div className='w-1 h-4 bg-light'></div>
        <div className='w-1 h-4 bg-light'></div>
    </div>
)

const Track: React.FC<TrackProps> = ({
    rank,
    name,
    artist,
    time,
    currentlyPlaying,
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const hover = useHover(ref)
    return (
        <div className={styles.trackWrapper} ref={ref}>
            <div className={styles.rank}>
                <div className='absolute right-0 pointer-events-none w-full h-full'>
                    {hover ? (
                        currentlyPlaying ? (
                            <Pause />
                        ) : (
                            <Play />
                        )
                    ) : currentlyPlaying ? (
                        <Player />
                    ) : (
                        rank
                    )}
                </div>
            </div>
            <div>
                <p
                    className={
                        styles.boldText +
                        (!!currentlyPlaying ? ' text-primary' : ' ')
                    }
                >
                    {name}
                </p>
                <p className={styles.subtitle}>
                    {artist} {hover + ''}
                </p>
            </div>
            <div className='text-sm text-light200'>{getTrackTime(time)}</div>
            {/* <div className='text-sm text-light200'>{toTime(time)}</div> */}
        </div>
    )
}

export default Track
