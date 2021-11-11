import React from 'react'

const AlbumWrapper: React.FC = ({ children }) => {
    return <div className='p-4'>{children}</div>
    // return <div className='bg-dark600 p-4'>{children}</div>
}

export default AlbumWrapper
