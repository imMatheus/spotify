import React, { createContext, useContext, useReducer } from 'react'

type State = {
    user: any
    playlists: []
    spotify: any
    discover_weekly: any
    top_artists: any
    playing: any
    item: any
    token: any
}

const initialState: State = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    token: null,
}

type Action = {
    type:
        | 'SET_USER'
        | 'SET_PLAYING'
        | 'SET_ITEM'
        | 'SET_DISCOVER_WEEKLY'
        | 'SET_TOP_ARTISTS'
        | 'SET_TOKEN'
        | 'SET_SPOTIFY'
        | 'SET_PLAYLISTS'
    payload: any
}

type Context = [state: State, dispatch: React.Dispatch<Action>]

const StateContext = createContext<Context>([initialState, () => null])

export function useStore() {
    return useContext(StateContext)
}

export const StateProvider: React.FC = ({ children }) => {
    function reducer(state: State, action: Action): State {
        switch (action.type) {
            case 'SET_USER':
                return {
                    ...state,
                    user: action.payload.user,
                }

            case 'SET_PLAYING':
                return {
                    ...state,
                    playing: action.payload.playing,
                }

            case 'SET_ITEM':
                return {
                    ...state,
                    item: action.payload.item,
                }

            case 'SET_DISCOVER_WEEKLY':
                return {
                    ...state,
                    discover_weekly: action.payload.discover_weekly,
                }

            case 'SET_TOP_ARTISTS':
                return {
                    ...state,
                    top_artists: action.payload.top_artists,
                }

            case 'SET_TOKEN':
                return {
                    ...state,
                    token: action.payload.token,
                }
            case 'SET_SPOTIFY':
                return {
                    ...state,
                    spotify: action.payload.spotify,
                }

            case 'SET_PLAYLISTS':
                return {
                    ...state,
                    playlists: action.payload.playlists,
                }
            default:
                throw new Error()
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)

    return (
        <StateContext.Provider value={[state, dispatch]}>
            {children}
        </StateContext.Provider>
    )
}
