module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                dark: '#000000',
                dark900: '#000000b3',
                dark800: '#00000099',
                dark700: '#00000080',
                dark600: '#121212',
                dark500: '#181818',
                dark400: '#282828',
                dark300: '#333333',
                dark200: '#535353',
                light: '#ffffff',
                light100: '#ffffff4d',
                light200: '#b3b3b3',
                light300: '#ffffff1a',
                light400: '#ffffffb3',
                primary: '#1db954',
                secondary: '#2e77d0',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
