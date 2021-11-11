import React from 'react'
import type { NextPage } from 'next'
import AlbumWrapper from '@/components/AlbumWrapper'
import TrackList from '@/components/TrackList'
import Track from '@/components/Track'
import { Hash } from 'react-feather'
import AlbumBanner from '@/components/AlbumBanner'
import { getTrackTime } from '@/utils/getTrackTime'
import { performance } from 'universal-perf-hooks'

const a: NextPage = () => {
    return (
        <div>
            <AlbumBanner />
            <AlbumWrapper>
                <TrackList>
                    <Track
                        name='Album adn all the goats of the world and the best thing is that no one is gged'
                        artist='world and the best thing is that no one is gged loremand al the world and the best thing is that no one is gged'
                        time={60}
                        currentlyPlaying
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
                        rank={1}
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
                        rank={1}
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
                        rank={1}
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
                        rank={1}
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
                        rank={1}
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
                        rank={1}
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
                        rank={1}
                    />
                    <Track
                        name='Album'
                        artist='Matheus mendes'
                        time={59}
                        rank={9}
                    />
                    <Track
                        name='Album'
                        artist='Matheus mendes'
                        time={99}
                        rank={10}
                    />
                    <Track
                        name='Album'
                        artist='Matheus mendes'
                        time={3600}
                        rank={11}
                    />
                    <Track
                        name='Album'
                        artist='Matheus mendes'
                        time={3609}
                        rank={1}
                    />
                </TrackList>
            </AlbumWrapper>
        </div>
    )
}

export default a
