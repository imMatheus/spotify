import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function useAuth(code: string) {
    const [accessToken, setAccessToken] = useState('')
    const [refreshToken, setRefreshToken] = useState('')
    const [expiresIn, setExpiresIn] = useState(0)
    const router = useRouter()
    useEffect(() => {
        axios
            .post('http://localhost:3000/api/login', {
                code,
            })
            .then((res) => {
                console.log('res:: ', res)

                setAccessToken(res.data.accessToken)
                setRefreshToken(res.data.refreshToken)
                setExpiresIn(res.data.expiresIn)
                // router.replace('/')
                window.history.pushState({}, '', '/')
            })
            .catch(() => {
                router.replace('/')
            })
    }, [code, router])

    useEffect(() => {
        if (!refreshToken || !expiresIn) return
        const interval = setInterval(() => {
            axios
                .post('http://localhost:3000/api/refresh', {
                    refreshToken,
                })
                .then((res) => {
                    setAccessToken(res.data.accessToken)
                    setExpiresIn(res.data.expiresIn)
                })
                .catch(() => {
                    router.replace('/')
                })
        }, (expiresIn - 60) * 1000)

        return () => clearInterval(interval)
    }, [refreshToken, expiresIn, router])
    if (!code) return ''

    return accessToken
}
