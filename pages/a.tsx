import React from 'react'
import type { NextPage } from 'next'
import AlbumWrapper from '@/components/AlbumWrapper'
import TrackList from '@/components/TrackList'
import Track from '@/components/Track'
import AlbumBanner from '@/components/AlbumBanner'

const a: NextPage = () => {
    return (
        <div>
            <AlbumBanner />
            <AlbumWrapper>
                <TrackList>
                    <Track
                        name='Album'
                        artist='Matheus mendes'
                        time={90}
                        rank={1}
                        currentlyPlaying
                    />
                    <Track
                        name='Album'
                        artist='Matheus mendes'
                        time={61}
                        rank={2}
                    />
                    <Track
                        name='Album'
                        artist='Matheus mendes'
                        time={90}
                        rank={3}
                    />
                    <Track
                        name='Album'
                        artist='Matheus mendes'
                        time={61}
                        rank={4}
                    />
                    <Track
                        name='Album'
                        artist='Matheus mendes'
                        time={90}
                        rank={5}
                    />
                    <Track
                        name='Album'
                        artist='Matheus mendes'
                        time={61}
                        rank={6}
                    />
                    <Track
                        name='Album'
                        artist='Matheus mendes'
                        time={90}
                        rank={7}
                    />
                    <Track
                        name='Album'
                        artist='Matheus mendes'
                        time={61}
                        rank={8}
                    />
                    <Track
                        name='Album'
                        artist='Matheus mendes'
                        time={90}
                        rank={9}
                    />
                    <Track
                        name='Album'
                        artist='Matheus mendes'
                        time={61}
                        rank={10}
                    />
                    <Track
                        name='Album'
                        artist='Matheus mendes'
                        time={90}
                        rank={11}
                    />
                    <Track
                        name='Album'
                        artist='Matheus mendes'
                        time={61}
                        rank={12}
                    />
                    <Track
                        name='Album'
                        artist='Matheus mendes'
                        time={90}
                        rank={13}
                    />
                    <Track
                        name='Album'
                        artist='Matheus mendes'
                        time={61}
                        rank={14}
                    />
                    <Track
                        name='Album'
                        artist='Matheus mendes'
                        time={59}
                        rank={15}
                    />
                    <Track
                        name='Album'
                        artist='Matheus mendes'
                        time={99}
                        rank={16}
                    />
                    <Track
                        name='Album'
                        artist='Matheus mendes'
                        time={3600}
                        rank={17}
                    />
                    <Track
                        name='Album'
                        artist='Matheus mendes'
                        time={3609}
                        rank={18}
                    />
                </TrackList>
            </AlbumWrapper>
        </div>
    )
}

export default a
