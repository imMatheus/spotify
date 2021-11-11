import React from 'react'
import styles from 'styles/Track.module.scss'

import { Hash } from 'react-feather'
const TrackList: React.FC = ({ children }) => {
    return (
        <div className='z-10 relative'>
            <div className={styles.header}>
                <div className={styles.rank}>
                    <Hash size={14} />
                </div>
                <p>Title</p>
                <div>abc</div>
            </div>
            {children}
        </div>
    )
}

export default TrackList
