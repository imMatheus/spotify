import React from 'react'
import styles from 'styles/Track.module.scss'

import { Hash } from 'react-feather'
const TrackList: React.FC = ({ children }) => {
    return (
        <div className=''>
            <div className={styles.header}>
                <div className={styles.rank}>
                    {/* <div className='absolute right-0'> */}
                    <Hash size={12} />
                    {/* </div> */}
                </div>
                <p>Title</p>
                <div>abc</div>
            </div>
            {children}
        </div>
    )
}

export default TrackList
