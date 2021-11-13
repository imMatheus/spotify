import React from 'react'

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
    const AUTH_URL =
        'https://accounts.spotify.com/authorize?client_id=4e8ec8ad27bd456eb8f5116def6e7f57&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

    return (
        <div className='p-4'>
            login
            <a
                href={AUTH_URL}
                className='p-3 rounded-md bg-primary text-light shadow-2xl'
            >
                login with spotify
            </a>
        </div>
    )
}

export default Login
