import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextComponentType, NextPageContext } from 'next'
import Layout from '@/components/Layout'
import { StateProvider, useStore } from '@/context/StateContext'
import Login from '@/components/Login'
import useAuth from '@/context/useAuth'
import { useRouter } from 'next/router'
import SpotifyWebApi from 'spotify-web-api-node'
import { useEffect } from 'react'

const s = new SpotifyWebApi()

export const getTokenFromResponse = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial: any, item: any) => {
            var parts = item.split('=')
            initial[parts[0]] = decodeURIComponent(parts[1])

            return initial
        }, {})
}

function Main({
    Component,
    pageProps,
}: {
    Component: NextComponentType<NextPageContext, any, {}>
    pageProps: any
}) {
    const [{ token }, dispatch] = useStore()

    console.log('fff')
    console.log(token)

    const router = useRouter()
    const { code } = router.query
    console.log(code)

    const accessToken = useAuth(
        Array.isArray(code) ? code[code.length - 1] : code || ''
    )
    console.log('from main')
    console.log(accessToken)

    useEffect(() => {
        // Set token
        // const hash = getTokenFromResponse()
        // window.location.hash = ''
        // let _token = hash.access_token
        console.log('from inside effect')
        // console.log('hash: ', hash)
        // console.log('_token: ', _token)
        console.log('accessToken: ', accessToken)

        if (accessToken) {
            s.setAccessToken(accessToken)

            dispatch({
                type: 'SET_TOKEN',
                payload: {
                    token: accessToken,
                },
            })

            s.getPlaylist('37i9dQZEVXcJZyENOWUFo7').then((response) =>
                dispatch({
                    type: 'SET_DISCOVER_WEEKLY',
                    payload: {
                        discover_weekly: response,
                    },
                })
            )

            s.getMyTopArtists().then((response) =>
                dispatch({
                    type: 'SET_TOP_ARTISTS',
                    payload: {
                        top_artists: response,
                    },
                })
            )

            dispatch({
                type: 'SET_SPOTIFY',
                payload: {
                    spotify: s,
                },
            })

            s.getMe().then((user) => {
                dispatch({
                    type: 'SET_USER',
                    payload: {
                        user,
                    },
                })
            })

            s.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: 'SET_PLAYLISTS',
                    payload: {
                        playlists,
                    },
                })
            })
        }
    }, [token, dispatch, accessToken])

    if (accessToken)
        return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
        )
    return <Login />
}

function MyApp({ Component, pageProps }: AppProps) {
    const s = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '4e8ec8ad27bd456eb8f5116def6e7f57',
        clientSecret: '7033d57bcfa54098b13af95679305e04',
    })
    console.log('__________---------________')
    console.log(s)
    console.log(s.getAccessToken())
    // s.getMe()?.then((data) => {
    //     console.log(data)
    // })

    return (
        <StateProvider>
            <Main Component={Component} pageProps={pageProps} />
        </StateProvider>
    )
}

export default MyApp
