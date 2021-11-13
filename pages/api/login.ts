// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import SpotifyWebApi from 'spotify-web-api-node'

type Data = {
    name: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const code: string = req.body.code
    const spotify = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '4e8ec8ad27bd456eb8f5116def6e7f57',
        clientSecret: '7033d57bcfa54098b13af95679305e04',
    })
    console.log('from login')
    console.log(code)

    spotify
        .authorizationCodeGrant(code)
        .then((data) => {
            console.log('from login data')
            console.log(data)

            return res.json({
                accessToken: data.body?.access_token,
                refreshToken: data.body?.refresh_token,
                expiresIn: data.body?.expires_in,
            })
        })
        .catch((err) => {
            console.log('error')
            console.log(err)

            res.status(404)
        })
    console.log('end of login')
}
